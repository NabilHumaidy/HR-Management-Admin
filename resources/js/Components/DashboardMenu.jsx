"use client";

import * as React from "react"
import { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Image,
    Popover,
    PopoverContent,
    Pagination,
    Avatar,
} from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";
import { Calendar } from "@/components/ui/calendar";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
} from "@nextui-org/react";
import { TfiAngleDown } from "react-icons/tfi";

export function DashboardMenu()  {
   
    return (
        
        <>
        
            <div className="grid grid-cols-3 ">
                {/* Employee */}
                <div className=" pt-[40px] pl-[30px] pr-[30px]">
                    <div className="border rounded-md w-[313px] h-[154px] pt-[16px]  shadow-md">
                        <div className="container flex items-center pl-[16px] gap-[10px]">
                            <div className="bg-gray-100 rounded-md w-[40px] h-[40px] flex items-center justify-center">
                                <img
                                    src="image/svg/employeesSolid.svg"
                                    alt=""
                                    className="w-[20px] h-[20px]"
                                />
                            </div>
                            <h3 className="text-[14px]">Total Employee</h3>
                        </div>
                        <div className="flex items-center pt-[10px] gap-[172px] pl-[16px] ">
                            <h1 className="text-[30px] font-bold">560</h1>
                            <div className="flex bg-green-100 w-[54px] h-[26px] rounded-md justify-center  items-center pr-">
                                <img src="image/svg/up-arrow.svg" alt="" />
                                <p className="text-[11px] text-1 ">12%</p>
                            </div>
                        </div>
                        <div className="w-full pl-0  pt-[10px]">
                            <hr />
                            <p className="flex text-[12px] items-center text-gray-500 opacity-60 pt-[6px] pl-[16px]">
                                Updated 16 Des 2023
                            </p>
                        </div>
                    </div>
                    {/* End of Employee */}

                    {/* Today Attendance */}
                    <div className="pt-[20px]">
                        <div className="border rounded-md w-[313px] h-[154px] pt-[16px]  shadow-md">
                            <div className="container flex items-center pl-[16px] gap-[10px]">
                                <div className="bg-gray-100 rounded-md w-[40px] h-[40px] flex items-center justify-center">
                                    <img
                                        src="image/svg/calendar-check.svg"
                                        alt=""
                                        className="w-[20px] h-[20px]"
                                    />
                                </div>
                                <h3 className="text-[14px]">
                                    Today Attendance
                                </h3>
                            </div>
                            <div className="flex items-center pt-[10px] gap-[172px] pl-[16px] ">
                                <h1 className="text-[30px] font-bold">470</h1>
                                <div className="flex bg-red-100 w-[54px] h-[26px] rounded-md justify-center  items-center pr-">
                                    <img
                                        src="image/svg/down-arrow.svg"
                                        alt=""
                                    />
                                    <p className="text-[11px] text-primary-merah ">
                                        8%
                                    </p>
                                </div>
                            </div>
                            <div className="w-full pl-0  pt-[10px]">
                                <hr />
                                <p className="flex text-[12px] items-center text-gray-500 opacity-60 pt-[6px] pl-[16px]">
                                    Updated 14 July 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Aplicant */}
                <div className=" pt-[40px] pl-[30px]">
                    <div className="border rounded-md w-[313px] h-[154px] pt-[16px]  shadow-md">
                        <div className="container flex items-center pl-[16px] gap-[10px]">
                            <div className="bg-gray-100 rounded-md w-[40px] h-[40px] flex items-center justify-center">
                                <img
                                    src="image/svg/aplicant.svg"
                                    alt=""
                                    className="w-[20px] h-[20px]"
                                />
                            </div>
                            <h3 className="text-[14px]">Total Aplicant</h3>
                        </div>
                        <div className="flex items-center pt-[10px] gap-[172px] pl-[16px] ">
                            <h1 className="text-[30px] font-bold">105</h1>
                            <div className="flex bg-green-100 w-[54px] h-[26px] rounded-md justify-center  items-center pr-">
                                <img src="image/svg/up-arrow.svg" alt="" />
                                <p className="text-[11px] text-1 ">5%</p>
                            </div>
                        </div>
                        <div className="w-full pl-0  pt-[10px]">
                            <hr />
                            <p className="flex text-[12px] items-center text-gray-500 opacity-60 pt-[6px] pl-[16px]">
                                Updated 16 Des 2023
                            </p>
                        </div>
                    </div>
                    {/* End of Aplicant */}

                    {/* Total Project */}
                    <div className="pt-[20px]">
                        <div className="border rounded-md w-[313px] h-[154px] pt-[16px]  shadow-md">
                            <div className="container flex items-center pl-[16px] gap-[10px]">
                                <div className="bg-gray-100 rounded-md w-[40px] h-[40px] flex items-center justify-center">
                                    <img
                                        src="image/svg/project.svg"
                                        alt=""
                                        className="w-[20px] h-[20px]"
                                    />
                                </div>
                                <h3 className="text-[14px]">Total Project</h3>
                            </div>
                            <div className="flex items-center pt-[10px] gap-[172px] pl-[16px] ">
                                <h1 className="text-[30px] font-bold">250</h1>
                                <div className="flex bg-green-100 w-[54px] h-[26px] rounded-md justify-center  items-center pr-">
                                    <img src="image/svg/up-arrow.svg" alt="" />
                                    <p className="text-[11px] text-1 ">12%</p>
                                </div>
                            </div>
                            <div className="w-full pl-0  pt-[10px]">
                                <hr />
                                <p className="flex text-[12px] items-center text-gray-500 opacity-60 pt-[6px] pl-[16px]">
                                    Updated 16 Des 2023
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End of Total Project */}
                </div>
                <div className="border rounded-lg mt-[40px] max-w-[300px]">
                    <div className="flex items-center justify-between ">
                        <h1 className="text-[20px] font-bold pt-[20px] pl-[20px]">
                            My Schedule
                        </h1>
                        <div className="bg-gray-100 rounded-md w-[40px] h-[40px] flex items-center justify-center">
                            <img
                                src="image/svg/project.svg"
                                alt=""
                                className="w-[20px] h-[20px]"
                            />
                        </div>
                    </div>

                    <Calendar mode="single" />
                    <hr className="text-xl" />

                    {/* Tanggal */}
                    <div className=" pt-[20px] pl-[20px] text-[16px] ">
                        <div>Wednesday, 06 July 2023</div>

                        <div className=" pt-[20px] ">
                            <div className="flex gap-[20px] items-center ">
                                09.30
                                <img
                                    src="image/svg/line.svg"
                                    alt=""
                                    className=""
                                />
                                <div className="">
                                    UI / UX Designer Practical Task Review
                                </div>
                            </div>
                            <div className=" pt-[20px] flex gap-[20px] items-center ">
                                09.30
                                <img
                                    src="image/svg/line.svg"
                                    alt=""
                                    className=""
                                />
                                <div className="">
                                    Magento Developer Resume Review
                                </div>
                            </div>
                            <div className=" pt-[20px] flex gap-[20px] items-center ">
                                09.30
                                <img
                                    src="image/svg/line.svg"
                                    alt=""
                                    className=""
                                />
                                <div className="">
                                    Sales Manager Final HR Round
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute  pt-[390px] pl-[30px]">
                    <div className="border rounded-md w-[663px] h-[154px] pt-[16px]  shadow-md">
                        <div className="container flex items-center justify-between pl-[16px] gap-[10px]">
                            <h1 className="font-bold">Attendance Overview</h1>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button variant="bordered" className="border rounded-md px-2 py-2 gap-2">
                                       Today
                                       <TfiAngleDown/>
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="new">
                                        New file
                                    </DropdownItem>
                                    <DropdownItem key="copy">
                                        Copy link
                                    </DropdownItem>
                                    <DropdownItem key="edit">
                                        Edit file
                                    </DropdownItem>
                                    <DropdownItem
                                        key="delete"
                                        className="text-danger"
                                        color="danger"
                                    >
                                        Delete file
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className="flex -z-[9999px flex-col absolute pt-[680px] justify-center items-center pl-[30px] ">
                    <div className="border rounded-md w-[1063px] h-[154px] pt-[16px]  shadow-md">
                        {/* Table for Tablet > */}
                        <table className="w-full hidden md:table text-[#16151C]">
                            <thead className="text-[#A2A1A8] font-light">
                                <tr className="border-b">
                                    <td className="py-3 pe-3">Employee Name</td>
                                    <td className="py-3 pe-3">Employee ID</td>
                                    <td className="py-3 pe-3">Department</td>
                                    <td className="py-3 pe-3">Designation</td>
                                    <td className="py-3 pe-3">Type</td>
                                    <td className="py-3 pe-3">Status</td>
                                    <td className="py-3 pe-3">Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-1 pe-3 flex gap-3 items-center m-1">
                                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                        Kathryn Murphy
                                    </td>
                                    <td className="py-1 pe-3">009812890</td>
                                    <td className="py-1 pe-3">Developement</td>
                                    <td className="py-1 pe-3">
                                        React JS Developer
                                    </td>
                                    <td className="py-1 pe-3">Office</td>
                                    <td className="py-1 pe-3">
                                        <span className="inline-flex items-center rounded-md bg-[#7152F31A] px-2 py-1 text-sm font-light text-primary-500 ring-1 ring-inset ring-gray-500/10">
                                            Permanent
                                        </span>
                                    </td>
                                    <td className="py-1 pe-3">Action</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-1 pe-3 flex gap-3 items-center m-1">
                                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                        Kathryn Murphy
                                    </td>
                                    <td className="py-1 pe-3">009812890</td>
                                    <td className="py-1 pe-3">Developement</td>
                                    <td className="py-1 pe-3">
                                        React JS Developer
                                    </td>
                                    <td className="py-1 pe-3">Office</td>
                                    <td className="py-1 pe-3">
                                        <span className="inline-flex items-center rounded-md bg-[#7152F31A] px-2 py-1 text-sm font-light text-primary-500 ring-1 ring-inset ring-gray-500/10">
                                            Permanent
                                        </span>
                                    </td>
                                    <td className="py-1 pe-3">Action</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Table for Mobile */}
                        <div className="flex flex-col gap-5 md:hidden">
                            <div className="border rounded-lg text-[#16151C]">
                                <div className="flex justify-between py-2 px-3 border-b">
                                    <p>009812890</p>
                                    <button>DropdownAction</button>
                                </div>
                                <div className="py-3 px-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2 items-center">
                                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                            <div className="flex flex-col">
                                                <p>Kathryn Murphy</p>
                                                <p className="text-xs text-[#A2A1A8]">
                                                    React JS Developer
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="inline-flex items-center rounded-md bg-[#7152F31A] px-2 py-1 text-sm font-light text-primary-500 ring-1 ring-inset ring-gray-500/10">
                                                Permanent
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="flex justify-between">
                                            <p>Department</p>
                                            <p className="text-[#A2A1A8]">
                                                Developement
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p>Type</p>
                                            <p className="text-[#A2A1A8]">
                                                Office
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border rounded-lg text-[#16151C]">
                                <div className="flex justify-between py-2 px-3 border-b">
                                    <p>009812890</p>
                                    <button>DropdownAction</button>
                                </div>
                                <div className="py-3 px-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2 items-center">
                                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                            <div className="flex flex-col">
                                                <p>Kathryn Murphy</p>
                                                <p className="text-xs text-[#A2A1A8]">
                                                    React JS Developer
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="inline-flex items-center rounded-md bg-[#7152F31A] px-2 py-1 text-sm font-light text-primary-500 ring-1 ring-inset ring-gray-500/10">
                                                Permanent
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="flex justify-between">
                                            <p>Department</p>
                                            <p className="text-[#A2A1A8]">
                                                Developement
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p>Type</p>
                                            <p className="text-[#A2A1A8]">
                                                Office
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardMenu;

{
    /* <div className='border rounded-md w-[313px] h-[154px] pt-[16px] pl-[16px] shadow-md'>
                <div className='container flex items-center gap-[10px]'>
                    <div className='bg-gray-100 rounded-md w-[40px] h-[40px] flex items-center justify-center'>
                    <img src="image/svg/employeesSolid.svg" alt="" className='w-[20px] h-[20px]'/>
                    
                    </div>
                    <h3 className='text-[14px]'>Total Employee</h3>
                </div>
                <div className='flex items-center pt-[10px] gap-[172px] '>
                    <h1 className='text-[30px] font-bold'>560</h1>
                    <div className='flex bg-green-100 w-[54px] h-[26px] rounded-md justify-center  items-center pr-'>
                        <img src="image/svg/up-arrow.svg" alt="" />
                    <p className='text-[11px] text-1 '>12%</p>
                    </div>
                    
                </div>
            </div> */
}
