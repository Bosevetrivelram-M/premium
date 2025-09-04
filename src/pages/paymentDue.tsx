import React from 'react'
import { Table } from '../components/table';
import { ButtonGroup } from '../components/buttonGroup/buttonGroup';

interface TableRow {
  name: string;
  policyNumber: string;
  amount: number;
  status: string;
  action: string;
}

interface TableDetail {
  header: string[];
  datas: TableRow[];
}

interface TableProps {
  tableDetails: TableDetail;
  contactBtn: React.ReactNode;
}

interface ButtonDetail {
  btnName: string;
  btnStyle?: string;
}

interface ButtonGroupProp {
  buttons: ButtonDetail[];
}
export const PaymentDue = (): React.JSX.Element => {
  const tableDetails = {
      header: [
        "Policy Holder Name",
        "Policy Number",
        "Premium Amount",
        "Contact",
        "Status",
        "Action"
      ],
      datas: [
        {
          name: "Sophia Clark",
          policyNumber: "PL123456",
          amount: 250,
          status: "Unpaid",
          action: "Mark as Paid"
        },
        {
          name: "Ethan Bennett",
          policyNumber: "PL789101",
          amount: 350,
          status: "Unpaid",
          action: "Mark as Paid"
        },
        {
          name: "Olivia Carter",
          policyNumber: "PL345678",
          amount: 320,
          status: "Unpaid",
          action: "Mark as Paid"
        },
        {
          name: "Liam Davis",
          policyNumber: "PL901234",
          amount: 200,
          status: "Unpaid",
          action: "Mark as Paid"
        },
        {
          name: "Ava Evans",
          policyNumber: "PL567890",
          amount: 280,
          contact: "Call / WhatsApp",
          status: "Unpaid",
          action: "Mark as Paid"
        }
      ]  
    };

    const buttonDetails: ButtonDetail[] = [
      {btnName: "Call", btnStyle: "bg-[#87cdf6] py-1.5 px-3"},
      {btnName: "Whatsapp", btnStyle: "bg-[#8ce68c] py-1.5 px-3"}
    ];

  return (
    <div>
        <div className="space-y-1">
            <h1 className="font-inter font-bold text-[32px]">Payment Due This Month</h1>
            <p className="font-inter font-normal text-sm text-[#4A739C]">Manage and track all policy payments due this month.</p>
        </div>
        <div className="flex space-x-10 pt-8">
            <h1 className="font-inter font-bold text-sm text-[#0D141C]">All</h1>
            <h1 className="font-inter font-bold text-sm text-[#4A739C]">Paid</h1>
            <h1 className="font-inter font-bold text-sm text-[#4A739C]">Pending</h1>
        </div>
        <div className="border border-b w-11/12 text-[#CFDBE8] mt-4"></div>

            <Table 
                tableDetails={tableDetails}
                contactBtn={
                  <ButtonGroup 
                    buttons={buttonDetails}
                  />
                }
            />
    </div>
  )
}
