import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { SideBar } from '@/Components/SideBar';
import Navbar from '@/Components/NavBar';
import { HiBars3, HiXMark } from "react-icons/hi2";

export default function Authenticated({ user, header, headerAlt,children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [ openSideBar, setOpenSideBar ] = useState(true);
    const { bodyClass } = usePage();

    // Menghapus kelas text-sans jika ada
    document.body.classList.remove('font-sans', 'antialiased');
    return (
        <>
            <div className="flex h-screen flex-col md:flex-row">
                <div className={`h-screen fixed md:w-64 ${openSideBar ? 'block' : 'hidden'}`}>
                    <SideBar />
                </div>
                <div className={`flex w-full flex-col mt-5 ${openSideBar ? 'ml-[17rem]' : ''}`}>
                    <div className='flex gap-5'>
                        <div onClick={()=>setOpenSideBar(!openSideBar)} className={`cursor-pointer ${openSideBar ? '' : 'ms-5'}`}>
                            {openSideBar? <HiXMark  size={30}/> : <HiBars3 size={30}/>}
                        </div>
                        <div className='flex w-full me-5 justify-between'>
                            <div>
                                <h1 className='font-bold text-[20px]'>{header}</h1>
                                <p className='text-gray-500 opacity-60'>{headerAlt}</p>
                            </div>
                            <div className=''>
                                <Navbar account={user}/>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>
                    
                </div>
            </div>
            
        </>
    );
}
