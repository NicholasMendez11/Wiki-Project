// @ts-nocheck
import { Button, IconButton } from "@material-tailwind/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import usePagination from "../../hooks/usePagination";

export default function Pagination() {
  const { next, prev, active, getItemProps, totalArticles } = usePagination();
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-1"
        onClick={prev}
        disabled={active === 1}
      >
        <MdKeyboardArrowLeft
          strokeWidth={2}
          className="h-4 w-4 hidden md:block"
        />{" "}
        Previous
      </Button>
      <div className="flex items-center gap-1">
        {[...Array(totalArticles).keys()].map((page) => (
          <IconButton key={page} {...getItemProps(page + 1)}>
            {page + 1}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-1"
        onClick={next}
        disabled={active === totalArticles}
      >
        Next
        <MdKeyboardArrowRight
          strokeWidth={2}
          className="h-4 w-4 hidden md:block"
        />
      </Button>
    </div>
  );
}
