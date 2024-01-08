import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { Button, Pagination, Avatar, Input } from "@nextui-org/react";

export default function AppHolidays({auth}) {
    let user = auth.user
    return (
        <>
            <Head title="Holidays" />
            <AuthenticatedLayout
                user={auth.user}
                header='Holidays'
                headerAlt='All Holidays Lists'
            >
                <div className='h-full border p-5 rounded-xl'>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <div className='flex rounded-lg border items-center mb-3 md:mb-0'>
                            <img src="/image/svg/search.svg" alt="" className='pl-[10px] h-6 ' />
                            <input type="text" placeholder="Search" className='border-0 rounded-md opacity-40 border-transparent focus:border-transparent focus:ring-0' />
                        </div>
                        <div className='flex gap-5 justify-between md:justify-normal'>
                            <Button className='gap-2 text-white bg-primary-500 p-2 md:p-3 rounded-xl' startContent={<HiOutlinePlusCircle size={25}/>}>Add New Department</Button>
                        </div>
                    </div>
                    <div className='pt-8 w-full'>

                        {/* Table for Tablet > */}
                        <table className='w-full hidden md:table text-[#16151C] mb-5'>
                            <thead className='text-[#A2A1A8] font-light'>
                                <tr className='border-b'>
                                    <td className='py-3 pe-3'>Date</td>
                                    <td className='py-3 pe-3'>Day</td>
                                    <td className='py-3 pe-3'>Holiday Name</td>
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr className='border-b border-l-[6px] border-l-[#A2A1A833]'>
                                    <td className='py-1 pe-3 p-2'>January 01, 2023</td>
                                    <td className='py-1 pe-3'>Tuesday</td>
                                    <td className='py-1 pe-3'>New Year</td>
                                </tr>
                                <tr className='border-b border-l-[6px] border-l-[#A2A1A833]'>
                                    <td className='py-1 pe-3 p-2'>April 01, 2023</td>
                                    <td className='py-1 pe-3'>Saturday</td>
                                    <td className='py-1 pe-3'>April Fool Day</td>
                                </tr>
                                <tr className='border-b border-l-[6px] border-l-primary-500'>
                                    <td className='py-1 pe-3 p-2'>September 15, 2023</td>
                                    <td className='py-1 pe-3'>Friday</td>
                                    <td className='py-1 pe-3'>International Day of Democracy</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='flex justify-between'>
                            <div className='flex gap-5'>
                                <div className='flex gap-2 items-center'>
                                    <div className='rounded-full bg-primary-500 h-1/3 w-3'></div>
                                    <p>Upcoming</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div className='rounded-full bg-[#A2A1A833] h-1/3 w-3'></div>
                                    <p>Past Holidays</p>
                                </div>
                            </div>
                            <Pagination showControls total={4} initialPage={1}/>
                        </div>
                        
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
        
    );
}
