import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { useState } from "react";
import Calendar from "react-calendar";
import { MdOutlineCalendarMonth } from "react-icons/md";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function DateSelector() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Popover>
        <PopoverHandler>
          <Button
            className="flex gap-3 text-md items-center py-2 pr-8 justify-between capitalize border-gray-300 shadow-sm  hover:bg-gray-100 transition-all duration-200"
            variant="outlined"
          >
            <MdOutlineCalendarMonth /> Select date range
          </Button>
        </PopoverHandler>
        <PopoverContent className="p-0 ml-3">
          <Calendar onChange={onChange} value={value} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
