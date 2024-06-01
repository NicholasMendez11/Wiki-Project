import React from "react";
import "react-calendar/dist/Calendar.css";
import { CountriesSelect } from "../components/selectors/LanguageSelector";

import DateSelector from "../components/selectors/DateSelector";
import { LimitSelector } from "../components/selectors/LimitSelector";
import Pagination from "../components/Pagination/Pagination";
import Feed from "../components/Feed/Feed";

const Home: React.FC = () => {
  return (
    <div className="w-screen h-full p-4 bg-gray-100">
      <div className="flex flex-col lg:flex-row md:justify-between">
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <DateSelector />
          <CountriesSelect />
          <LimitSelector />
        </div>
        <div className="mt-5 -ml-4  lg:m-0 md:flex justify-center ">
          <Pagination />
        </div>
      </div>
      <Feed />
    </div>
  );
};

export default Home;
