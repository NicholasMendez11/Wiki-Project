import React from "react";
import { useFeedStore } from "../context/feedStore";

function usePagination() {
  const { queryParams, setQueryParams, totalArticles } = useFeedStore();
  const [active, setActive] = React.useState(queryParams.page);

  const getItemProps = (index: number) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => handlePageChange(index),
  });

  const handlePageChange = (page: number) => {
    setActive(page);
    setQueryParams({ page });
  };

  const next = () => {
    if (active < totalArticles) {
      handlePageChange(active + 1);
    }
  };

  const prev = () => {
    if (active > 1) {
      handlePageChange(active - 1);
    }
  };

  return { next, prev, active, getItemProps, totalArticles };
}

export default usePagination;
