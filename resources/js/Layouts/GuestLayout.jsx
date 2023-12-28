import ApplicationLogo from '@/Components/ApplicationLogo';
import LoginImage from '@/Components/LoginImage';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className=" flex gap-[50px]  sm:justify-center justify-center  items-center  sm:pt-0 ">
            <div className='flex  items-center justify-end rounded-md'>

                <LoginImage className="mb-[40px]"/>
                
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
