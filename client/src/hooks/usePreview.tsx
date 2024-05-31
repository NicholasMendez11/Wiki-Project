import React, { useEffect } from "react";
import { Event, News } from "../types/feed";
import { useTranslation } from "../context/translationStore";
import { useQuery } from "@tanstack/react-query";
import { fetchTranslatedContent } from "../services/api";
import { isEvent } from "../utils/helpers";
import { ImageNotFound } from "../utils/constants";

function usePreview(event: Event | News) {
  const {
    setSelectedText,
    selectedText,
    selectedLanguage,
    shouldTranslate,
    setShouldTranslate,
  } = useTranslation();
  const translation = useQuery({
    queryKey: ["translation", selectedLanguage],
    queryFn: () => fetchTranslatedContent(selectedLanguage, selectedText),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!shouldTranslate,
  });
  const translationContent = useQuery({
    queryKey: ["translation-content", selectedLanguage],
    queryFn: () => fetchTranslatedContent(selectedLanguage, getExtract()),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!shouldTranslate,
  });

  const getImageSource = (): string => {
    if (isEvent(event)) {
      return event.pages[0].thumbnail?.source || ImageNotFound;
    } else {
      return event.links[0].thumbnail?.source || ImageNotFound;
    }
  };

  const getTitle = (): string => {
    if (isEvent(event)) {
      return event.pages[0].normalizedtitle;
    } else {
      return event.links[0].normalizedtitle;
    }
  };

  const getExtract = (): string => {
    if (isEvent(event)) {
      return event.pages[0].extract;
    } else {
      return event.links[0].extract;
    }
  };

  const getTimestamp = (): string => {
    if (isEvent(event)) {
      return event.pages[0].timestamp.toString();
    } else {
      return event.links[0].timestamp;
    }
  };

  const getLang = (): string => {
    if (isEvent(event)) {
      return event.pages[0].lang.toUpperCase();
    } else {
      return event.links[0].lang.toUpperCase();
    }
  };
  function handleTranslation() {
    setSelectedText(getTitle());
    setShouldTranslate(true);
  }

  useEffect(() => {
    return () => {
      setSelectedText("");
      setShouldTranslate(false);
    };
  }, []);
  return {
    shouldTranslate,
    handleTranslation,
    getImageSource,
    getTitle,
    translation,
    getTimestamp,
    getLang,
    translationContent,
    getExtract,
  };
}

export default usePreview;
