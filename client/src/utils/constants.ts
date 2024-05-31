import { Language } from "../types";

export const ImageNotFound =
  "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg";

export const languagesData: Language[] = [
  { label: "English", code: "en", flag: "US" },
  { label: "Spanish", code: "es", flag: "ES" },
  { label: "French", code: "fr", flag: "FR" },
  { label: "German", code: "de", flag: "DE" },
  //I could add more languages here
];

export const pageLimits = ["5", "10", "15", "20"];
