import * as dotenv from "dotenv";
import { BookControllerApi, Configuration, SeriesControllerApi } from "./core";
dotenv.config();

const config = new Configuration({
  headers: {
    cookie: process.env.COOKIE!,
  },
});

// const api = new BaseAPI(config);

const seriesController = new SeriesControllerApi(config);
const bookController = new BookControllerApi(config);

seriesController
  .getAllSeries({ page: 0 })
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

bookController
  .getAllBooks({ page: 0 })
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
