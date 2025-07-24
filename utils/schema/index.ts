import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.string().transform((val) => parseInt(val, 10)),

  // Server-only vars (no NEXT_PUBLIC prefix)
  DATABASE_URL: z.string().url(),

  // Client-exposed vars (must start with NEXT_PUBLIC_)
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  API_VERSION: z.string(),
});
