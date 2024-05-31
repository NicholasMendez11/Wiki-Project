import axios, { AxiosResponse } from "axios";
import { WEB_API_URL, getRequest } from "./helpers";
import { Feed } from "../types/feed";
import { FeedQueryParams } from "../types";

export const fetchFeaturedContent = async (
  data: FeedQueryParams
): Promise<AxiosResponse<Feed>> => {
  const { date, language, page, limit } = data;
  return await getRequest<Feed>(
    `${WEB_API_URL}/feed?date=${date}&language=${language}&page=${page}&limit=${limit}`
  );
};

// export const fetchTranslatedContent = async (
//   date: string,
//   language: string,
//   text: string
// ) => {
//   const response = await api.get(`/feed/translate/${language}?text=${text}`);
//   return response.data;
// };
