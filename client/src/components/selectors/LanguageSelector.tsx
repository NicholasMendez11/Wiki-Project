import React from "react";
import { Select, Option } from "@material-tailwind/react";
import ReactCountryFlag from "react-country-flag";
import { useFeedStore } from "../../context/feedStore";
import { useTranslation } from "../../context/translationStore";
import { languagesData } from "../../utils/constants";

type prop = {
  translation?: boolean;
};
export function CountriesSelect({ translation = false }: prop) {
  const { queryParams, setQueryParams } = useFeedStore();
  const { setSelectedLanguage, setShouldTranslate } = useTranslation();

  function handleChange(value: any) {
    if (translation) {
      setSelectedLanguage(value);
      setShouldTranslate(false);
    } else {
      setQueryParams({ language: value });
    }
  }

  return (
    <div className="w-72">
      <Select
        size="lg"
        label="Language"
        onChange={handleChange}
        selected={(element) =>
          element &&
          React.cloneElement(element, {
            disabled: true,
            className:
              "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
          })
        }
        value={queryParams.language}
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
