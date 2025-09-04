import React from "react";

interface PaymentCardProps {
  key: number;
  policyName: string;
  amount: number;
  modeOfPayment: "Monthly" | "Half-Yearly" | "Yearly";
  dueIn: number;
}

export const PaymentCard = ({ policyName, amount, modeOfPayment, dueIn }: PaymentCardProps): React.JSX.Element => {
  return (
    <div className="border-2 border-[#E8EDF5] p-4 flex items-center justify-between w-[77.5%] rounded-lg">
      <div>
        <div className="flex space-x-1 items-center">
          <p className="font-inter font-medium text-[16px] text-[#0D141C]">
            {policyName}
          </p>
          <p className="font-inter font-medium text-[16px] text-[#0D141C]">-</p>
          <p className="font-inter font-medium text-[16px] text-[#0D141C]">
            {amount}
          </p>
        </div>
        <p className="font-inter font-normal text-sm text-[#4A739C]">{modeOfPayment}</p>
      </div>
      <div>
        <p className="font-inter font-normal text-sm text-[#4A739C]">
          Due in {dueIn} days
        </p>
      </div>
    </div>
  );
};
