import type {
  AuthorUpdateDto,
  BookMetadataUpdateDto,
  WebLinkUpdateDto,
} from "../../core/models";
import type { MangaItem } from "../apis/hentagApi";

export const extractHentagPayload = (
  data: MangaItem
): BookMetadataUpdateDto => {
  const title = data?.title;
  const summaryLines = [
    title,
    data?.parodies && `Parodies: ${data.parodies}`,
    data?.language && `Language: ${data.language}`,
    data?.category && `Category: ${data.category}`,
  ];
  const summary = summaryLines.filter((line) => line !== undefined).join("\n");
  const authors: AuthorUpdateDto[] = [];
  if (data?.artists && Array.isArray(data.artists)) {
    data?.artists.forEach((artist) =>
      authors.push({ name: artist, role: "WRITER" })
    );
  }

  data?.circles?.forEach((val) =>
    authors.push({ name: val, role: "Penciller" })
  );
  const tagsSet: Set<string> = new Set();

  if (data?.otherTags && Array.isArray(data.otherTags)) {
    data.otherTags.forEach((tag) => tagsSet.add(tag));
  }

  if (data?.femaleTags && Array.isArray(data.femaleTags)) {
    data.femaleTags.forEach((tag) => tagsSet.add(tag));
  }

  if (data?.maleTags && Array.isArray(data.maleTags)) {
    data.maleTags.forEach((tag) => tagsSet.add(tag));
  }
  /*
  const tags: string[] = [];
  if (data?.otherTags && Array.isArray(data.otherTags)) {
    tags.push(...data.otherTags);
  }

  if (data?.femaleTags && Array.isArray(data.femaleTags)) {
    tags.push(...data.femaleTags);
  }

  if (data?.maleTags && Array.isArray(data.maleTags)) {
    tags.push(...data.maleTags);
  }
*/
  let releaseDate = data?.publishedOn
    ? new Date(data?.publishedOn)
    : new Date(data?.createdAt);
  const links: WebLinkUpdateDto[] = [];
  if (data?.locations) links.push({ label: "Hentag", url: data?.locations[0] });

  if (data?.coverImageUrl) {
    links.push({ label: "Thumbnail", url: data?.coverImageUrl });
  }
  // console.table({ title, summary, authors, tags, links, releaseDate });
  return { title, summary, authors, tags: tagsSet, links, releaseDate };
};
