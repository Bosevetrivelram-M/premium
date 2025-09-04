import React from 'react'
import cn from 'classnames'

interface ButtonDetail {
  btnName: string;
  btnStyle?: string;
}

interface ButtonGroupProp {
  buttons: ButtonDetail[];
}

export const ButtonGroup = ({ buttons }: ButtonGroupProp): React.JSX.Element => {
    // const buttonDetails = [
    //     {btnName: "Call", btnStyle: "bg-[#87cdf6] py-1.5 px-3"},
    //     {btnName: "Whatsapp", btnStyle: "bg-[#8ce68c] py-1.5 px-3"}
    // ];
  return (
    <div className="rounded-sm overflow-hidden w-fit">
        <div className="flex">
            {buttons?.map((button, index) => (
                <button key={index} className={cn("font-inter font-medium text-sm text-white", button?.btnStyle)}>
                    {button?.btnName}
                </button>
            ))}  
        </div>
    </div>
  )
}
