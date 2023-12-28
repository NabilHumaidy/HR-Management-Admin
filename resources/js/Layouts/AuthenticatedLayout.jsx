import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { SideBar } from '@/Components/SideBar';
import NavBar from '@/Components/NavBar';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [ openSideBar, setOpenSideBar ] = useState(true);
    const { bodyClass } = usePage();

    // Menghapus kelas text-sans jika ada
    document.body.classList.remove('font-sans', 'antialiased');
    return (
        <>
            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                <div className={`w-screen flex-none md:w-64 ${openSideBar ? 'block' : 'hidden'}`}>
                    <SideBar />
                </div>
                <div className='flex flex-col mt-5'>
                    <div className='flex gap-5'>
                        <div onClick={()=>setOpenSideBar(!openSideBar)} className={`cursor-pointer ${openSideBar ? '' : 'ms-5'}`}>
                            <img src='image/svg/menu-line-horizontal.svg' width={25}/>
                        </div>
                        
                        <div>
                            <h1 className='font-bold text-[20px]'>Hello {user.name} 👋🏻</h1>
                            <p className='text-gray-500 opacity-60'>Good Morning</p>
                      </div>
                    </div>
                    <div>
                        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
                    </div>
                    
                </div>
            </div>
            
        </>
    );
}
