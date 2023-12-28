import React from 'react'
import { Link } from '@inertiajs/react'
import NavLink from './NavLink'

export const SideBar = () => {
    return (
        <>
            <div className="flex h-full flex-col px-3 py-4 md:px-3 md:py-3">
                <Link className="flex items-end justify-start rounded-tr-md rounded-tl-md bg-[#A2A1A80D] p-6" href="/">
                    <div className="w-32 text-white md:w-40 flex items-center gap-1">
                        <div className='bg-[#8D75F5] flex justify-center items-center w-10 rounded-full'>
                            <img src='/image/svg/meta-logo.svg' className='w-6 h-10'/>
                        </div>
                        <p className='text-black text-2xl font-medium'>HRMS</p>
                    </div>
                </Link>
                <div className="flex grow flex-row justify-between md:flex-col overflow-auto">
                    <div className="hidden h-auto w-full grow bg-[#A2A1A80D] md:block">
                        <div className='flex justify-center flex-col gap-2'>
                            <NavLink />
                        </div>
                    </div>
                    <div className='flex justify-center rounded-br-md rounded-bl-md bg-[#A2A1A80D]'>
                        <label htmlFor="Toggle3" className="inline-flex items-center rounded-lg cursor-pointer bg-[#A2A1A80D]">
                            <input id="Toggle3" type="checkbox" className="hidden peer" />
                            <span className="px-4 py-2 rounded-lg bg-primary-500 peer-checked:bg-[#A2A1A80D] flex gap-2"><object data='image/svg/lightOutline.svg' className='stroke-white'/>Light</span>
                            <span className="px-4 py-2 rounded-lg bg-[#A2A1A80D] peer-checked:bg-primary-500 flex gap-2"><img src='image/svg/darkOutline.svg'/>Dark</span>
                        </label>
                    </div>

                </div>
            </div>
        </>
    )
}
