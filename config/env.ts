import { envSchema } from "@/utils/schema";
const env = envSchema.safeParse(process.env);
if (env.success === false) {
  console.error("Invalid environment variables", env.error.format());
  throw new Error("Invalid environment variables.");
}
export const AppEnv = {
  NODE_ENV: env.data?.NODE_ENV,
  PORT: env.data.PORT,
  // Server-only vars (no NEXT_PUBLIC prefix)
  DATABASE_URL: env.data.DATABASE_URL,

  // Client-exposed vars (must start with NEXT_PUBLIC_)
  NEXT_PUBLIC_API_BASE_URL: env.data.NEXT_PUBLIC_API_BASE_URL,
  API_VERSION: env.data.API_VERSION,
};
