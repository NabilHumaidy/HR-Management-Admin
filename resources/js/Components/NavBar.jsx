import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { SideBar } from './SideBar';

export default function NavBar({ user }) {
    const [ openSideBar, setOpenSideBar ] = useState(true);
    return (
        <>
                <div className={`w-screen flex-none md:w-64 ${openSideBar ? 'block' : 'hidden'}`}>
                    <SideBar />
                </div>
                <div className='flex mt-5'>
                    <div onClick={()=>setOpenSideBar(!openSideBar)} className='cursor-pointer h-10'>
                        <img src='image/svg/menu-line-horizontal.svg'/>
                    </div>
                    
                    <div>
                        <h1 className='font-bold text-[20px]'>Hello {user.name} 👋🏻</h1>
                        <p className='text-gray-500 opacity-60'>Good Morning</p>
                    </div>
                </div>
        </>
    );
}
