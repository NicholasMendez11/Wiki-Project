import React from "react";

import { Select, Option } from "@material-tailwind/react";
import { useFeedStore } from "../../context/feedStore";
import { pageLimits } from "../../utils/constants";

export function LimitSelector() {
  const { queryParams, setQueryParams } = useFeedStore();

  return (
    <div className="w-72">
      <Select
        size="lg"
        label="Events per page"
        onChange={(value) => setQueryParams({ limit: value })}
        selected={(element) =>
          element &&
          React.cloneElement(element, {
            disabled: true,
            className:
              "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
          })
        }
        value={queryParams.limit.toString()}
      >
        {pageLimits.map((value) => (
          <Option key={value} value={value} className="flex items-center gap-2">
            show by set of {value}
          </Option>
        ))}
      </Select>
    </div>
  );
}
