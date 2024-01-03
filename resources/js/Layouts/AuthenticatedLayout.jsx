import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { SideBar } from '@/Components/SideBar';
import Navbar from '@/Components/NavBar';
export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [ openSideBar, setOpenSideBar ] = useState(true);
    const { bodyClass } = usePage();

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
                            <img src='image/svg/menu-line-horizontal.svg' width={25}/>
                        </div>
                        <div className='flex w-full me-5 justify-between'>
                            <div>
                                <h1 className='font-bold text-[20px]'>Hello {user.name} 👋🏻</h1>
                                <p className='text-gray-500 opacity-60'>Good Morning</p>
                            </div>
                            <div className=''>
                                <Navbar account={user}/>
                            </div>

                            </div>
                            </div>
                            <div>
                        <div className="flex-grow p-5 md:overflow-y-auto ">{children}</div>
                    </div>

                </div>
                </div>

</>
);
}