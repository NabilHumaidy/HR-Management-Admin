import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage, router, useForm } from '@inertiajs/react';
import { HiOutlinePlusCircle, HiUser, HiBriefcase, HiDocumentText, HiLockClosed, HiOutlineCamera } from "react-icons/hi2";
import { Button, Pagination, Badge, Avatar, Breadcrumbs, BreadcrumbItem, button } from "@nextui-org/react";
import { useState, useRef } from 'react';
import { LuEye, LuDownload, LuCalendarCheck } from "react-icons/lu";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { SlBriefcase } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaRegFileLines, FaRegUser } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";

export default function ShowEmployees({ auth, errors, departments, employees }) {
    const employee = employees[0]
    let user = auth.user
    const [currentTab, setCurrentTab] = useState(1);
    const [currentSideTab, setCurrentSideTab] = useState(1);
    const { props } = usePage();

    console.log(props)


    const handleNextTab = () => {
        setCurrentTab((prevTab) => prevTab + 1);
    };

    const handlePrevTab = () => {
        setCurrentTab((prevTab) => Math.max(prevTab - 1, 1));
    };

    const handleSideNextTab = () => {
        currentSideTab((prevTab) => prevTab + 1);
    };

    const handleSidePrevTab = () => {
        currentSideTab((prevTab) => Math.max(prevTab - 1, 1));
    };

    const tabs = [
        { id: 1, icon: <HiUser size={20} />, label: 'Personal Information', data: ['firstName', 'lastName', 'mobileNumber', 'email', 'dateOfBirth', 'maritalStatus', 'gender', 'nationality', 'address', 'city', 'province', 'zipCode'] },
        { id: 2, icon: <HiBriefcase size={20} />, label: 'Professional Information', data: ['userName', 'employeeType', 'department', 'designation', 'workingDays', 'joiningDate', 'officeLocation'] },
        { id: 3, icon: <HiDocumentText size={20} />, label: 'Documents', data: ['appointment', 'salarySlips', 'reliving', 'experience'] },
        { id: 4, icon: <HiLockClosed size={20} />, label: 'Account Access', data: ['whatsApp', 'password', 'instagram'] },
    ];

    const sideTabs = [
        { id: 1, icon: <FaRegUser size={20} />, label: 'Profile', rounded: ' rounded-xl md:rounded-t-xl md:rounded-b-none'},
        { id: 2, icon: <LuCalendarCheck size={20} />, label: 'Attendance', rounded: ' rounded-xl '},
        { id: 3, icon: <FaRegFileLines size={20} />, label: 'Projects', rounded: ' rounded-xl '},
        { id: 4, icon: <CgNotes size={20} />, label: 'Leave', rounded: ' rounded-xl md:rounded-b-xl md:rounded-t-none '},
    ]

    const personalInformation = [
        {title: 'First Name', value: employee.firstName},{title: 'Last Name', value: employee.lastName},{title: 'Mobile Number', value: employee.mobileNumber},{title: 'Email Address', value: employee.email},
        {title: 'Date of Birth', value: formatDate(employee.dateOfBirth)},{title: 'Marital Status', value: employee.maritalStatus},{title: 'Gender', value: employee.gender},{title: 'Nationality', value: employee.nationality},
        {title: 'Address', value: employee.address},{title: 'City', value: employee.city},{title: 'Province', value: employee.province},{title: 'Zip Code', value: employee.zipCode},
    ]
    const professionalInformation = [
        {title: 'Employee ID', value: employee.id},{title: 'User Name', value: employee.userName},{title: 'Employee Type', value: employee.employeeType},{title: 'Email Address', value: employee.email},
        {title: 'Department', value: departments.map((department, i) => {if (employee && department.id == employee.department){ return department.departmentName}})},{title: 'Designation', value: employee.designation},
        {title: 'Working Days', value: employee.workingDays},{title: 'Joining Date', value: formatDate(employee.joiningDate)},{title: 'Office Location', value: employee.officeLocation}
    ]
    const documentUploads = [
        {title: 'Appointment Letter', value: `/uploads/Appointment/${employee.appointment}`},
        {title: 'Salary Slips', value: `/uploads/SalarySlips/${employee.salarySlips}`},
        {title: 'Reliving Letter', value: `/uploads/Reliving/${employee.reliving}`},
        {title: 'Experience Letter', value: `/uploads/Experience/${employee.experience}`},
    ]
    const accountAccess = [
        {title: 'Email Address', value: employee.email},{title: 'WhatsApp', value: <a href={`https://wa.me/${employee.whatsApp}`} target='_blank' className='flex gap-2'><IoLogoWhatsapp /> {employee.whatsApp}</a>},
        {title: 'Instagram', value: <a href={`https://instagram/${employee.instagram}`} target='_blank' className='flex gap-2'><IoLogoInstagram /> {employee.instagram}</a>},
    ]


    return (
        <>
            <Head title="Employee" />
            <AuthenticatedLayout
                user={auth.user}
                header='Add New Employee'
                headerAlt={<Breadcrumbs>
                    <BreadcrumbItem href='/dashboard/employees'>All Employees</BreadcrumbItem>
                    <BreadcrumbItem>{employee.firstName} {employee.lastName}</BreadcrumbItem>
                </Breadcrumbs>}
            >
                <div className='h-full border p-5 rounded-xl mb-10'>
                    <div className='pb-7 flex justify-between'>
                        <div className='flex gap-4'>
                            <img src={`/uploads/Photo Profile/${employee.photoProfile ? employee.photoProfile : 'defaultAvatar.JPG'}`} className='object-cover object-center rounded-xl w-[100px] h-[100px]' alt={`Photo Profile`}/>
                            <div className='text-[#16151C] leading-9'>
                                <p className='text-xl md:text-2xl font-semibold'>{employee.firstName} {employee.lastName}</p>
                                <p className='text-sm md:text-base font-light flex items-center gap-2'><img src='/image/svg/jobsOutline.svg'/>{employee.designation}</p>
                                <p className='text-sm md:text-base font-light flex items-center gap-2'><img src='/image/svg/gmailOutline.svg'/>{employee.email}</p>
                            </div>
                        </div>
                        <div className='flex items-end'>
                            <Button className='gap-2 text-white bg-primary-500 p-2 md:p-3 rounded-xl' startContent={<CiEdit size={25}/>}>Edit Profile</Button>
                        </div>
                        
                    </div>

                    <div className='flex flex-col md:flex-row gap-7'>
                        <div className='border rounded-xl flex flex-wrap md:flex-nowrap flex-row md:flex-col h-auto md:h-56 w-auto md:w-[200px]'>
                            {sideTabs.map((tab) => (
                                <Button key={tab.id} onClick={() => setCurrentSideTab(tab.id)} className={`${tab.rounded} h-14 w-full ps-0 md:ps-5 bg-transparent transition delay-150 flex justify-center md:justify-start gap-2 ${currentSideTab === tab.id ? ' bg-primary-500 text-white ' : 'bg-transparent'}`}>
                                    <div className=''>
                                        {tab.icon}
                                    </div>
                                    <p>{tab.label}</p>
                                </Button>
                            ))}
                        </div>
                        <div className={` ${currentSideTab === 1 ? 'block' : 'hidden'}`}>
                            {/* Profile */}
                            <div className='ps-5 lg:ps-0 flex gap-20 lg:gap-5 border-b pb-2 flex-wrap'>
                                {tabs.map((tab) => (
                                    <button key={tab.id} onClick={() => setCurrentTab(tab.id)} className={`relative ${currentTab === tab.id && 'text-primary-500'}`}>
                                        <div className=''>
                                            <p className={`absolute lg:static flex gap-2 items-center ${currentTab === tab.id && 'font-semibold'} transition delay-150`}>{tab.icon} <span className='hidden lg:block'>{tab.label}</span></p>
                                            <div className={`absolute top-0 lg:top-[31px] lg:h-[3px] lg:w-full w-[150%] h-[150] transition delay-150 ${currentTab === tab.id && 'bg-primary-500'}`}></div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className='pt-7'>
                                <div className={` ${currentTab === 1 ? 'block' : 'hidden'}`}>
                                    {/* Personal Information */}
                                    <p className='pb-5 text-xl block lg:hidden font-light'>Personal Information</p>
                                    
                                    <div className='grid grid-cols-6 gap-5'>
                                        
                                        {personalInformation.map((personal, i) => (
                                            <div className="col-span-6 md:col-span-3" key={i}>
                                                <p className='text-[#A2A1A8] text-sm font-light mb-1'>{personal.title}</p>
                                                <input type="text" readOnly value={personal.value} className='focus:ring-primary-500 focus:ring-2 focus:outline-none pb-2 mb-2 border-b w-full'/>
                                            </div>
                                        )
                                        )}
                                    </div>
                                </div>

                                <div className={` ${currentTab === 2 ? 'block' : 'hidden'}`}>
                                    {/* Professional Information */}
                                    <p className='pb-5 text-xl block lg:hidden'>Professional Information</p>
                                    <div className='grid grid-cols-6 gap-5'>
                                        {professionalInformation.map((professional, i) => (
                                            <div className="col-span-6 md:col-span-3" key={i}>
                                                <p className='text-[#A2A1A8] text-sm font-light mb-1'>{professional.title}</p>
                                                <input type="text" readOnly value={professional.value} className='focus:ring-primary-500 focus:ring-2 focus:outline-none pb-2 mb-2 border-b w-full'/>
                                            </div>
                                        )
                                        )}
                                    </div>
                                </div>

                                <div className={` ${currentTab === 3 ? 'block' : 'hidden'}`}>
                                    {/* Documents */}
                                    <p className='pb-5 text-xl block lg:hidden'>Documents</p>
                                    <div className='grid grid-cols-2 gap-5'>
                                            {documentUploads.map((document, i) => (
                                                <div className='col-span-2 md:col-span-1 border flex justify-between p-4 rounded-xl' key={i}>
                                                    <p className='text-[#16151C]'>{document.title}</p>
                                                    <div className='flex gap-4 items-center'>
                                                        <div className='cursor-pointer hover:scale-125 hover:text-primary-500'>
                                                            <a href={document.value} target='_blank'>
                                                                <LuEye size={23}/>
                                                            </a>
                                                        </div>
                                                        <div className='cursor-pointer hover:scale-125 hover:text-primary-500'>
                                                            <a href={document.value} target='_blank' download={true}>
                                                                <LuDownload size={23}/>
                                                            </a>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>

                                <div className={` ${currentTab === 4 ? 'block' : 'hidden'}`}>
                                    {/* Account Access */}
                                    <p className='pb-5 text-xl block lg:hidden'>Account Access</p>
                                    <div className='grid grid-cols-6 gap-5 mt-5'>
                                        {accountAccess.map((account, i) => (
                                            <div className="col-span-6 md:col-span-3" key={i}>
                                                <p className='text-[#A2A1A8] text-sm font-light mb-1'>{account.title}</p>
                                                <p className='focus:ring-primary-500 focus:ring-2 focus:outline-none pb-2 mb-2 border-b w-full'>{account.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='flex justify-end pt-7 gap-5'>
                                    <Button className='p-2 md:p-4 rounded-xl bg-white border w-24' disabled={currentTab === 1} onClick={handlePrevTab}>Prev</Button>
                                    <Button className='text-white bg-primary-500 p-2 md:p-4 rounded-xl w-24' disabled={currentTab === 4} onClick={handleNextTab}>Next</Button>
                                </div>
                            </div>
                        </div>

                        <div className={` ${currentSideTab === 2 ? 'block' : 'hidden'} w-full md:w-[78%]`}>
                            {/* Attendance */}
                            <table className='w-full text-[#16151C]'>
                                <thead className='text-[#A2A1A8] font-light'>
                                    <tr className='border-b text-left'>
                                        <td className='py-2 pe-2'>Date</td>
                                        <td className='py-2 pe-2'>Check In</td>
                                        <td className='py-2 pe-2'>Check Out</td>
                                        <td className='py-2 pe-2'>Break</td>
                                        <td className='py-2 pe-2'>Working Hours</td>
                                        <td className='py-2 pe-2'>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-b'>
                                        <td className='py-1 pe-3'>July 01, 2023</td>
                                        <td className='py-1 pe-3'>09:28 AM</td>
                                        <td className='py-1 pe-3'>07:00 PM</td>
                                        <td className='py-1 pe-3'>00:30 Min</td>
                                        <td className='py-1 pe-3'>09:02 Hrs</td>
                                        <td className='py-1 pe-3'><span className="inline-flex items-center rounded-md bg-[#3FC28A1A] px-2 py-1 text-sm font-light text-green-500 ring-1 ring-inset ring-green-500/10">On Time</span></td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td className='py-1 pe-3'>July 04, 2023</td>
                                        <td className='py-1 pe-3'>09:45 AM</td>
                                        <td className='py-1 pe-3'>07:00 PM</td>
                                        <td className='py-1 pe-3'>00:40 Min</td>
                                        <td className='py-1 pe-3'>08:35 Hrs</td>
                                        <td className='py-1 pe-3'><span className="inline-flex items-center rounded-md bg-[#F45B691A] px-2 py-1 text-sm font-light text-[#F45B69] ring-1 ring-inset ring-green-500/10">Late</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={` ${currentSideTab === 3 ? 'block' : 'hidden'} w-full md:w-[78%]`}>
                            {/* Projects */}
                            <table className='w-full text-[#16151C]'>
                                <thead className='text-[#A2A1A8] font-light'>
                                    <tr className='border-b text-left'>
                                        <td className='py-2 pe-2'>Sr. No.</td>
                                        <td className='py-2 pe-2'>Project Name</td>
                                        <td className='py-2 pe-2'>Start Date</td>
                                        <td className='py-2 pe-2'>Finish Date</td>
                                        <td className='py-2 pe-2'>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-b'>
                                        <td className='py-1 pe-3'>1</td>
                                        <td className='py-1 pe-3'>Wildcare - Development Project</td>
                                        <td className='py-1 pe-3'>Feb 12, 2023</td>
                                        <td className='py-1 pe-3'>April 20, 2023</td>
                                        <td className='py-1 pe-3'><span className="inline-flex items-center rounded-md bg-[#3FC28A1A] px-2 py-1 text-sm font-light text-green-500 ring-1 ring-inset ring-green-500/10">Completed</span></td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td className='py-1 pe-3'>2</td>
                                        <td className='py-1 pe-3'>Hingutsan Web Development</td>
                                        <td className='py-1 pe-3'>April 05, 2023</td>
                                        <td className='py-1 pe-3'>October 05, 2023</td>
                                        <td className='py-1 pe-3'><span className="inline-flex items-center rounded-md bg-[#EFBE121A] px-2 py-1 text-sm font-light text-[#EFBE12] ring-1 ring-inset ring-green-500/10">In Process</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={` ${currentSideTab === 4 ? 'block' : 'hidden'} w-full md:w-[78%]`}>
                            {/* Leave */}
                            <table className='w-full text-[#16151C]'>
                                <thead className='text-[#A2A1A8] font-light'>
                                    <tr className='border-b text-left'>
                                        <td className='py-2 pe-2'>Date</td>
                                        <td className='py-2 pe-2'>Duration</td>
                                        <td className='py-2 pe-2'>Days</td>
                                        <td className='py-2 pe-2'>Reporting Manager</td>
                                        <td className='py-2 pe-2'>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-b'>
                                        <td className='py-1 pe-3'>July 01, 2023</td>
                                        <td className='py-1 pe-3'>July 05 - July 08</td>
                                        <td className='py-1 pe-3'>3 Days</td>
                                        <td className='py-1 pe-3'>Mark Willians</td>
                                        <td className='py-1 pe-3'><span className="inline-flex items-center rounded-md bg-[#EFBE121A] px-2 py-1 text-sm font-light text-[#EFBE12] ring-1 ring-inset ring-green-500/10">Pending</span></td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td className='py-1 pe-3'>Apr 05, 2023</td>
                                        <td className='py-1 pe-3'>Apr 06 - Apr 10</td>
                                        <td className='py-1 pe-3'>4 Days</td>
                                        <td className='py-1 pe-3'>Mark Willians</td>
                                        <td className='py-1 pe-3'><span className="inline-flex items-center rounded-md bg-[#3FC28A1A] px-2 py-1 text-sm font-light text-green-500 ring-1 ring-inset ring-green-500/10">Approved</span></td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td className='py-1 pe-3'>Jan 01, 2023</td>
                                        <td className='py-1 pe-3'>Jan 16 - Jan 19</td>
                                        <td className='py-1 pe-3'>3 Days</td>
                                        <td className='py-1 pe-3'>Mark Willians</td>
                                        <td className='py-1 pe-3'><span className="inline-flex items-center rounded-md bg-[#F45B691A] px-2 py-1 text-sm font-light text-[#F45B69] ring-1 ring-inset ring-green-500/10">Reject</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    
                </div>

            </AuthenticatedLayout>
        </>

    );
}

function formatFileSize(sizeInBytes) {
    const kilobyte = 1024;
    const megabyte = kilobyte * 1024;

    if (sizeInBytes < kilobyte) {
        return sizeInBytes + ' B';
    } else if (sizeInBytes < megabyte) {
        return (sizeInBytes / kilobyte).toFixed(2) + ' KB';
    } else {
        return (sizeInBytes / megabyte).toFixed(2) + ' MB';
    }
}

const formatDate = (inputDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options);
    return formattedDate;
};