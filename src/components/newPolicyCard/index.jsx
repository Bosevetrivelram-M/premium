import React from "react";
import cn from "classnames"; 

export const NewPolicyCard = ({ inputName, placeholderName, value, onChangeFunction, style }) => {
  return (
    <div>
      <p className="font-inter font-medium text-[16px] text-[#0D141C] pb-3">
        {inputName}
      </p>
      <div className="pb-10">
        <input
            placeholder={placeholderName}
            className={cn(`w-1/4 resize-none overflow-hidden text-base font-normal leading-normal rounded-lg px-4 pl-4 pt-3 pb-${style} text-[#0D141C] bg-[#e8edf5] focus:outline-0 focus:ring-0 placeholder:text-[#4A739C]`)}
            value={value}
            onChange={onChangeFunction}
        />
      </div>
    </div>
  );
};
