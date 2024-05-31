import numeral from "numeral";
import { Event, News } from "../types/feed";

export const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return numeral(num).format("0.0a").replace("m", "M");
  } else if (num >= 1000) {
    return numeral(num).format("0a").replace("k", " mil");
  }
  return num;
};

export const getCurrentFormattedDate = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so we add 1
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
}

export function isEvent(event: Event | News): event is Event {
  return (event as Event).pages !== undefined;
}

export const formatDateApiCall = (date: any) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day =
    String(date.getDate() + 1).padStart(2, "0") == "32"
      ? String(date.getDate()).padStart(2, "0")
      : String(date.getDate() + 1).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getLastOpenedUrls = (): [] => {
  const lastOpenedUrls = JSON.parse(
    localStorage.getItem("lastOpenedUrls") || "[]"
  );
  return lastOpenedUrls;
};

export const handleCheckWikipedia = (event: Event | News) => {
  let url: string;
  if (isEvent(event)) {
    url = event.pages[0].content_urls.desktop.page;
  } else {
    url = event.links[0].content_urls.desktop.page;
  }
  const newWindow = window.open(url, "_blank");

  const lastOpenedUrls = JSON.parse(
    localStorage.getItem("lastOpenedUrls") || "[]"
  );

  if (!lastOpenedUrls.includes(url)) {
    lastOpenedUrls.push(url);
  }

  localStorage.setItem("lastOpenedUrls", JSON.stringify(lastOpenedUrls));
};
