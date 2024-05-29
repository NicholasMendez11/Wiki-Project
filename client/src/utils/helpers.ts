import numeral from "numeral";

export const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return numeral(num).format("0.0a").replace("m", "M");
  } else if (num >= 1000) {
    return numeral(num).format("0a").replace("k", " mil");
  }
  return num;
};
