import { Configuration } from "../../core";
import * as dotenv from "dotenv";
dotenv.config();

export const komgaConfig = new Configuration({
  basePath: "http://192.168.1.17:7788",
  headers: {
    cookie: process.env.COOKIE!,
  },
});
