import React from "react";

import { Select, Option } from "@material-tailwind/react";
import ReactCountryFlag from "react-country-flag";
type Language = {
  label: string;
  code: string;
  flag: string;
};

export function CountriesSelect() {
  const languagesData: Language[] = [
    { label: "English", code: "en", flag: "US" },
    { label: "Spanish", code: "es", flag: "ES" },
    { label: "French", code: "fr", flag: "FR" },
    { label: "German", code: "de", flag: "DE" },
    // Add more languages and flags here
  ];
  return (
    <div className="w-72">
      <Select
        size="lg"
        label="Language"
        selected={(element) =>
          element &&
          React.cloneElement(element, {
            disabled: true,
            className:
              "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
          })
        }
      >
        {languagesData.map(({ label, flag, code }) => (
          <Option key={label} value={code} className="flex items-center gap-2">
            <ReactCountryFlag countryCode={flag} svg /> {label}
          </Option>
        ))}
      </Select>
    </div>
  );
}
