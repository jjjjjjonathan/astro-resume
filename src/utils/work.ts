import { formatDate } from "./projects";
import { work } from './resume.json'

export const getWork = () => {
  return work.map((job) => ({
    name: job.name,
    position: job.position,
    date: formatDate(job.startDate, job.endDate),
    summary: job.summary,
    highlights: job.highlights
  }))
}
