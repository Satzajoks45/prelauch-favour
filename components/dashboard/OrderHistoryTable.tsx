"use client"
import { apiURL, fetcher } from "@/utils/functions";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

interface Employee {
  _id: string;
  name: string;
  email: string;
  occupation: string;
  phone: number;
  role: string;
  state: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


type TableProps = {};

const OrderHistoryTable = ({}: TableProps) => {
  const { data, error, isLoading }: { data: {employees: Employee[]}, error: any, isLoading: boolean } = useSWR(`${apiURL}/employees/viewAllEmployees`, fetcher);
  const [allEmployees, setAllEmployees] = useState<Employee[]>([]);
  
  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (data) {
      setAllEmployees(data.employees);
    }
    
  }, [data, error]);
  
  return (
    <div className="w-full">
      <table className="w-full">
        <thead className="text-start font-inter text-sm text-[#6B7280] bg-[#F9FAFB]">
          <tr>
            <th className="text-start  py-4 px-1"> Name </th>
            <th className="text-start">Phone Number</th>
            <th className="text-start">Email</th>
            <th className="text-start">Address</th>
            <th className="text-start">Occupation</th>
            <th className="text-start">State</th>
            <th className="text-start">Role</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading && !!(allEmployees.length > 0) && !error && allEmployees.map((item, index) => (
            <tr
              className={clsx(
                "p-4 font-inter text-[#111827]",
                index % 2 === 0 ? "bg-black/5" : ""
              )}
              key={item._id}
            >
              <td className="px-1 py-4 text-sm "> {item.name}</td>
              <td className="px-1 py-4 text-sm font-semibold"> {item.phone}</td>
              <td className="px-1 py-4 text-sm "> {item.email}</td>
              <td className="px-1 py-4 text-sm ">{item.address} </td>
              <td className="px-1 py-4 text-sm "> {item.occupation}</td>
              <td className="px-1 py-4 text-sm "> {item.state}</td>
              <td className="px-1 py-4 text-sm "> {item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading && error && <p className="text-center text-red-500 text-sm">{error}</p>}
      {!!(allEmployees.length === 0) && !isLoading && !error && <p className="text-center text-sm">No data</p>}
      {isLoading && <p className="text-center text-sm">Retrieving data...</p>}
    </div>
  );
};

export default OrderHistoryTable;
