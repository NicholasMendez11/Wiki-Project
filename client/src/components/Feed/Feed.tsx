import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Event, Feed as FeedData, News } from "../../types/feed";
import { AxiosResponse } from "axios";
import EventCard from "../Card/Card";
import Loader from "../common/Loader";
import { fetchFeaturedContent } from "../../services/api";
import { useFeedStore } from "../../context/feedStore";
import { useEffect } from "react";
import NewsCard from "../Card/NewsCard";

type props = {
  feed: UseQueryResult<AxiosResponse<FeedData, any>>;
};
function Feed() {
  const { queryParams, setTotalArticles, setTotalNews } = useFeedStore();
  const feed = useQuery({
    queryKey: ["feed", queryParams],
    queryFn: () => fetchFeaturedContent(queryParams),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (feed.data?.data.totalEvents) {
      setTotalArticles(feed.data?.data.totalEvents);
      setTotalNews(feed.data?.data.totalNews);
    }
  }, [feed.data?.data.totalEvents, setTotalArticles, setTotalNews]);
  if (feed.isFetching)
    return (
      <div className="flex justify-center h-96 items-center">
        <Loader />
      </div>
    );
  if (feed.isError) return <h1>Something went wrong</h1>;

  const articlesEvents = feed.data?.data.events;
  const newEvents = feed.data?.data.news;
  return (
    <>
      {articlesEvents?.length! > 0 && (
        <div>
          <h1 className="text-2xl font-semibold mt-10">That day in history</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {articlesEvents?.map((article: Event) => {
              return <EventCard key={article.text} event={article} />;
            })}
          </div>
        </div>
      )}

      {newEvents?.length! > 0 && (
        <div>
          <h1 className="text-2xl font-semibold mt-10">
            Top 5 happening today:
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-1">
            {newEvents?.map((newEvent: News) => (
              <EventCard key={newEvent.story} event={newEvent} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Feed;
