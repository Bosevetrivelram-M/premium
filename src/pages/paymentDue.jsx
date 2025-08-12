import React from 'react'
import { Table } from '../components/table';

export const PaymentDue = () => {
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
            contact: "Call / WhatsApp",
            status: "Unpaid",
            action: "Mark as Paid"
        },
        {
            name: "",
            policyNumber: "PL789101",
            amount: 350,
            contact: "Call / WhatsApp",
            status: "Unpaid",
            action: "Mark as Paid"
        }
      ]  
    };

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
            />
    </div>
  )
}
