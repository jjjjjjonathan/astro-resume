import { projects } from "./resume.json";
import { format } from "date-fns";

// startDate and endDate from resume.json are in 'YYYY-MM-DD' format.
export const DEFAULT_DATE_FORMAT = "MMM y";
export const formatDate = (
  startDate: string,
  endDate: string,
  outputFormat: string
) => {
  const formattedStartDate = format(new Date(startDate), outputFormat);

  if (!endDate) {
    return `${formattedStartDate}–Present`;
  } else {
    const formattedEndDate = format(new Date(endDate), outputFormat);

    if (formattedStartDate === formattedEndDate) {
      return formattedStartDate;
    } else {
      return `${formattedStartDate}–${formattedEndDate}`;
    }
  }
};

export const getProjects = () => {
  const sortedProjects = projects.sort((prev, current) => {
    if (!prev.endDate && !current.endDate) {
      return Date.parse(current.startDate) - Date.parse(prev.startDate);
    } else if (!prev.endDate && current.endDate) {
      return -1;
    } else if (prev.endDate && !current.endDate) {
      return 1;
    } else {
      return Date.parse(current.startDate) - Date.parse(prev.startDate);
    }
  });

  return sortedProjects.map((project) => ({
    name: project.name,
    description: project.description,
    url: project.url,
    keywords: project.keywords,
    date: formatDate(project.startDate, project.endDate, DEFAULT_DATE_FORMAT),
  }));
};
