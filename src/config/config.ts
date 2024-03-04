import { Configuration } from "../../core";
import * as dotenv from "dotenv";
dotenv.config();

export const komgaConfig = new Configuration({
  headers: {
    cookie: process.env.COOKIE!,
  },
});
