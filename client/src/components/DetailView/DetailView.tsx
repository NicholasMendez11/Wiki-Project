import React from "react";
import { Event, News, Page, Link } from "../../types/feed";
import { ImageNotFound } from "../../utils/constants";
import { Button } from "@material-tailwind/react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { formatDate, isEvent, truncateText } from "../../utils/helpers";
import { GrLanguage } from "react-icons/gr";
import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {
  event: Event | News;
};

function DetailView({ event }: Props) {
  const handleCheckWikipedia = () => {
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

  return (
    <div className="flex flex-col justify-center items-center lg:flex-row">
      <img
        src={getImageSource()}
        alt={getTitle()}
        className=" object-cover h-48 w-96"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{getTitle()}:</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          {truncateText(getExtract(), 200)}
        </p>
        <div>
          <div className="flex items-center gap-1">
            <MdOutlineCalendarMonth />
            Published on {formatDate(getTimestamp())}
          </div>
          <div className="flex items-center gap-1">
            <GrLanguage />
            {getLang()}
          </div>
          <div
            className="w-full flex items-center justify-end hover:text-black cursor-pointer transition-all duration-150"
            onClick={handleCheckWikipedia}
          >
            <p>Read the full article in Wikipedia</p>
            <IoIosArrowRoundForward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailView;
