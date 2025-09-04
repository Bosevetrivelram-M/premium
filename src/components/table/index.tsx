import React from "react";

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

export const Table = ({ tableDetails, contactBtn }: TableProps): React.JSX.Element => {
  return (
    <div className="py-4 pl-1 flex items-center">
      <div className="max-w-3/4 rounded-lg border-2 border-[#cfdbe8]">
        <table className="min-w-3/4 border-collapse overflow-hidden">
          <thead>
            <tr className="border-b border-[#e5e8eb]">
              {tableDetails?.header.map((heading, index) => (
                <th
                  key={index}
                  className="px-6 py-3 font-inter text-left text-sm font-medium text-gray-700"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-[#e5e8eb]">
            {tableDetails?.datas?.map((data, index) => (
              <tr key={index}>
                <td className="px-6 py-4 font-inter text-sm text-[#0D141C]">
                  {data?.name}
                </td>
                <td className="px-6 py-4 font-inter text-sm text-[#0D141C] cursor-pointer">
                  {data?.policyNumber}
                </td>
                <td className="px-6 py-4 font-inter text-sm text-[#0D141C]">
                  {data?.amount}
                </td>
                <td className="px-6 py-4 font-inter text-sm text-[#0D141C] cursor-pointer">
                  {contactBtn}
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-[#0D141C] cursor-pointer rounded-full">
                    {data?.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-[#0D141C] cursor-pointer">
                  {data?.action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
