import { BookControllerApi } from "../../core";

import { hentag } from "../apis/hentagApi";
import { komgaConfig } from "../config";
import { extractHentagPayload } from "./extractHentag";

import * as fs from "fs/promises";

export const patchBook = async () => {
  const bookController = new BookControllerApi(komgaConfig);

  // const bookMetadataUpdateDto = extractHentagPayload(metadata);

  //   await bookController.updateMetadata1({
  //     bookId: "0FA2391RKM0QR",
  //     bookMetadataUpdateDto,
  //   });
  //   console.log("Updated Metadata for this book!");

  const books = (await bookController.getAllBooks({ page: 4, size: 100 }))
    .content;

  if (!books) return;
  for (let i = 0; i < books.length; i++) {
    try {
      const bookName = books[i].name;
      const bookId = books[i].id;
      const metadata = await hentag(bookName);
      const bookMetadataUpdateDto = extractHentagPayload(metadata);
      await bookController.updateMetadata1({
        bookId: bookId,
        bookMetadataUpdateDto,
      });
      console.table({ title: bookMetadataUpdateDto?.title, bookName, bookId });
      console.log("-----------------------------------------");
    } catch (error) {
      const errorLog = `Error occurred: ${new Date().toISOString()}\nBOOK ID: ${
        books[i]?.id
      }\nBOOK NAME: ${books[i]?.name}\n${error}\n\n`;
      fs.appendFile("error.log", errorLog)
        .then(() => console.log("Error written to error.log"))
        .catch((appendError) =>
          console.error("Error writing to error.log:", appendError)
        );
    }
  }
};
