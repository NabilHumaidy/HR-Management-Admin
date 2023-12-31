import React, { useState, useEffect } from 'react'
import { Link } from '@inertiajs/react';
import { Avatar } from '@nextui-org/react';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
export default function Navbar(account) {
    let user = account.account;
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Memperbarui waktu setiap detik
        const intervalID = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(intervalID)
    }, [])

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    return (
        <>
            <div className="hidden md:flex sm:items-center items-center sm:ms-6 pr-[30px]">
                <div className='p-2'>
                    <h1 className='text-primary-500 text-lg'>{`${hours}:${minutes}:${seconds}`}</h1>
                </div>
                <div className='inline-flex rounded-lg border'>
                    <img src="/image/svg/search.svg" alt="" className='pl-[10px]' />
                    <input type="text" placeholder="Search" className='border-0 rounded-md opacity-40 border-transparent focus:border-transparent focus:ring-0' />
                </div>
                <div className="ms-3 relative flex gap-[20px] items-center">
                    <div className='flex w-[50px] h-[50px] bg-gray-100 rounded-md items-center justify-center'>
                        <img src="/image/svg/notification.svg" alt="" className='flex h-6  items-center justify-center ' />
                    </div>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-lg border border-[#A2A1A833] p-1">
                                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className='rounded-md' />
                                <button
                                    type="button"
                                    className="inline-flex items-center  border border-transparent  leading-4 font-medium rounded-md text-base bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                >   
                                <div className='flex flex-col'>
                                    {user.firstName} {user.lastName}
                                    <div className='text-[#A2A1A8] font-light text-xs pt-1 ps-2'>
                                    {user.designation}
                                    </div>
                                    </div>
                                    <svg
                                        className="ms-2 -me-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <Dropdown.Link href={route('profile.edit')} className='flex gap-2'>
                                <img src="/image/svg/profile.svg" alt="" />
                                My Profile
                                </Dropdown.Link>
                            <Dropdown.Link href={route('logout')} method="post" as="button" className='flex text-red-600 gap-2' >
                            <img src="/image/svg/logout.svg" alt="" />
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
                
            </div>
        </>
        
    )
}