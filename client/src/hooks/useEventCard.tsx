import React from "react";
import { getLastOpenedUrls, isEvent, truncateText } from "../utils/helpers";
import { Event, News } from "../types/feed";
import { ImageNotFound } from "../utils/constants";

function useEventCard(event: Event | News) {
  const [open, setOpen] = React.useState(false);

  const handleDetails = () => setOpen(!open);
  let isDocumentViewed: boolean;
  const urls = getLastOpenedUrls();
  if (isEvent(event)) {
    isDocumentViewed = urls.includes(
      event.pages[0].content_urls.desktop.page as never
    );
  } else {
    isDocumentViewed = urls.includes(
      event.links[0].content_urls.desktop.page as never
    );
  }

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

  const getText = (): string => {
    if (isEvent(event)) {
      return event.text;
    } else {
      return truncateText(event.links[0].extract, 150);
    }
  };

  const getYear = (): number | string => {
    if (isEvent(event)) {
      return event.year;
    } else {
      return new Date(event.links[0].timestamp).getFullYear();
    }
  };
  return {
    handleDetails,
    getImageSource,
    getTitle,
    getText,
    getYear,
    setOpen,
    isDocumentViewed,
    open,
  };
}

export default useEventCard;
