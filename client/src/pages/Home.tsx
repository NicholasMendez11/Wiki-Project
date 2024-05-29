import React from "react";
import "react-calendar/dist/Calendar.css";
import DateSelector from "../components/DateSelector/DateSelector";
import { CountriesSelect } from "../components/LanguageSelector/LanguageSelector";
import Pagination from "../components/Pagination/Pagination";
import CustomCard from "../components/Card/Card";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchFeaturedContent } from "../services/api";
import { Tfa } from "../types/feed";
import { ImageNotFound } from "../utils/constants";

const Home: React.FC = () => {
  const feed = useQuery({
    queryKey: ["feed"],
    queryFn: () => fetchFeaturedContent("2023-05-29", "es"),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  console.log("feed", feed.data);
  const article = feed.data?.data?.mostread?.articles;
  return (
    <div className="w-screen h-full p-4 bg-gray-100">
      <div className="flex flex-col lg:flex-row md:justify-between">
        <div className="flex flex-col md:flex-row gap-2">
          <DateSelector />
          <CountriesSelect />
        </div>
        <div className="mt-5 hidden md:block">
          <Pagination />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {feed.isFetching ? (
          <h1>Loading</h1>
        ) : feed.isError ? (
          <h1>Something went wrong</h1>
        ) : (
          article?.map((article: Tfa, index) => {
            // if (index > 5) return;
            return (
              <CustomCard
                views={article.views || 0}
                description={article.description!}
                img={article.thumbnail?.source || ImageNotFound}
                title={article.normalizedtitle}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
