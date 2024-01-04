import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage, router, useForm } from '@inertiajs/react';
import { HiOutlinePlusCircle, HiUser, HiBriefcase, HiDocumentText, HiLockClosed, HiOutlineCamera } from "react-icons/hi2";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { Button, Pagination, Badge, Avatar, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { useState, useRef } from 'react';

export default function AppEmployees({auth, errors, departments}) {
    let user = auth.user
    const [currentTab, setCurrentTab] = useState(1);
    const { props } = usePage();
    const appointmentFileRef = useRef(null);
    const salarySlipsFileRef = useRef(null);
    const relivingFileRef = useRef(null);
    const experienceFileRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    function appointmentSelectFile(){
        appointmentFileRef.current.click();
    }
    function salarySlipsSelectFile(){
        salarySlipsFileRef.current.click();
    }
    function relivingSelectFile(){
        relivingFileRef.current.click();
    }
    function experienceSelectFile(){
        experienceFileRef.current.click();
    }

    function appointmentOnFile(event){
        appointmentFileRef.current.click();
    }
    function salarySlipsOnFile(event){
        salarySlipsFileRef.current.click();
    }
    function relivingOnFile(event){
        relivingFileRef.current.click();
    }
    function experienceOnFile(event){
        experienceFileRef.current.click();
    }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [userName, setUserName] = useState('');
    const [employeeType, setEmployeeType] = useState('');
    const [department, setDepartment] = useState('');
    const [designation, setDesignation] = useState('');
    const [workingDays, setWorkingDays] = useState('');
    const [joiningDate, setJoiningDate] = useState('');
    const [officeLocation, setOfficeLocation] = useState('');
    const [appointment, setAppointment] = useState('');
    const [salarySlips, setSalarySlips] = useState('');
    const [reliving, setReliving] = useState('');
    const [experience, setExperience] = useState('');

    const documentUploads = [
        {name: "Appointment Letter", ref: appointmentFileRef, fileChoose: appointmentSelectFile, getState: appointment, setState: setAppointment},
        {name: "Salary Slips Letter", ref: salarySlipsFileRef, fileChoose: salarySlipsSelectFile, getState: salarySlips, setState: setSalarySlips},
        {name: "Reliving Letter", ref: relivingFileRef, fileChoose: relivingSelectFile, getState: reliving, setState: setReliving},
        {name: "Experience Letter", ref: experienceFileRef, fileChoose: experienceSelectFile, getState: experience, setState: setExperience},
    ]

    const { data, setData } = useForm({
        firstName: '',
    });

    const handleSubmit = () => {
        const formData = {
            firstName: firstName,
            lastName: lastName,
            mobileNumber: mobileNumber,
            emailAddress: emailAddress,
            dateOfBirth: dateOfBirth,
            maritalStatus: maritalStatus,
            gender: gender,
            nationality: nationality,
            address: address,
            city: city,
            province: province,
            zipCode: zipCode,
            userName: userName,
            employeeType: employeeType,
            department: department,
            designation: designation,
            workingDays: workingDays,
            joiningDate: joiningDate,
            officeLocation: officeLocation,
            appointment: appointment,
            salarySlips: salarySlips,
            reliving: reliving,
            experience: experience,
        };
    
        setData(formData);
    
        router.post('/dashboard/departments/add', formData);
        setFirstName('');
    }

    console.log(props)


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
                <div className='h-full border p-5 rounded-xl mb-10'>
                    <div className='ps-5 lg:ps-0 flex gap-20 lg:gap-5 border-b pb-2 flex-wrap'>
                        {tabs.map((tab) => (
                            <button key={tab.id} onClick={() => setCurrentTab(tab.id)} className={`relative ${currentTab === tab.id && 'text-primary-500'}`}>
                                <div className=''>
                                    <p className={`absolute lg:static flex gap-2 items-center ${currentTab === tab.id && 'font-semibold'} transition delay-150`}>{tab.icon} <span className='hidden lg:block'>{tab.label}</span><Badge size='lg' content="5" color="danger"></Badge></p>
                                    <div className={`absolute top-0 lg:top-[31px] lg:h-[3px] lg:w-full w-[150%] h-[150] transition delay-150 ${currentTab === tab.id && 'bg-primary-500'}`}></div>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className='pt-7'>
                        <div className={` ${currentTab === 1 ? 'block' : 'hidden'}`}>
                            {/* Personal Information */}
                            <p className='pb-5 text-xl block lg:hidden'>Personal Information</p>
                            <div className='w-[100px] h-[100px] bg-[#A2A1A80D] rounded-xl border flex justify-center items-center'>
                                <HiOutlineCamera size={30} />
                            </div>
                            <div className='grid grid-cols-6 gap-5 mt-5'>
                                <div className="bg-white col-span-6 md:col-span-3">
                                    <div className="relative bg-inherit">
                                        <input type="text" id="firstName" name="firstName" onChange={(firstName) => setFirstName(firstName.target.value)} value={firstName} placeholder="First Name" className="w-full border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none"/>
                                        <label for="firstName" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">First Name</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.firstName}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-6 md:col-span-3">
                                    <div className="relative bg-inherit">
                                        <input type="text" id="lastName" name="lastName" onChange={(lastName) => setLastName(lastName.target.value)} value={lastName} placeholder="Last Name" className="w-full border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none"/>
                                        <label for="lastName" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">Last Name</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.lastName}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-6 md:col-span-3">
                                    <div className="relative bg-inherit">
                                        <input type="text" id="mobileNumber" name="mobileNumber" onChange={(mobileNumber) => setMobileNumber(mobileNumber.target.value)} value={mobileNumber} placeholder="Mobile Number" className="w-full border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none"/>
                                        <label for="mobileNumber" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">Mobile Number</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.mobileNumber}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-6 md:col-span-3">
                                    <div className="relative bg-inherit">
                                        <input type="text" id="emailAddress" name="emailAddress" onChange={(emailAddress) => setEmailAddress(emailAddress.target.value)} value={emailAddress} placeholder="Email Address" className="w-full border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none"/>
                                        <label for="emailAddress" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">Email Address</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.emailAddress}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-6 md:col-span-3">
                                    <div className="relative bg-inherit">
                                        <input type="date" id="dateOfBirth" name="dateOfBirth" onChange={(dateOfBirth) => setDateOfBirth(dateOfBirth.target.value)} value={dateOfBirth} placeholder="Date of Birth" className="w-full border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none"/>
                                        <label for="dateOfBirth" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">Date of Birth</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.dateOfBirth}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-6 md:col-span-3">
                                    <div className="relative bg-inherit">
                                        <select id="maritalStatus" name="maritalStatus" onChange={(maritalStatus) => setMaritalStatus(maritalStatus.target.value)} value={maritalStatus} placeholder="Marital Status" className="w-full h-[3.60rem] border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none">
                                            <option>Marital Status</option>
                                            <option value="Married">Married</option>
                                            <option value="Divorced">Divorced</option>
                                            <option value="Widowed">Widowed</option>
                                            <option value="Remarried">Remarried</option>
                                        </select>
                                        <label for="maritalStatus" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">Marital Status</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.maritalStatus}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-6 md:col-span-3">
                                    <div className="relative bg-inherit">
                                        <select id="gender" name="gender" onChange={(gender) => setGender(gender.target.value)} value={gender} placeholder="Gender" className="w-full h-[3.60rem] border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none">
                                            <option>Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Mental Ilness">Mental Ilness</option>
                                        </select>
                                        <label for="gender" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">Gender</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.gender}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-6 md:col-span-3">
                                    <div className="relative bg-inherit">
                                        <select id="nationality" name="nationality" onChange={(nationality) => setNationality(nationality.target.value)} value={nationality} placeholder="nationality" className="w-full h-[3.60rem] border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none">
                                            <option>Nationality</option>
                                            <option value="Indonesian">Indonesian</option>
                                            <option value="Foreign">Foreign</option>
                                            <option value="Alien">Alien</option>
                                        </select>
                                        <label for="nationality" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">Nationality</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.nationality}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-6">
                                    <div className="relative bg-inherit">
                                        <input type="text" id="address" name="address" onChange={(address) => setAddress(address.target.value)} value={address} placeholder="Address" className="w-full border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none"/>
                                        <label for="address" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">Address</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.address}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-2">
                                    <div className="relative bg-inherit">
                                        <input type="text" id="city" name="city" onChange={(city) => setCity(city.target.value)} value={city} placeholder="City" className="w-full border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none"/>
                                        <label for="city" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">City</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.city}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-2">
                                    <div className="relative bg-inherit">
                                        <input type="text" id="province" name="province" onChange={(province) => setProvince(province.target.value)} value={province} placeholder="Province" className="w-full border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none"/>
                                        <label for="province" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">Province</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.province}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-2">
                                    <div className="relative bg-inherit">
                                        <input type="text" id="zipCode" name="zipCode" onChange={(zipCode) => setZipCode(zipCode.target.value)} value={zipCode} placeholder="Zip Code" className="w-full border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none"/>
                                        <label for="zipCode" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">Zip Code</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.zipCode}</p> : ''
                                    }
                                </div>
                            </div>
                        </div>

                        <div className={` ${currentTab === 2 ? 'block' : 'hidden'}`}>
                            {/* Professional Information */}
                            <p className='pb-5 text-xl block lg:hidden'>Professional Information</p>
                            <div className='grid grid-cols-6 gap-5 mt-5'>
                                <div className="bg-white col-span-6 md:col-span-3">
                                    <div className="relative bg-inherit">
                                        <input type="text" id="userName" name="userName" onChange={(userName) => setUserName(userName.target.value)} value={userName} placeholder="User Name" className="w-full border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none"/>
                                        <label for="userName" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">User Name</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.userName}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-6 md:col-span-3">
                                    <div className="relative bg-inherit">
                                        <select id="employeeType" name="employeeType" onChange={(employeeType) => setEmployeeType(employeeType.target.value)} value={employeeType} placeholder="Department" className="w-full h-[3.60rem] border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none">
                                            <option>Select Employee Type</option>
                                            <option value="Office">Office</option>
                                            <option value="Remote">Remote</option>
                                        </select>
                                        <label for="employeeType" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">Employee Type</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.employeeType}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-6 md:col-span-3">
                                    <div className="relative bg-inherit">
                                        <input type="text" id="emailAddress" name="emailAddress" value={emailAddress} placeholder="Email Address" className="w-full border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none" disabled/>
                                        <label for="emailAddress" className="bg-[#fafafa] absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">Email Address</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.emailAddress}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-6 md:col-span-3">
                                    <div className="relative bg-inherit">
                                        <select id="department" name="department" onChange={(department) => setDepartment(department.target.value)} value={department} placeholder="Employee Type" className="w-full h-[3.60rem] border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none">
                                            <option>Select Department</option>
                                            {departments && departments.map((depart, i) => (
                                                <option key={i} value={depart.departmentName}>{depart.departmentName}</option>
                                                )
                                            )}
                                        </select>
                                        <label for="department" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">Department</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.department}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-6 md:col-span-3">
                                    <div className="relative bg-inherit">
                                        <input type="text" id="designation" name="designation" onChange={(designation) => setDesignation(designation.target.value)} value={designation} placeholder="Enter Designation" className="w-full border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none"/>
                                        <label for="designation" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">Enter Designation</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.designation}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-6 md:col-span-3">
                                    <div className="relative bg-inherit">
                                        <select id="workingDays" name="workingDays" onChange={(workingDays) => setWorkingDays(workingDays.target.value)} value={workingDays} placeholder="Working Days" className="w-full h-[3.60rem] border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none">
                                            <option>Select Working Days</option>
                                            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                                                <option key={day} value={`${day} Days`}>{day} Days</option>
                                            ))}
                                        </select>
                                        <label for="workingDays" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">Working Days</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.workingDays}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-6 md:col-span-3">
                                    <div className="relative bg-inherit">
                                        <input type="date" id="joiningDate" name="joiningDate" onChange={(joiningDate) => setJoiningDate(joiningDate.target.value)} value={joiningDate} placeholder="Joining Date" className="w-full border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none"/>
                                        <label for="joiningDate" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">Joining Date</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.joiningDate}</p> : ''
                                    }
                                </div>
                                <div className="bg-white col-span-6">
                                    <div className="relative bg-inherit">
                                        <select id="officeLocation" name="officeLocation" onChange={(officeLocation) => setOfficeLocation(officeLocation.target.value)} value={officeLocation} placeholder="Office Location" className="w-full h-[3.60rem] border-0 p-4 peer text-gray-900 rounded-md placeholder-transparent ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 focus:outline-none">
                                            <option>Select Office Location</option>
                                            <option value="Jl. Bungur No.130, Darwo Timur, Gebang, Kec. Patrang, Kabupaten Jember, Jawa Timur 68131">Jl. Bungur No.130, Darwo Timur, Gebang, Kec. Patrang, Kabupaten Jember, Jawa Timur 68131 (mascitra.com | Konsultan IT)</option>
                                            <option value="Jl. Manggar No.18, Darwo Barat, Gebang, Kec. Patrang, Kabupaten Jember, Jawa Timur 68117">Jl. Manggar No.18, Darwo Barat, Gebang, Kec. Patrang, Kabupaten Jember, Jawa Timur 68117 (Service Komputer)</option>
                                        </select>
                                        <label for="officeLocation" className="absolute cursor-text left-4 -top-3 text-sm text-[#A2A1A8CC] bg-inherit peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-primary-500 peer-focus:text-sm transition-all">Office Location</label>
                                    </div>
                                    {
                                        errors ? <p className='text-sm text-red-500'>{errors.officeLocation}</p> : ''
                                    }
                                </div>
                            </div>
                        </div>

                        <div className={` ${currentTab === 3 ? 'block' : 'hidden'}`}>
                            {/* Documents */}
                            <p className='pb-5 text-xl block lg:hidden'>Documents</p>
                            <div className='grid grid-cols-2 gap-5 mt-5'>
                            {documentUploads.map((document, i) => {
                                let name = document.name;
                                let ref = document.ref;
                                let fileChoose = document.fileChoose;
                                let getState = document.getState;
                                let setState = document.setState;

                                return (
                                    <div key={i} className="col-span-2 md:col-span-1 text-dark">
                                        <p className='font-light text-lg mb-4'>{name} Letter</p>
                                        <div className='flex flex-col items-center p-5 border rounded-xl border-dashed border-primary-500'>
                                            <div className='bg-primary-500 p-5 rounded-full mb-3'>
                                                <img src="/image/svg/upload.svg" alt="Upload Logo" />
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <input type="file" className='' id={getState} name={getState} ref={ref} onChange={(getState) => setState(getState.target.value)} />
                                                {isDragging ? (
                                                    <p className='leading-snug'>Drop Image Here <span onClick={fileChoose} role='button' className='text-primary-500 cursor-pointer'>choose file</span> to upload</p>
                                                ) : (
                                                    <p className='leading-snug'>Drag & Drop or <span onClick={fileChoose} role='button' className='text-primary-500 cursor-pointer'>choose file</span> to upload</p>
                                                ) }
                                                
                                            </div>
                                            <p className='text-[#A2A1A8] text-sm pt-1'>Supported formats : Jpeg, pdf</p>
                                        </div>
                                    </div>
                                );
                            })}
                                
                                
                            </div>
                        </div>

                        <div className={` ${currentTab === 4 ? 'block' : 'hidden'}`}>
                            {/* Account Access */}
                            <p className='pb-5 text-xl block lg:hidden'>Account Access</p>
                        </div>

                        <div className='flex justify-end pt-7 gap-5'>
                            
                            {currentTab === 1 ? <Link href='/dashboard/employees'><Button className='p-2 md:p-4 rounded-xl bg-white border w-24'>Cancel</Button></Link>  : <Button className='p-2 md:p-4 rounded-xl bg-white border w-24' onClick={handlePrevTab}>Prev</Button>}
                            {currentTab === 4 ? <Button className='text-white bg-primary-500 p-2 md:p-4 rounded-xl w-24'>Add</Button> : <Button className='text-white bg-primary-500 p-2 md:p-4 rounded-xl w-24' onClick={handleNextTab}>Next</Button>}
                            
                        </div>
                    </div>
                </div>
                
            </AuthenticatedLayout>
        </>
        
    );
}