import { Fragment, useState } from "react";
import * as React from "react";
import DashboardMenu from "@/Components/DashboardMenu";
import { Calendar } from "@/Components/ui/calendar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import CalendarDemo from "@/Components/CalendarDemo";
import Charts from "@/Components/Charts";
import SelectDashboard from "@/Components/SelectDashboard";
import { Avatar } from "@nextui-org/react";

export default function Dashboard({ auth }) {
    let user = auth.user;

    return (
        <>
            <Head title="Dashboard" />
            <AuthenticatedLayout
                user={auth.user}
                header={`Hello ${user.userName} 👋🏻`}
                headerAlt="Good Morning"
            >
                <div className="flex  ">
    

                {/* Hero Menu */}
                <div className="flex mr-[20px] max-h-24">

                <div className=" mt-[40px] ml-[30px]">
                    
                    {/* Kiri atas */}
                        <div className="border rounded-md  pt-[16px]  shadow-md ">
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
                                <div className="flex bg-green-100 w-[54px] h-[26px] mr-[16px] rounded-md justify-center  items-center pr-">
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


                        {/* Kiri Bawah */}
                        <div className="border rounded-md  pt-[16px] mt-[20px]  shadow-md ">
                            <div className="container flex items-center pl-[16px] gap-[10px]">
                                <div className="bg-gray-100 rounded-md w-[40px] h-[40px] flex items-center justify-center">
                                    <img
                                        src="image/svg/employeesSolid.svg"
                                        alt=""
                                        className="w-[20px] h-[20px]"
                                    />
                                </div>
                                <h3 className="text-[14px]">Total Attendance</h3>
                            </div>
                            <div className="flex items-center pt-[10px] gap-[172px] pl-[16px] ">
                                <h1 className="text-[30px] font-bold">560</h1>
                                <div className="flex bg-green-100 w-[54px] h-[26px] mr-[16px] rounded-md justify-center  items-center pr-">
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

                        {/* Kanan atas */}
                        <div className=" mt-[40px] ml-[30px]">

                        <div className="border rounded-md  pt-[16px]  shadow-md ">
                            <div className="container flex items-center pl-[16px] gap-[10px]">
                                <div className="bg-gray-100 rounded-md w-[40px] h-[40px] flex items-center justify-center">
                                    <img
                                        src="image/svg/employeesSolid.svg"
                                        alt=""
                                        className="w-[20px] h-[20px]"
                                    />
                                </div>
                                <h3 className="text-[14px]">Total Applicant</h3>
                            </div>
                            <div className="flex items-center pt-[10px] gap-[172px] pl-[16px] ">
                                <h1 className="text-[30px] font-bold">560</h1>
                                <div className="flex bg-green-100 w-[54px] h-[26px] mr-[16px] rounded-md justify-center  items-center pr-">
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

                            {/* Kanan bawah */}
                            <div className="border rounded-md  pt-[16px] mt-[20px] shadow-md ">
                            <div className="container flex items-center pl-[16px] gap-[10px]">
                                <div className="bg-gray-100 rounded-md w-[40px] h-[40px] flex items-center justify-center">
                                    <img
                                        src="image/svg/employeesSolid.svg"
                                        alt=""
                                        className="w-[20px] h-[20px]"
                                    />
                                </div>
                                <h3 className="text-[14px]">Total Project</h3>
                            </div>
                            <div className="flex items-center pt-[10px] gap-[172px] pl-[16px] ">
                                <h1 className="text-[30px] font-bold">560</h1>
                                <div className="flex bg-green-100 w-[54px] h-[26px] mr-[16px] rounded-md justify-center  items-center pr-">
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

                    </div>
                    {/* End of Hero Menu */}



                    <div className="flex mt-[40px] border rounded-lg justify-end">
                        <CalendarDemo />
                    </div>
                    
                   
                    
                </div>
              
                <div className="absolute top-[490px] ml-[30px] border rounded-lg w-[48%] ">
                    <div className="pt-[30px] pl-[25px]">
                        <div className="flex justify-between items-center pr-5">
                    <h1 className=" font-bold">Attendance Overview</h1>
                    <SelectDashboard/>
                    </div>
                <Charts />
                </div>
                
                </div>

                <div className="absolute top-[890px] ml-[30px] mt-[20px]">
                    <div className='pt-2 pl-2 w-full border rouned-lg'>

{/* Table for Tablet > */}
<table className='w-full hidden md:table text-[#16151C]'>
    <thead className='text-[#A2A1A8] font-light'>
        <tr className='border-b'>
            <td className='py-3 pe-3'>Employee Name</td>
            <td className='py-3 pe-3'>Designation</td>
            <td className='py-3 pe-3'>Type</td>
            <td className='py-3 pe-3'>Check In Time</td>
            <td className='py-3 pe-3'>Type</td>
        </tr>
    </thead>
    <tbody>
        <tr className='border-b'>
            <td className='py-1 pe-3 flex gap-3 items-center m-1'>Kathryn Murphy</td>
            <td className='py-1 pe-3'>009812890</td>
            <td className='py-1 pe-3'>Developement</td>
            <td className='py-1 pe-3'>React JS Developer</td>
            <td className='py-1 pe-3'><span className="inline-flex items-center rounded-md bg-[#7152F31A] px-2 py-1 text-sm font-light text-primary-500 ring-1 ring-inset ring-gray-500/10">Permanent</span></td>
            
        </tr>
        <tr className='border-b'>
            <td className='py-1 pe-3 flex gap-3 items-center m-1'>Kathryn Murphy</td>
            <td className='py-1 pe-3'>009812890</td>
            <td className='py-1 pe-3'>Developement</td>
            <td className='py-1 pe-3'>React JS Developer</td>
            <td className='py-1 pe-3'><span className="inline-flex items-center rounded-md bg-[#7152F31A] px-2 py-1 text-sm font-light text-primary-500 ring-1 ring-inset ring-gray-500/10">Permanent</span></td>
        </tr>
    </tbody>
</table>

{/* Table for Mobile */}
<div className='flex flex-col gap-5 md:hidden'>
    <div className='border rounded-lg text-[#16151C]'>
        <div className='flex justify-between py-2 px-3 border-b'>
            <p>009812890</p>
            <button>DropdownAction</button>
        </div>
        <div className='py-3 px-3'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    <div className='flex flex-col'>
                        <p>Kathryn Murphy</p>
                        <p className='text-xs text-[#A2A1A8]'>React JS Developer</p>
                    </div>
                </div> 
                <div>
                    <span className="inline-flex items-center rounded-md bg-[#7152F31A] px-2 py-1 text-sm font-light text-primary-500 ring-1 ring-inset ring-gray-500/10">Permanent</span>
                </div>
            </div>
            <div className='mt-3'>
                <div className='flex justify-between'>
                    <p>Department</p>
                    <p className='text-[#A2A1A8]'>Developement</p>
                </div>
                <div className='flex justify-between'>
                    <p>Type</p>
                    <p className='text-[#A2A1A8]'>Office</p>
                </div>
            </div>
        </div>
    </div>
    
    <div className='border rounded-lg text-[#16151C]'>
        <div className='flex justify-between py-2 px-3 border-b'>
            <p>009812890</p>
            <button>DropdownAction</button>
        </div>
        <div className='py-3 px-3'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    {/* <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" /> */}
                    <div className='flex flex-col'>
                        <p>Kathryn Murphy</p>
                        <p className='text-xs text-[#A2A1A8]'>React JS Developer</p>
                    </div>
                </div> 
                <div>
                    <span className="inline-flex items-center rounded-md bg-[#7152F31A] px-2 py-1 text-sm font-light text-primary-500 ring-1 ring-inset ring-gray-500/10">Permanent</span>
                </div>
            </div>
            <div className='mt-3'>
                <div className='flex justify-between'>
                    <p>Department</p>
                    <p className='text-[#A2A1A8]'>Developement</p>
                </div>
                <div className='flex justify-between'>
                    <p>Type</p>
                    <p className='text-[#A2A1A8]'>Office</p>
                </div>
            </div>
        </div>
    </div>
</div>


                    </div>
                </div>
                
            </AuthenticatedLayout>
            
        </>
    );
}
