import { z, defineCollection } from "astro:content";

const coverLetterCollection = defineCollection({
  type: "content",
  schema: z.object({
    date: z.date().optional(),
    company: z.string(),
    address: z.string(),
    city: z.string(),
    province: z.string(),
    postalCode: z.string(),
    position: z.string(),
  }),
});

export const collections = {
  coverletters: coverLetterCollection,
};
