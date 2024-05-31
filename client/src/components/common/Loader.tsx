import React from "react";
import { LineWave } from "react-loader-spinner";

function Loader() {
  return (
    <LineWave
      visible={true}
      height="150"
      width="150"
      ariaLabel="line-wave-loading"
      firstLineColor="#4fa94d"
      middleLineColor="#000"
      lastLineColor="#4fa9ff"
    />
  );
}

export default Loader;
