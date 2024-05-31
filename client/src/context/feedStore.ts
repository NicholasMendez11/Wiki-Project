// src/store/feedStore.ts
import { create } from "zustand";
import { FeedQueryParams } from "../types";
import { getCurrentFormattedDate } from "../utils/helpers";

type FeedState = {
  queryParams: FeedQueryParams;
  totalArticles: number;
  totalNews: number;
  setQueryParams: (params: Partial<FeedQueryParams>) => void;
  setTotalArticles: (total: number) => void;
  setTotalNews: (total: number) => void;
};

export const useFeedStore = create<FeedState>((set) => ({
  queryParams: {
    date: getCurrentFormattedDate(),
    language: "en",
    page: 1,
    limit: 5,
  },
  totalArticles: 0,
  totalNews: 0,
  setQueryParams: (params) =>
    set((state) => ({
      queryParams: { ...state.queryParams, ...params },
    })),
  setTotalArticles: (total) =>
    set(() => ({
      totalArticles: total,
    })),
  setTotalNews: (total) =>
    set(() => ({
      totalNews: total,
    })),
}));
