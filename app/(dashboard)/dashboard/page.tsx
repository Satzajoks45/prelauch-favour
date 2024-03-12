"use client";

import React from "react";
import {
  UploadIcon,
  HomeIcon,
  NairaIcon,
  FunnelIcon,
  OrderIcon,
  CancelledIcon,
  DeliveredIcon,
  DoubledChevronDown,
  ArrowUpIcon,
  ArrowDownIcon,
  ChevronDownIcon,
  ExportIcon,
  VertIcon,
} from "../../../public/assets/icons/dashboardIcons";
import { Button } from "@/components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import HeaderBox from "@/components/dashboard/HeaderBox";
import OrderHistoryTable from "@/components/dashboard/OrderHistoryTable";
import GraphBoard from "@/components/dashboard/GraphBoard/OrderAnalyticsGraph";
import OrderAnalyticsGraph from "@/components/dashboard/GraphBoard/OrderAnalyticsGraph";
import TotalRevenueGraph from "@/components/dashboard/GraphBoard/TotalRevenueGraph";
import CustomerMapGraph from "@/components/dashboard/GraphBoard/CustomerMapGraph";

const Dashboard = () => {
  const percentage: number = 66;

  return (
    <div className="flex flex-col items-start justify-start w-full font-barlow">
      {/* first dashboard row */}
      
      {/* <div className="flex justify-between w-full mb-7">
        <div className="flex flex-col items-start justify-normal">
          <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
            Dashboard
          </h2>
          <p className="xl:text-lg lg:text-base text-sm font-normal text-[#a3a3a3]">
            Hi, Samantha. Welcome back to Sedap Admin!
          </p>
        </div>

        <div className="flex">
          <Button
            type="submit"
            className="bg-primary_100 text-white text-center text-base font-semibold hover:opacity-80 w-[263px] font-barlow me-6 "
            // onClick={() => console.log("logged")}
          >
            <div className="me-2 bg-primary_500">
              <UploadIcon />
            </div>
            Upload product
          </Button>

          <div className="w-[263px] flex rounded-2xl shadow-sm bg-white items-center px-5 py-4">
            <div className="bg-[#D9F3EA] rounded-2xl flex items-center justify-center p-3 me-2">
              <FunnelIcon />
            </div>
            <div className="pe-3">
              <p className="text-lg fon-medium text-[#3E4954]">
                Filter Period{" "}
              </p>
              <p className="text-xs text-[#3E4954]">
                13 Jun 2023 - 21 Jul 2023
              </p>
            </div>
            <ChevronDownIcon />
          </div>
        </div>
      </div> */}

      {/* second dashboard row */}
      {/* <div className="flex gap-4 w-full mb-7">
        <HeaderBox
          amount="N128367894"
          title="Total Revenue"
          icon={<NairaIcon width="30" height="30" />}
          duration="12% (30 days)"
          className="border-[#3bb77e80]"
          arrowIcon={
            <span className="p-1 rounded-full me-1 flex items-center justify-center w-[16px] h-[16px] bg-[#D9F3EA]">
              <ArrowUpIcon />
            </span>
          }
        />
        <HeaderBox
          amount="75"
          title="Total Orders"
          icon={<OrderIcon />}
          duration="12% (30 days)"
          className="border-[#f3aaff80]"
          arrowIcon={
            <span className="p-1 rounded-full me-1 flex items-center justify-center w-[16px] h-[16px] bg-[#D9F3EA]">
              <ArrowUpIcon />
            </span>
          }
        />
        <HeaderBox
          amount="357"
          title="Total Delivered"
          icon={<DeliveredIcon />}
          duration="4% (30 days)"
          className="border-[#ffe3a980]"
          arrowIcon={
            <span className="p-1 rounded-full me-1 flex items-center justify-center w-[16px] h-[16px] bg-[#ff5b5b1a]">
              <ArrowDownIcon />
            </span>
          }
        />
        <HeaderBox
          amount="65"
          title="Total Canceled"
          icon={<CancelledIcon />}
          duration="12% (30 days)"
          className="border-[#ffc2c280]"
          arrowIcon={
            <span className="p-1 rounded-full me-1 flex items-center justify-center w-[16px] h-[16px] bg-[#D9F3EA]">
              <ArrowUpIcon />
            </span>
          }
        />
      </div> */}

      {/* third dashboard row */}
      {/* <div className="flex gap-10 w-full mb-7">
        <div className=" bg-white w-1/2 rounded-2xl shadow-sm font-barlow p-7">
          <p className="font-bold text-2xl text-[#464255] mb-7"> Analytics </p>

          <div className="flex gap-4 justify-between">
            <div className="flex flex-col font-barlow font-semibold text-center">
              <CircularProgressbar
                value={81}
                text={"81%"}
                styles={buildStyles({
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  textSize: "20px",
                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,
                  pathTransition:
                    percentage === 0
                      ? "none"
                      : "stroke-dashoffset 0.5s ease 0s",
                  pathColor: `rgba(255, 91, 91, ${percentage / 100})`,
                  textColor: "#000000",
                  trailColor: "rgba(255, 91, 91, 0.1)",
                })}
              />
              <p className="mt-6 text-lg font-semibold"> Total Order</p>
            </div>

            <div className="flex flex-col font-barlow font-semibold text-center mx-5">
              <CircularProgressbar
                value={22}
                text={"22%"}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "20px",
                  pathTransitionDuration: 0.5,
                  pathTransition:
                    percentage === 0
                      ? "none"
                      : "stroke-dashoffset 0.5s ease 0s",
                  pathColor: `rgba(0, 176, 116, ${percentage / 100})`,
                  textColor: "#000000",
                  trailColor: "rgba(0, 176, 116, 0.1)",
                })}
              />
              <p className="mt-6 text-lg font-semibold"> Customer Growth </p>
            </div>

            <div className="flex flex-col font-barlow font-semibold text-center">
              <CircularProgressbar
                value={62}
                text={"62%"}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "20px",
                  pathTransitionDuration: 0.5,
                  pathTransition:
                    percentage === 0
                      ? "none"
                      : "stroke-dashoffset 0.5s ease 0s",
                  pathColor: `rgba(195, 45, 219, ${percentage / 100})`,
                  textColor: "#000000",
                  trailColor: "rgba(195, 45, 219, 0.1)",
                  backgroundColor: "rgba(195, 45, 219, 1)",
                })}
              />
              <p className="mt-6 text-lg font-semibold"> Total Revenue </p>
            </div>
          </div>
        </div>

        <div className=" bg-white w-1/2 rounded-2xl shadow-sm font-barlow p-7">
          <div className="flex justify-between w-full mb-3 items-center">
            <div>
              <p className="font-bold text-2xl text-[#464255]">
                Order Analytics
              </p>
              <p className="text-base font-normal text-[#B9BBBD]">
                Summary of all order
              </p>
            </div>

            <Button
              type="submit"
              className="bg-white text-[#3BB77E] text-center text-base font-semibold hover:opacity-80 py-2 px-4 rounded-xl border border-[#3BB77E] font-barlow me-6 "
              // onClick={() => console.log("logged")}
            >
              <div className="me-2 bg-primary_500">
                <ExportIcon />
              </div>
              Save Report
            </Button>
          </div>

          <GraphBoard />
        </div>
      </div> */}

      {/* fourth dashboard row */}
      <div className="flex items-center bg-white w-full rounded-2xl shadow-sm font-barlow py-7 pe-7 mb-7">
        {/* <div
          className={`border-[#3BB77E] border-e-[6px] w-1 h-36 rounded-2xl`}
        ></div> */}

        <div className="ps-7 w-full">
          {/* <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-xl text-[#111827] font-inter ">
                Applicant Database
              </p>
              <p className="font-normal text-base text-[#71717A] mb-7 font-inter">
                List of Applicants
              </p>
            </div>
            <div className="grid gap-1 h-7 w-7 rounded-md hover:bg-black/5 place-content-center cursor-pointer active:gap-[0.1rem] active:rotate-45 border border-black/5 relative group">
              <div className="group-hover:bg-blue-800/70 group-active:h-4 h-5 w-1 bg-black/50 rounded-full"></div>
              <div className="group-hover:bg-blue-800/70 group-active:w-4 absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 h-1 w-5 bg-black/50 rounded-full"></div>
            </div>
          </div> */}

          <OrderHistoryTable />
          {/* <div className="flex justify-end w-full items-center mt-5">
            <span>
              <DoubledChevronDown />
            </span>
            <button
              type="submit"
              style={{ padding: 4 }}
              className="bg-primary_100 text-white text-center text-lg font-normal hover:opacity-80 font-barlow ms-5 w-28 p-1 rounded-md"
              // onClick={() => console.log("logged")}
            >
              Download
            </button>
          </div> */}
        </div>
      </div>

      {/* last dashboard row */}
      {/* <div className="flex gap-10 w-full mb-7">
        <div className=" flex items-center bg-white w-3/5 rounded-2xl shadow-sm font-barlow py-7 pe-7">
          <div
            className={`border-[#3BB77E] border-e-[6px] w-1 h-36 rounded-2xl`}
          ></div>
          <div className=" bg-white font-barlow ps-4">
            <p className="font-bold text-2xl text-[#464255]"> Total Revenue</p>
            <TotalRevenueGraph />
          </div>
        </div>

        <div className=" bg-white w-2/5 rounded-2xl shadow-sm font-barlow p-7">
          <div className="flex justify-between mb-3">
            <p className="font-bold text-2xl text-[#464255]"> Customer Map </p>
            <span>
              <VertIcon />
            </span>
          </div>
          <CustomerMapGraph />
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
