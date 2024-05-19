import { BookControllerApi } from "../../core";

import { hentag } from "../apis/hentagApi";
import { komgaConfig } from "../config";
import { extractHentagPayload } from "./extractHentag";

import * as fs from "fs/promises";

export const patchAllBook = async () => {
  let page = 0;
  // patchBook(0);

  while (page < 10) {
    await patchBook(page);
    page++;
  }
};
export const patchBook = async (page: number) => {
  const bookController = new BookControllerApi(komgaConfig);

  try {
    const allBooks = await bookController.getAllBooks({
      page,
      size: 100,
      search: "NOT tag:[a TO z]",
    });
    const books = allBooks.content;
    console.log(
      "book Details",
      allBooks.size,
      allBooks.empty,
      allBooks.pageable,
      allBooks.numberOfElements
    );
    if (!books) return;
    for (let i = 0; i < books.length; i++) {
      try {
        const bookName = books[i].name;

        const sanitizedName = sanitizeName(bookName);

        const bookId = books[i].id;
        const metadata = await hentag(sanitizedName);
        const bookMetadataUpdateDto = extractHentagPayload(metadata);
        await bookController.updateMetadata1({
          bookId: bookId,
          bookMetadataUpdateDto,
        });
        console.table({
          title: bookMetadataUpdateDto?.title,
          sanitizedName: limitString(sanitizedName, 60),
          bookId,
        });
        console.log("-----------------------------------------");
      } catch (error) {
        const errorLog = `Error occurred: ${new Date().toISOString()}\nBOOK ID: ${
          books[i]?.id
        }\nBOOK NAME: ${books[i]?.name}\nPAGE:${page}\n${error}\n\n`;
        fs.appendFile("error7788.log", errorLog)
          .then(() => console.log("Error written to error.log"))
          .catch((appendError) =>
            console.error("Error writing to error.log:", appendError)
          );
      }
    }
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

function limitString(input: string, maxLength: number): string {
  if (input.length > maxLength) {
    return input.substring(0, maxLength - 3) + "...";
  } else {
    return input;
  }
}

function sanitizeName(name: string) {
  // const sanitizedName = bookName
  //   .split("(")[0]
  //   .split("(x")[0]
  //   .split("{")[0]
  //   .trim();
  // const sanitizedName = bookName.replace(/[\({].*?$/, "").trim();
  // const sanitizedName = bookName.replace(/\s*\([^)]*\).*/, "").trim();
  // const sanitizedName = bookName.replace(/\s*\([^)]*$/, "").trim();

  // console.log(sanitizedName);

  //working
  if (name.startsWith("(")) return name.replace(/[\{].*?$/, "").trim();
  const sanitizedNameMatch = name.match(/^\[.*?\][^\(]*/);

  // Check if there is a match before accessing the result
  const sanitizedName = sanitizedNameMatch
    ? sanitizedNameMatch[0].trim()
    : name.replace(/[\{].*?$/, "").trim();
  return sanitizedName;
}
