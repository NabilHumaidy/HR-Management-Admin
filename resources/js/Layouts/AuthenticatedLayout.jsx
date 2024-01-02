import { useState } from "react";   
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Avatar } from "@nextui-org/react";
import { Link, usePage } from '@inertiajs/react';
import { SideBar } from '@/Components/SideBar';
import Navbar from '@/Components/NavBar';
import { DashboardMenu } from "@/Components/DashboardMenu";
import {NextUIProvider} from "@nextui-org/react";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
        const [ openSideBar, setOpenSideBar ] = useState(true);
    const { bodyClass } = usePage();


    // Menghapus kelas text-sans jika ada
    document.body.classList.remove('font-sans', 'antialiased');
    return (
        <>
        <div className="flex h-screen flex-col md:flex-row">
            <div className={`h-screen block fixed md:w-64 ${openSideBar ? 'block' : 'hidden'}`}>
                <SideBar />
            </div>
            <div className={`flex w-full flex-col mt-5 ${openSideBar ? 'ml-[17rem]' : ''}`}>
                <div className='flex gap-5'>
                    <div onClick={()=>setOpenSideBar(!openSideBar)} className={`hidden  cursor-pointer ${openSideBar ? '' : 'ms-5'}`}>
                        <img src='image/svg/menu-line-horizontal.svg' width={25} />
                    </div>
                    <div className='flex w-full me-5 pt-[10px] justify-between'>

                        {/* Headline Hello Start */}
                        <div>
                            <h1 className='font-bold text-[20px]'>Hello {user.name} 👋🏻</h1>
                            <p className='text-gray-500 opacity-60'>Good Morning</p>
                        </div>
                        {/* End of Headline Hello */}

                        {/* Navbar Start */}
                        <div className=''>
                            <Navbar account={user}/>
                        </div>
                        {/* Navbar End */}


                        </div>
                        
                    </div>
                    <DashboardMenu/>
                    </div></div>

        </>
    );
}
