// src/store/feedStore.ts
import { create } from "zustand";
import { FeedQueryParams } from "../types";
import { getCurrentFormattedDate } from "../utils/helpers";

type TranslationState = {
  selectedText: string;
  selectedLanguage: string;
  shouldTranslate: boolean;
  setShouldTranslate: (value: boolean) => void;
  setSelectedText: (text: string) => void;
  setSelectedLanguage: (text: string) => void;
};

export const useTranslation = create<TranslationState>((set) => ({
  selectedText: "",
  selectedLanguage: "en",
  shouldTranslate: false,
  setShouldTranslate: (value) =>
    set(() => ({
      shouldTranslate: value,
    })),
  setSelectedText: (text) =>
    set(() => ({
      selectedText: text,
    })),
  setSelectedLanguage: (text) =>
    set(() => ({
      selectedLanguage: text,
    })),
}));
