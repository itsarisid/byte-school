import { z } from "zod"

export const schema = z.object({
  id: z.number(),
  name: z.string(),
  grade: z.string(),
  status: z.string(),
  rollNo: z.string(),
  performance: z.string(),
  parent: z.string(),
})

export type Task = z.infer<typeof schema>
