import { formatDate } from "./projects";
import { education } from "./resume.json";

const EDUCATION_DATE_FORMAT = "y";

export const getEducation = () => {
  return education.map((school) => ({
    institution: school.institution,
    area: school.area,
    studyType: school.studyType,
    date: formatDate(school.startDate, school.endDate, EDUCATION_DATE_FORMAT),
    note: school.note,
  }));
};
