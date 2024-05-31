import axios, { AxiosResponse } from "axios";
import { WEB_API_URL, getRequest } from "./helpers";
import { Feed } from "../types/feed";
import { FeedQueryParams } from "../types";
import { TranslationResponse } from "../types/translation";

export const fetchFeaturedContent = async (
  data: FeedQueryParams
): Promise<AxiosResponse<Feed>> => {
  const { date, language, page, limit } = data;
  return await getRequest<Feed>(
    `${WEB_API_URL}/feed?date=${date}&language=${language}&page=${page}&limit=${limit}`
  );
};

export const fetchTranslatedContent = async (
  language: string,
  text: string
) => {
  return await getRequest<TranslationResponse>(
    `${WEB_API_URL}/feed/translate/${language}?text=${text}`
  );
};
