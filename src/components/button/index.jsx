import React from "react";
import cn from "classnames"; 

export const Button = ({ btnName, btnStyle, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={cn("font-inter font-bold text-sm rounded-lg px-4 py-2 tracking-wide", btnStyle)}>
        {btnName}
      </button>
    </div>
  );
};
