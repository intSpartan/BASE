"use client";

import Footer from "../../components/Footer";
import Header_Student from "../../components/Header_Student";
import { useState } from "react";

const pricingData = [
    {
        mainTitle: "",
        price: "",
        infoNote: "",
        "Basic Feature": "Basic Feature",
        Users: "Users",
        "Individual data": "Individual data",
        Support: "Support",
        Analytics: "Analytics",
        "Export Reports": "Export Reports",
        titleRow1: "Overview",
        titleRow5: "Reporting And Analytics",
        "Api Access": "Api Access",
    },
    {
        mainTitle: "Basic",
        popular: true,
        price: {
            month: "$3",
            year: "$30",
        },
        infoNote: "Basic features for up to 10 employees with everything you need.",
        "Basic Feature": true,
        Users: 10,
        "Individual data": "20GB",
        Support: true,
        Analytics: "Basic",
        "Export Reports": true,
        "Api Access": false,
    },
    {
        mainTitle: "Business",
        price: {
            month: "$5",
            year: "$60",
        },
        infoNote:
            "Advanced features and reporting better workflows and automation.",
        "Basic Feature": true,
        Users: 20,
        "Individual data": "40GB",
        Support: true,
        Analytics: "Advanced",
        "Export Reports": true,
        "Api Access": true,
    }
];
const LineIcon = ({ bgcolor }) => {
  return (
    <svg
      className="w-5 h-5 mt-1 fill-current"
      width="12"
      height="1"
      viewBox="0 0 12 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0.5C0 0.367392 0.0526785 0.240215 0.146447 0.146447C0.240215 0.0526785 0.367392 0 0.5 0H11.5C11.6326 0 11.7598 0.0526785 11.8536 0.146447C11.9473 0.240215 12 0.367392 12 0.5C12 0.632608 11.9473 0.759786 11.8536 0.853554C11.7598 0.947322 11.6326 1 11.5 1H0.5C0.367392 1 0.240215 0.947322 0.146447 0.853554C0.0526785 0.759786 0 0.632608 0 0.5Z"
        fill={bgcolor}
      />
    </svg>
  );
};
const RightIcon = ({ bgcolor }) => {
  return (
    <svg
      className="w-5 h-5 mt-1"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8267 26.817L24.3485 36.3763L42.6482 18.1795"
        stroke={bgcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="28" r="26" stroke={bgcolor} strokeWidth="4" />
    </svg>
  );
};
const Sample5 = () => {

    return (
        <div>
            <Header />
            <div className="bg-gray-300 min-h-[100vh] flex items-center justify-center">

                <div className="mx-5 pb-10">

                    <div className="py-8 lg:py-14 flex flex-col items-center">
                        <span
                            className="text-[#365CCE] text-base"
                        >
                            JoBro
                        </span>
                        <span className="font-semibold text-center text-4xl sm:text-5xl mt-3 mb-6">
                            Compare our all jobs and find yours
                        </span>
                        <span className="sm:text-xl text-center text-lg font-light">
                            Simple, transparent place to compare jobs
                        </span>

                    </div>
                    <div className="lg:max-w-[1200px] max-w-[450px] mx-auto bg-white rounded-xl">
                        <table className="w-full text-start border-spacing-5 border-separate flex flex-col lg:flex-row p-5 lg:p-0">
                            <tbody
                                className={
                                    "border-2 lg:border-none mb-10 lg:mb-0 rounded-lg"
                                }
                            >
                                <tr>
                                    <td className="w-[180px]"></td>
                                    <td className="h-[50px] w-[450px] lg:h-[70px] xl:h-[50px] relative">
                                        <button className="w-full bg-[#365CCE] text-white rounded-lg py-3 font-semibold add-job1-button">
                                            Add job1
                                        </button>
                                    </td>

                                    {/* <td className="w-[25px]"></td> */}
                                    <td className="h-[50px] w-[450px] lg:h-[70px] xl:h-[50px] relative">
                                        <button className="w-full bg-[#365CCE] text-white rounded-lg py-3 font-semibold add-job2-button">
                                            Add job2
                                        </button>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                        <table className="w-full text-start border-spacing-5 border-separate flex flex-col lg:flex-row p-5 lg:p-0">
                            {pricingData.map((data, index) => (
                                <tbody
                                    key={index}
                                    className={
                                        index === 0
                                            ? "hidden lg:block"
                                            : "border-2 lg:border-none mb-10 lg:mb-0 rounded-lg"
                                    }
                                >
                                    <tr>
                                        <td>
                                            <div className="font-semibold text-xl text-[#101828] h-7">
                                                {data.mainTitle}
                                                {data.popular && (
                                                    <span
                                                        className="text-sm font-medium text-[#365CCE] px-2.5 py-0.5 bg-[#F9F5FF] rounded-2xl ml-2"
                                                    >
                                                        Popular
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>

                                    </tr>
                                    <tr>
                                        <td className="h-[50px] lg:h-[70px] xl:h-[50px]">
                                            <span className="text-[#475467] text-sm font-normal">
                                                {data.infoNote}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        {index === 0 ? (
                                            <td className="h-[50px]"></td>
                                        ) : (
                                            <td>
                                                <button
                                                    className="w-full bg-[#365CCE] text-white rounded-lg py-3 font-semibold"
                                                >
                                                    Add job
                                                </button>
                                            </td>
                                        )}
                                    </tr>
                                    {/* portion after first title */}
                                    <tr>
                                        <td
                                            className="h-5 text-sm font-semibold text-[#365CCE]"
                                            colSpan={2}
                                        >
                                            {data.titleRow1}
                                            <span className="lg:hidden">
                                                {pricingData[0]["titleRow1"]}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            className={
                                                index === 0
                                                    ? ""
                                                    : "h-7 flex justify-between lg:justify-center flex-row-reverse"
                                            }
                                        >
                                            <span className="text-sm font-semibold text-[#60a5fa]">
                                                {data["Basic Feature"] === true ? (
                                                    <>
                                                        <RightIcon bgcolor={`#365CCE`} />
                                                    </>
                                                ) : (
                                                    <span className="font-medium text-sm text-[#101828] ">
                                                        Basic Feature
                                                    </span>
                                                )}
                                            </span>
                                            <span className="lg:hidden">
                                                {pricingData[0]["Basic Feature"]}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            className={
                                                index === 0
                                                    ? "h-5"
                                                    : "h-6 text-center flex justify-between lg:justify-center flex-row-reverse"
                                            }
                                        >
                                            <span className="font-medium text-sm text-[#101828]">
                                                {data.Users}
                                            </span>
                                            <span className="lg:hidden">{pricingData[0]["Users"]}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            className={
                                                index === 0
                                                    ? "h-5"
                                                    : "h-7 text-center flex justify-between lg:justify-center flex-row-reverse"
                                            }
                                        >
                                            <span className="font-medium text-sm text-[#101828]">
                                                {data["Individual data"]}
                                            </span>
                                            <span className="lg:hidden">
                                                {pricingData[0]["Individual data"]}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            className={
                                                index === 0
                                                    ? "h-7"
                                                    : "h-7 flex justify-between lg:justify-center flex-row-reverse"
                                            }
                                        >
                                            {data.Support === true ? (
                                                <>
                                                    <RightIcon bgcolor={`#365CCE`} />
                                                </>
                                            ) : (
                                                <span className="font-medium text-sm text-[#101828]">
                                                    Support
                                                </span>
                                            )}
                                            <span className="lg:hidden">
                                                {pricingData[0]["Support"]}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <hr />
                                        </td>
                                    </tr>
                                    {/* portion after second title */}
                                    <tr>
                                        <td
                                            className="h-5 text-sm font-semibold text-[#365CCE] whitespace-nowrap"
                                        >
                                            {data.titleRow5}
                                            <span className="lg:hidden">
                                                {pricingData[0]["titleRow5"]}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            className={
                                                index === 0
                                                    ? "h-5"
                                                    : "h-7 text-center flex justify-between lg:justify-center flex-row-reverse"
                                            }
                                        >
                                            <span>{data.Analytics}</span>
                                            <span className="lg:hidden">
                                                {pricingData[0]["Analytics"]}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            className={
                                                index === 0
                                                    ? "h-5"
                                                    : "h-7 text-center flex justify-between lg:justify-center flex-row-reverse"
                                            }
                                        >
                                            {data["Export Reports"] === true ? (
                                                <RightIcon bgcolor={`#365CCE`} />
                                            ) : (
                                                <span className="font-medium text-sm text-[#101828]">
                                                    Export reports
                                                </span>
                                            )}
                                            <span className="lg:hidden">
                                                {pricingData[0]["Export Reports"]}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            className={
                                                index === 0
                                                    ? "h-5"
                                                    : "h-7 text-center flex justify-between lg:justify-center flex-row-reverse"
                                            }
                                        >
                                            {data["Api Access"] === true ? (
                                                <RightIcon bgcolor={`#365CCE`} />
                                            ) : data["Api Access"] === false ? (
                                                <LineIcon bgcolor={`#365CCE`} />
                                            ) : (
                                                data["Api Access"]
                                            )}
                                            <span className="lg:hidden">
                                                {pricingData[0]["Api Access"]}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Sample5;
