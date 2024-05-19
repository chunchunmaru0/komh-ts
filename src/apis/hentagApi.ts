import { ApiHandler } from "./ApiHandler";

export type MangaItem = {
  title: string;
  coverImageUrl?: string;
  parodies?: string[];
  circles?: string[];
  artists?: string[];
  characters?: string[];
  maleTags?: string[];
  femaleTags?: string[];
  otherTags?: string[];
  language: string;
  category: string;
  createdAt: number;
  lastModified: number;
  publishedOn?: number;
  locations?: string[];
};

export type MangaResponse = MangaItem[];

export const hentag = async (bookTitle: string): Promise<MangaItem> => {
  const hentagApi = new ApiHandler(`https://hentag.com/`, {});
  const body = {
    title: bookTitle,
  };
  console.log(body);
  try {
    const result: MangaResponse = await hentagApi.post(
      "/api/v1/search/vault/title",
      body
    );
    return result[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const hentagID = async (vaultId: string): Promise<MangaItem> => {
  const hentagApi = new ApiHandler(`https://hentag.com/`, {});
  const body = {
    ids: [vaultId],
  };
  console.log(body);
  try {
    const result: MangaResponse = await hentagApi.post(
      "/api/v1/search/vault/id",
      body
    );
    return result[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};
