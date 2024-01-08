import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { TbAdjustmentsHorizontal, TbTrash } from "react-icons/tb";
import { Button, Pagination, Avatar, Input } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import { LuEye, LuDownload } from "react-icons/lu";
import { BiEditAlt } from "react-icons/bi";

export default function AppEmployees({auth, employees, departments}) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredEmployees = employees.filter((employee) => {
        const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
    });

    
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
                            <input type="text" placeholder="Search" className='border-0 rounded-md opacity-40 border-transparent focus:border-transparent focus:ring-0' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                        </div>
                        <div className='flex gap-5 justify-between md:justify-normal'>
                            <Link href='employees/add'><Button className='gap-2 text-white bg-primary-500 p-2 md:p-3 rounded-xl' startContent={<HiOutlinePlusCircle size={25}/>}>Add New Employee</Button></Link>
                            
                            <Button className='gap-2 p-2 md:p-3 bg-white rounded-xl border' startContent={<TbAdjustmentsHorizontal size={25}/>}>Filter</Button>
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
                                {filteredEmployees.map((employee, i) => (
                                    <tr className='border-b' key={i}>
                                        <td className='py-1 pe-3 flex gap-3 items-center m-1'><Avatar src={`/uploads/Photo Profile/${employee.photoProfile ? employee.photoProfile : 'defaultAvatar.JPG'}`} />{employee.firstName} {employee.lastName} </td>
                                        <td className='py-1 pe-3'>{employee.id}</td>
                                        <td className='py-1 pe-3'>
                                            {departments && departments.map((department, j) => {
                                                if (department.id == employee.department){
                                                    return(
                                                        department.departmentName
                                                    )
                                                }
                                            })}
                                        </td>
                                        <td className='py-1 pe-3'>{employee.designation}</td>
                                        <td className='py-1 pe-3'>{employee.employeeType}</td>
                                        <td className='py-1 pe-3'><span className="inline-flex items-center rounded-md bg-[#7152F31A] px-2 py-1 text-sm font-light text-primary-500 ring-1 ring-inset ring-gray-500/10">{employee.status}</span></td>
                                        <td className='py-1 pe-3 flex gap-2 items-center'>
                                            <Link href={`/dashboard/employees/show/${employee.id}`} className='cursor-pointer hover:text-primary-500'><LuEye className='hover:scale-125' size={23}/></Link>
                                            <Link href={`/dashboard/employees/edit/${employee.id}`} className='cursor-pointer hover:text-primary-500'><BiEditAlt className='hover:scale-125' size={23}/></Link>
                                            <Link href={`/dashboard/employees/edit/${employee.id}`} className='cursor-pointer hover:text-primary-500'><TbTrash className='hover:scale-125' size={23}/></Link>
                                        </td>
                                    </tr>
                                ))}
                                {/* {employees && employees.map((employee, i) => (
                                    <tr className='border-b' key={i}>
                                        <td className='py-1 pe-3 flex gap-3 items-center m-1'><Avatar src={`/uploads/Photo Profile/${employee.photoProfile ? employee.photoProfile : 'defaultAvatar.JPG'}`} />{employee.firstName} {employee.lastName} </td>
                                        <td className='py-1 pe-3'>{employee.id}</td>
                                        <td className='py-1 pe-3'>
                                            {departments && departments.map((department, j) => {
                                                if (department.id == employee.department){
                                                    return(
                                                        department.departmentName
                                                    )
                                                }
                                            })}
                                        </td>
                                        <td className='py-1 pe-3'>{employee.designation}</td>
                                        <td className='py-1 pe-3'>{employee.employeeType}</td>
                                        <td className='py-1 pe-3'><span className="inline-flex items-center rounded-md bg-[#7152F31A] px-2 py-1 text-sm font-light text-primary-500 ring-1 ring-inset ring-gray-500/10">{employee.status}</span></td>
                                        <td className='py-1 pe-3'>Action</td>
                                    </tr>
                                ))} */}
                            </tbody>
                        </table>

                        {/* Table for Mobile */}
                        <div className='flex flex-col gap-5 md:hidden'>
                            {filteredEmployees.map((employee, i) => (
                                <div className='border rounded-lg text-[#16151C]' key={i}>
                                    <div className='flex justify-between py-2 px-3 border-b'>
                                        <p>{employee.id}</p>
                                        <button>DropdownAction</button>
                                    </div>
                                    <div className='py-3 px-3'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex gap-2 items-center'>
                                                <Avatar src={`/uploads/Photo Profile/${employee.photoProfile ? employee.photoProfile : 'defaultAvatar.JPG'}`} />
                                                <div className='flex flex-col'>
                                                    <p>{employee.firstName} {employee.lastName}</p>
                                                    <p className='text-xs text-[#A2A1A8]'>{employee.designation}</p>
                                                </div>
                                            </div> 
                                            <div>
                                                <span className="inline-flex items-center rounded-md bg-[#7152F31A] px-2 py-1 text-sm font-light text-primary-500 ring-1 ring-inset ring-gray-500/10">{employee.status}</span>
                                            </div>
                                        </div>
                                        <div className='mt-3'>
                                            <div className='flex justify-between'>
                                                <p>Department</p>
                                                <p className='text-[#A2A1A8]'>
                                                    {departments && departments.map((department, j) => {
                                                        if (department.id == employee.department){
                                                            return(
                                                                department.departmentName
                                                            )
                                                        }
                                                    })}
                                                </p>
                                            </div>
                                            <div className='flex justify-between'>
                                                <p>Type</p>
                                                <p className='text-[#A2A1A8]'>{employee.employeeType}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                            
                        </div>

                        <Pagination showControls total={10} initialPage={1}/>
                    </div>
                </div>
                
            </AuthenticatedLayout>
        </>
        
    );
}
