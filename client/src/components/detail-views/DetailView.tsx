import React, { useEffect, useState } from "react";
import { Event, News, Page, Link } from "../../types/feed";
import { ImageNotFound } from "../../utils/constants";
import { MdOutlineCalendarMonth } from "react-icons/md";
import {
  formatDate,
  handleCheckWikipedia,
  isEvent,
  truncateText,
} from "../../utils/helpers";
import { GrLanguage } from "react-icons/gr";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsTranslate } from "react-icons/bs";
import { useTranslation } from "../../context/translationStore";
import { useQuery } from "@tanstack/react-query";
import { fetchTranslatedContent } from "../../services/api";
import { CountriesSelect } from "../selectors/LanguageSelector";
import usePreview from "../../hooks/usePreview";

type Props = {
  event: Event | News;
};

function DetailView({ event }: Props) {
  const {
    shouldTranslate,
    handleTranslation,
    getImageSource,
    getTitle,
    translation,
    getTimestamp,
    getLang,
    translationContent,
    getExtract,
  } = usePreview(event);
  return (
    <div>
      <div className="flex justify-center md:justify-between items-center py-4">
        <h1 className="text-2xl text-black hidden md:block ">Details</h1>
        <div className="flex gap-2 items-center">
          <CountriesSelect translation />
          <BsTranslate
            className={`text-lg font-bold mb-2 hover:scale-110 cursor-pointer transition-all duration-200 ${
              shouldTranslate && "text-orange-500"
            }`}
            onClick={() => handleTranslation()}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row">
        <img
          src={getImageSource()}
          alt={getTitle()}
          className=" object-cover h-48 w-96 rounded-xl"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">
            {shouldTranslate && translation.isSuccess
              ? translation.data.data.translatedText
              : getTitle()}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            {shouldTranslate && translationContent.isSuccess
              ? truncateText(translationContent.data.data.translatedText, 200)
              : truncateText(getExtract(), 200)}
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
              className="w-full flex items-center mt-5 md:mt-0 md:justify-end hover:text-black cursor-pointer transition-all duration-150"
              onClick={() => handleCheckWikipedia(event)}
            >
              <p>Read the full article in Wikipedia</p>
              <IoIosArrowRoundForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailView;
