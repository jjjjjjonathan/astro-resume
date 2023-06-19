import { formatDate, DEFAULT_DATE_FORMAT } from "./projects";
import { work } from "./resume.json";

export const getWork = () => {
  const sortedWork = work.sort((prev, current) => {
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

  return sortedWork.map((job) => ({
    name: job.name,
    position: job.position,
    date: formatDate(job.startDate, job.endDate, DEFAULT_DATE_FORMAT),
    summary: job.summary,
    highlights: job.highlights,
    tags: job.keywords,
  }));
};
