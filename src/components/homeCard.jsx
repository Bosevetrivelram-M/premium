import React from "react";

export const HomeCard = ({key, cardName, count}) => {
  return (
    <div key={key} className="bg-[#E8EDF5] rounded-lg pt-4 pb-5 pl-4 pr-24 space-y-1">
      <h1 className="font-inter text-[16px] font-normal">{cardName}</h1>
      <h1 className="font-inter font-bold text-xl">{count}</h1>
    </div>
  );
};
