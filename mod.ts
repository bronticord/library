import * as z from "https://deno.land/x/zod@v3.22.4/mod.ts";

const config = z.object({
  app_id: z.coerce.string(),
  bot_token: z.string(),
  public_key: z.string(),
});

type config = {
  app_id: string;
  bot_token: string;
  public_key: string;
};

function createConfig(conf: config): config {
  return config.parse(conf);
}

export { createConfig };

export { commandConfig } from "./command.ts";
