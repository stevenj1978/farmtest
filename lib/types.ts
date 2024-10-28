import { z } from 'zod';

export const searchSchema = z.object({
  zipCode: z.string().min(5).max(10),
  radius: z.number().min(1).max(500).default(25),
  productTypes: z.array(z.string()).default([]),
  productAttributes: z.record(z.array(z.string())).default({}),
  certifications: z.array(z.string()).default([]),
  weightPricing: z.string().optional(),
  seasonalAvailability: z.string().optional(),
});

export type SearchFormType = z.infer<typeof searchSchema>;

export interface Farm {
  id: string;
  name: string;
  description: string;
  location: {
    city: string;
    state: string;
    distance?: number;
  };
  image: string;
  certifications: string[];
  products: Array<{
    type: string;
    attributes: string[];
  }>;
  featured?: boolean;
}