import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { HiOutlinePlusCircle, HiUser, HiBriefcase, HiDocumentText, HiLockClosed, HiOutlineCamera } from "react-icons/hi2";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { Button, Pagination, Avatar, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { useState } from 'react';

export default function AppEmployees({auth}) {
    let user = auth.user
    const [currentTab, setCurrentTab] = useState(1);

    const handleNextTab = () => {
        setCurrentTab((prevTab) => prevTab + 1);
    };

    const handlePrevTab = () => {
        setCurrentTab((prevTab) => Math.max(prevTab - 1, 1));
    };

    const tabs = [
        { id: 1, icon: <HiUser size={20} />, label: 'Personal Information' },
        { id: 2, icon: <HiBriefcase size={20} />, label: 'Professional Information' },
        { id: 3, icon: <HiDocumentText size={20} />, label: 'Documents' },
        { id: 4, icon: <HiLockClosed size={20} />, label: 'Account Access' },
    ];
    
    return (
        <>
            <Head title="Employee" />
            <AuthenticatedLayout
                user={auth.user}
                header='Add New Employee'
                headerAlt={<Breadcrumbs>
                                <BreadcrumbItem href='/dashboard/employees'>All Employees</BreadcrumbItem>
                                <BreadcrumbItem>Add New Employees</BreadcrumbItem>
                            </Breadcrumbs>}
            >
                <div className='h-full border p-5 rounded-xl'>
                    <div className='ps-5 lg:ps-0 flex gap-20 lg:gap-5 border-b pb-2 flex-wrap'>
                        {tabs.map((tab) => (
                            <button key={tab.id} onClick={() => setCurrentTab(tab.id)} className={`relative ${currentTab === tab.id && 'text-primary-500'}`}>
                                <div className=''>
                                    <p className={`absolute lg:static flex gap-2 items-center ${currentTab === tab.id && 'font-semibold'} transition delay-150`}>{tab.icon} <p className='hidden lg:block'>{tab.label}</p></p>
                                    <div className={`absolute top-0 lg:top-[31px] lg:h-[3px] lg:w-full w-[150%] h-[150] transition delay-150 ${currentTab === tab.id && 'bg-primary-500'}`}></div>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className='pt-7'>
                        <div className={` ${currentTab === 1 ? 'block' : 'hidden'}`}>
                            {/* Konten tab 1 */}
                            <div className='w-[100px] h-[100px] bg-[#A2A1A80D] rounded-xl border flex justify-center items-center'>
                                <HiOutlineCamera size={30} />
                            </div>
                            <div className='grid grid-cols-6 gap-5 mt-5'>
                                <input type="text" name='firstname' onChange={(departmentName) => setDepartmentName(departmentName.target.value)} className="col-span-3 block w-full rounded-md border-0 p-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="First Name"/>
                                <input type="text" name='lastname' onChange={(departmentName) => setDepartmentName(departmentName.target.value)} className="col-span-3 block w-full rounded-md border-0 p-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Last Name"/>
                                <input type="text" name='numberphone' onChange={(departmentName) => setDepartmentName(departmentName.target.value)} className="col-span-3 block w-full rounded-md border-0 p-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Mobile Number"/>
                                <input type="text" name='emailaddress' onChange={(departmentName) => setDepartmentName(departmentName.target.value)} className="col-span-3 block w-full rounded-md border-0 p-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email Address"/>
                                <input type="date" name='dateofbirth' onChange={(departmentName) => setDepartmentName(departmentName.target.value)} className="col-span-3 block w-full rounded-md border-0 p-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Date of Birth"/>
                                <select name='maritalstatus' onChange={(departmentName) => setDepartmentName(departmentName.target.value)} className="col-span-3 block w-full rounded-md border-0 p-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option>Marital Status</option>
                                    <option value="Married">Married</option>
                                    <option value="Divorced">Divorced</option>
                                    <option value="Widowed">Widowed</option>
                                    <option value="Remarried">Remarried</option>
                                </select>
                                <select name='gender' onChange={(departmentName) => setDepartmentName(departmentName.target.value)} className="col-span-3 block w-full rounded-md border-0 p-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option>Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Mental Ilness">Mental Ilness</option>
                                </select>
                                <select name='nationality' onChange={(departmentName) => setDepartmentName(departmentName.target.value)} className="col-span-3 block w-full rounded-md border-0 p-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option>Nationality</option>
                                    <option value="Indonesian Civilage">Indonesian Civilage</option>
                                    <option value="Foreign">Foreign</option>
                                    <option value="Alien">Alien</option>
                                </select>
                                <input type="text" name='firstname' onChange={(departmentName) => setDepartmentName(departmentName.target.value)} className="col-span-6 block w-full rounded-md border-0 p-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Address"/>
                                <select name='maritalstatus' onChange={(departmentName) => setDepartmentName(departmentName.target.value)} className="col-span-2 block w-full rounded-md border-0 p-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option>Marital Status</option>
                                    <option value="Married">Married</option>
                                    <option value="Divorced">Divorced</option>
                                    <option value="Widowed">Widowed</option>
                                    <option value="Remarried">Remarried</option>
                                </select>
                                <select name='gender' onChange={(departmentName) => setDepartmentName(departmentName.target.value)} className="col-span-2 block w-full rounded-md border-0 p-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option>Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Mental Ilness">Mental Ilness</option>
                                </select>
                                <select name='nationality' onChange={(departmentName) => setDepartmentName(departmentName.target.value)} className="col-span-2 block w-full rounded-md border-0 p-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option>Nationality</option>
                                    <option value="Indonesian Civilage">Indonesian Civilage</option>
                                    <option value="Foreign">Foreign</option>
                                    <option value="Alien">Alien</option>
                                </select>
                            </div>
                            
                            
                        </div>
                    </div>

                    <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md">
                        <div className="flex justify-between mb-4">
                            <button
                            className={`bg-blue-500 text-white px-4 py-2 rounded ${
                                currentTab === 1 && 'opacity-50 cursor-not-allowed'
                            }`}
                            onClick={handlePrevTab}
                            disabled={currentTab === 1}
                            >
                            Prev
                            </button>
                            <button
                            className={`bg-blue-500 text-white px-4 py-2 rounded ${
                                currentTab === 3 && 'hidden'
                            }`}
                            onClick={handleNextTab}
                            disabled={currentTab === 3}
                            >
                            Next
                            </button>
                            {currentTab === 3 && <button>Submit</button>}
                        </div>

                        <div className={` ${currentTab === 2 ? 'block' : 'hidden'}`}>
                            {/* Konten tab 2 */}
                            <p>Tab 2 Content</p>
                            <input type="text" />
                        </div>

                        <div className={` ${currentTab === 3 ? 'block' : 'hidden'}`}>
                            {/* Konten tab 3 */}
                            <p>Tab 3 Content</p>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                
            </AuthenticatedLayout>
        </>
        
    );
}
