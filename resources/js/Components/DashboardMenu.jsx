"use client";

import * as React from "react"
import { Calendar } from "@/components/ui/calendar";
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
        
            <div className="flex ">

                
                {/* Employee */}
                <div className="grid grid-cols-2 mt-[40px] ml-[30px]  gap-[20px]">
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
                </div>

                

                <div className="mt-[40px] border rounded-lg">
                    
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
// className="flex -z-[9999px flex-col absolute pt-[680px] justify-center items-center pl-[30px]