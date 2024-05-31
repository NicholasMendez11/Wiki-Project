import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { MdOutlineCalendarMonth } from "react-icons/md";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useFeedStore } from "../../context/feedStore";
import { formatDateApiCall } from "../../utils/helpers";

export default function DateSelector() {
  const { queryParams, setQueryParams } = useFeedStore();
  const handleDateChange = (date: any) => {
    setQueryParams({ date: formatDateApiCall(date) });
  };

  const today = new Date();
  return (
    <div className="flex flex-col items-center">
      <DatePicker
        onChange={handleDateChange}
        value={queryParams.date}
        maxDate={today}
        className="custom-date-picker"
      />
    </div>
  );
}
