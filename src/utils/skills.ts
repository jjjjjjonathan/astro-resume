import { skills } from "./resume.json";

export const getSkills = () => {
  return skills.map((skillSection) => ({
    name: skillSection.name,
    tags: skillSection.keywords,
  }));
};
