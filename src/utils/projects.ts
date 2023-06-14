import { projects } from './resume.json'
import { format } from 'date-fns'

// dates in resume.json are in 'YYYY-MM-DD' format
const formatDate = (startDate: string, endDate: string) => {
  const formattedStartDate = format(new Date(startDate), 'MMM y');
  
  if (startDate === endDate) {
    return formattedStartDate;
  } else if (!endDate) {
    return `${formattedStartDate}–Present`;
  } else {
    const formattedEndDate = format(new Date(endDate), 'MMM y');
    return `${formattedStartDate}–${formattedEndDate}`;
  }
}

export const getProjects = () => {
  return projects.map((project) => ({
    name: project.name,
    description: project.description,
    url: project.url,
    keywords: project.keywords,
    date: formatDate(project.startDate, project.endDate)
  }))
}
