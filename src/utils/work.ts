import { formatDate, DEFAULT_DATE_FORMAT } from "./projects";
import { work } from './resume.json'

export const getWork = () => {
  return work.map((job) => ({
    name: job.name,
    position: job.position,
    date: formatDate(job.startDate, job.endDate, DEFAULT_DATE_FORMAT),
    summary: job.summary,
    highlights: job.highlights
  }))
}
