import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

export default function Spinner() {
  return (
    <div className="w-full h-[85vh] flex justify-center items-center">
      <PulseLoader color={"rgb(250, 204, 21)"} loading={true} size={30} />
    </div>
  );
}
