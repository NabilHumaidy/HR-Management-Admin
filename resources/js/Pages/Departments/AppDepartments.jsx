import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { HiOutlinePlusCircle } from "react-icons/hi2";
import {Modal, Avatar, Input, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Link} from "@nextui-org/react";
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";

export default function AppDepartments({auth, errors, departments, employee}) {
    let user = auth.user;
    const { props } = usePage();
    const flashMessage = props.flash.message;

    const [isAlert, setIsAlert] = useState(true);

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [departmentName, setDepartmentName] = useState('');

    const { data, setData } = useForm({
        departmentName: '',
    });

    const handleSubmit = () => {
        const formData = {
            departmentName: departmentName
        };
    
        setData(formData);
    
        router.post('/dashboard/departments/add', formData);
    }

    console.log('last props: ', props);

    return (
        <>
            <Head title="Departments" />
            <AuthenticatedLayout
                user={auth.user}
                header='All Departments'
                headerAlt='All Departments Information'
            >
                <div className='h-full border p-5 rounded-xl'>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <div className='flex rounded-lg border items-center mb-3 md:mb-0'>
                            <img src="/image/svg/search.svg" alt="" className='pl-[10px] h-6 ' />
                            <input type="text" placeholder="Search" className='border-0 rounded-md opacity-40 border-transparent focus:border-transparent focus:ring-0' />
                        </div>
                        <div className='flex gap-5 justify-between md:justify-normal'>
                            <Button onPress={onOpen} className='gap-2 text-white bg-primary-500 p-2 md:p-3 rounded-xl' startContent={<HiOutlinePlusCircle size={25}/>}>Add New Department</Button>
                        </div>
                    </div>
                    <div className='pt-8 w-full'>

                        <div className='flex flex-wrap gap-4'>

                            {departments && departments.map((department, i) => {
                                return (
                                    <div key={i} className='p-5 text-[#16151C] border rounded-xl w-full md:w-[48.5%] 2xl:w-[32%]'>
                                        <div className='flex justify-between border-b pb-3'>
                                            <div>
                                                <p className='text-xl font-semibold'>{department.departmentName} Department</p>
                                                <p className='text-sm text-[#A2A1A8]'>20 Members</p>
                                            </div>
                                            <Link>View All</Link>
                                        </div>
                                        <div className='pt-5 flex flex-col gap-4'>
                                            {employee ? employee.map((karyawan, j) => {
                                                console.log(karyawan);
                                                // Check apakah department.id sama dengan karyawan.department
                                                if (department.id == karyawan.department) {
                                                    return (
                                                        <Link key={j} href={`/dashboard/employees/show/${karyawan.id}`} className='flex justify-between items-center'>
                                                            <div className='flex gap-2 items-center'>
                                                                <Avatar src={`/uploads/Photo Profile/${karyawan.photoProfile ? karyawan.photoProfile : 'defaultAvatar.JPG'}`} />
                                                                <div className='flex flex-col'>
                                                                    <p>
                                                                        {`${karyawan.firstName} ${karyawan.lastName}`}
                                                                    </p>
                                                                    <p className='text-xs text-[#A2A1A8]'>
                                                                        {karyawan.designation}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <FaAngleRight />
                                                            </div>
                                                        </Link>
                                                    );
                                                } else {
                                                    return null; // Jika tidak sesuai, kembalikan null
                                                }
                                            }) : 'Tidak ada Data'}
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    <Modal backdrop={'blur'} isOpen={isOpen} onOpenChange={onOpenChange} size={'sm'} isDismissable={false} className="bg-white border border-solid rounded-xl">
                        <ModalContent>
                        {(onClose) => (
                            <>
                            <ModalHeader className="flex flex-col gap-1">Form Add Department</ModalHeader>
                            <ModalBody>
                                {
                                    flashMessage && <div id="alert-1" className={`${!isAlert && 'hidden'} flex items-center p-4 mb-4 text-primary-500 rounded-lg bg-blue-50 `} role="alert">
                                    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                    </svg>
                                    <span className="sr-only">Info</span>
                                    <div className="ms-3 text-sm font-medium">
                                        {flashMessage}
                                    </div>
                                        <button onClick={() => setIsAlert(!isAlert)} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 ">
                                        <span className="sr-only">Close</span>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                    </button>
                                </div>
                                }
                                <input type="text" name='departmentName' onChange={(departmentName) => setDepartmentName(departmentName.target.value)} value={departmentName} className="block w-full rounded-md border-0 p-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Department Name"/>
                                {
                                    errors ? <p className='text-sm text-red-500'>{errors.departmentName}</p> : ''
                                }

                                <div className="flex justify-center gap-[11px] p-5 w-full">
                                    <Button className="border rounded-lg bg-transparent w-full p-[10px]" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button className="bg-primary-500 border rounded-lg w-full text-white p-[10px]" onClick={() => handleSubmit()}>
                                        Add
                                    </Button>
                                </div>
                            </ModalBody>
                            </>
                        )}
                        </ModalContent>
                    </Modal>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
        
    );
}
