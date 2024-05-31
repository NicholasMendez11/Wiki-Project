// @ts-nocheck
import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useFeedStore } from "../../context/feedStore";

export default function Pagination() {
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

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <MdKeyboardArrowLeft strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {[...Array(totalArticles).keys()].map((page) => (
          <IconButton key={page} {...getItemProps(page + 1)}>
            {page + 1}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === totalArticles}
      >
        Next
        <MdKeyboardArrowRight strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
