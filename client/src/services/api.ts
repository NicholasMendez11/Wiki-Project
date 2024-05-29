import axios, { AxiosResponse } from "axios";
import { WEB_API_URL, getRequest } from "./helpers";
import { Feed } from "../types/feed";

export const fetchFeaturedContent = async (
  date: string,
  language: string
  // page: number
): Promise<AxiosResponse<Feed>> => {
  return await getRequest<Feed>(
    `${WEB_API_URL}/feed?date=${date}&language=${language}`
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
