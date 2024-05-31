import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import DateSelector from "../components/DateSelector/DateSelector";
import { CountriesSelect } from "../components/LanguageSelector/LanguageSelector";

import Feed from "../components/Feed/Feed";
import Pagination from "../components/Pagination/Pagination";

//todo: Will be better to have the news in another endpoint
//todo: Sopechosamente todos los events vienen en 3 paginas
//todo: Infinity scrollfor the next day
//todo: testing para el front end
//todo: Configurar el dockerfile y el docker compose
//todo: Agregar los links del footer
//todo: To change the limit by inputs
//?Capacitor

const Home: React.FC = () => {
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
      <Feed />
    </div>
  );
};

export default Home;
