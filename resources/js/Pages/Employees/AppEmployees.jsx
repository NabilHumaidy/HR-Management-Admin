import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { Button, Pagination, Avatar, Input } from "@nextui-org/react";

export default function AppEmployees({auth}) {
    let user = auth.user
    return (
        <>
            <Head title="Employee" />
            <AuthenticatedLayout
                user={auth.user}
                header='All Employees'
                headerAlt='All Employee Information'
            >
                <div className='h-full border p-5 rounded-xl'>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <div className='flex rounded-lg border items-center mb-3 md:mb-0'>
                            <img src="/image/svg/search.svg" alt="" className='pl-[10px] h-6 ' />
                            <input type="text" placeholder="Search" className='border-0 rounded-md opacity-40 border-transparent focus:border-transparent focus:ring-0' />
                        </div>
                        <div className='flex gap-5 justify-between md:justify-normal'>
                            <Link href='employees/add'><Button className='gap-2 text-white bg-primary-500 p-2 md:p-3 rounded-xl' startContent={<HiOutlinePlusCircle size={25}/>}>Add New Employee</Button></Link>
                            
                            <Button className='gap-2 p-2 md:p-3 rounded-xl border' startContent={<TbAdjustmentsHorizontal size={25}/>}>Filter</Button>
                        </div>
                    </div>
                    <div className='pt-8 w-full'>

                        {/* Table for Tablet > */}
                        <table className='w-full hidden md:table text-[#16151C]'>
                            <thead className='text-[#A2A1A8] font-light'>
                                <tr className='border-b'>
                                    <td className='py-3 pe-3'>Employee Name</td>
                                    <td className='py-3 pe-3'>Employee ID</td>
                                    <td className='py-3 pe-3'>Department</td>
                                    <td className='py-3 pe-3'>Designation</td>
                                    <td className='py-3 pe-3'>Type</td>
                                    <td className='py-3 pe-3'>Status</td>
                                    <td className='py-3 pe-3'>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b'>
                                    <td className='py-1 pe-3 flex gap-3 items-center m-1'><Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />Kathryn Murphy</td>
                                    <td className='py-1 pe-3'>009812890</td>
                                    <td className='py-1 pe-3'>Developement</td>
                                    <td className='py-1 pe-3'>React JS Developer</td>
                                    <td className='py-1 pe-3'>Office</td>
                                    <td className='py-1 pe-3'><span className="inline-flex items-center rounded-md bg-[#7152F31A] px-2 py-1 text-sm font-light text-primary-500 ring-1 ring-inset ring-gray-500/10">Permanent</span></td>
                                    <td className='py-1 pe-3'>Action</td>
                                </tr>
                                <tr className='border-b'>
                                    <td className='py-1 pe-3 flex gap-3 items-center m-1'><Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />Kathryn Murphy</td>
                                    <td className='py-1 pe-3'>009812890</td>
                                    <td className='py-1 pe-3'>Developement</td>
                                    <td className='py-1 pe-3'>React JS Developer</td>
                                    <td className='py-1 pe-3'>Office</td>
                                    <td className='py-1 pe-3'><span className="inline-flex items-center rounded-md bg-[#7152F31A] px-2 py-1 text-sm font-light text-primary-500 ring-1 ring-inset ring-gray-500/10">Permanent</span></td>
                                    <td className='py-1 pe-3'>Action</td>
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
                        </div>

                        <Pagination showControls total={10} initialPage={1}/>
                    </div>
                </div>
                
            </AuthenticatedLayout>
        </>
        
    );
}
