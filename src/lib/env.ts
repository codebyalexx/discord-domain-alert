import {configDotenv} from 'dotenv';
import {z} from 'zod';
configDotenv();

const schema = z.object({
  DISCORD_TOKEN: z.string(),
  DOMAIN: z
    .string()
    .refine(
      (value: string) => /^([A-Za-z])+([.])([A-Za-z]){2,10}$/g.test(value),
      'Value must be a top level domain',
    ),
});

const parsed = schema.parse(process.env);

export const env = parsed;
