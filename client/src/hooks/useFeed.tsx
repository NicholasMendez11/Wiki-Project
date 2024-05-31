import React, { useEffect } from "react";
import { useFeedStore } from "../context/feedStore";
import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedContent } from "../services/api";

function useFeed() {
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
  return { feed };
}

export default useFeed;
