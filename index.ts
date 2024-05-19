import * as dotenv from "dotenv";
import { BookControllerApi, Configuration, SeriesControllerApi } from "./core";
import { hentag } from "./src/apis/hentagApi";
import { patchAllBook } from "./src/service/patchBook";
dotenv.config();

// const api = new BaseAPI(config);

// const seriesController = new SeriesControllerApi(config);
// const bookController = new BookControllerApi(config);

// seriesController
//   .getAllSeries({ page: 0 })
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// bookController
//   .getAllBooks({ page: 0 })
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

patchAllBook();
