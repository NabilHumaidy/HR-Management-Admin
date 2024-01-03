import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {NextUIProvider} from "@nextui-org/react";
import { Calendar } from "@/Components/ui/calendar"
import { LucideCalendar } from 'lucide-react';


export function CalendarDemo() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
const DashboardMenu = () => {
 

  return (
    <>
    <div className='grid grid-cols-3  '>

        {/* Employee */}
    <div className=' pt-[40px] pl-[30px] pr-[30px]'>
     <div className='border rounded-md w-[313px] h-[154px] pt-[16px]  shadow-md'>
                <div className='container flex items-center pl-[16px] gap-[10px]'>
                    <div className='bg-gray-100 rounded-md w-[40px] h-[40px] flex items-center justify-center'>
                    <img src="image/svg/employeesSolid.svg" alt="" className='w-[20px] h-[20px]'/>
                    
                    </div>
                    <h3 className='text-[14px]'>Total Employee</h3>
                </div>
                <div className='flex items-center pt-[10px] gap-[172px] pl-[16px] '>
                    <h1 className='text-[30px] font-bold'>560</h1>
                    <div className='flex bg-green-100 w-[54px] h-[26px] rounded-md justify-center  items-center pr-'>
                        <img src="image/svg/up-arrow.svg" alt="" />
                    <p className='text-[11px] text-1 '>12%</p>
                    
                    </div>
                    
                </div>
                <div className='w-full pl-0  pt-[10px]'>
                <hr  />
                <p className='flex text-[12px] items-center text-gray-500 opacity-60 pt-[6px] pl-[16px]'>Updated 16 Des 2023</p>
                </div>
            </div>
            {/* End of Employee */}

            {/* Today Attendance */}
            <div className='pt-[20px]'>
            <div className='border rounded-md w-[313px] h-[154px] pt-[16px]  shadow-md'>
                <div className='container flex items-center pl-[16px] gap-[10px]'>
                    <div className='bg-gray-100 rounded-md w-[40px] h-[40px] flex items-center justify-center'>
                    <img src="image/svg/employeesSolid.svg" alt="" className='w-[20px] h-[20px]'/>
                    
                    </div>
                    <h3 className='text-[14px]'>Total Employee</h3>
                </div>
                <div className='flex items-center pt-[10px] gap-[172px] pl-[16px] '>
                    <h1 className='text-[30px] font-bold'>560</h1>
                    <div className='flex bg-green-100 w-[54px] h-[26px] rounded-md justify-center  items-center pr-'>
                        <img src="image/svg/up-arrow.svg" alt="" />
                    <p className='text-[11px] text-1 '>12%</p>
                    
                    </div>
                    
                </div>
                <div className='w-full pl-0  pt-[10px]'>
                <hr  />
                <p className='flex text-[12px] items-center text-gray-500 opacity-60 pt-[6px] pl-[16px]'>Updated 16 Des 2023</p>
                </div>
            </div>
            </div>
            {/* End of Total Aplicant */}

            </div>
            

            {/* Aplicant */}
    <div className=' pt-[40px] pl-[30px]'>
     <div className='border rounded-md w-[313px] h-[154px] pt-[16px]  shadow-md'>
                <div className='container flex items-center pl-[16px] gap-[10px]'>
                    <div className='bg-gray-100 rounded-md w-[40px] h-[40px] flex items-center justify-center'>
                    <img src="image/svg/employeesSolid.svg" alt="" className='w-[20px] h-[20px]'/>
                    
                    </div>
                    <h3 className='text-[14px]'>Total Aplicant</h3>
                </div>
                <div className='flex items-center pt-[10px] gap-[172px] pl-[16px] '>
                    <h1 className='text-[30px] font-bold'>1050</h1>
                    <div className='flex bg-green-100 w-[54px] h-[26px] rounded-md justify-center  items-center pr-'>
                        <img src="image/svg/up-arrow.svg" alt="" />
                    <p className='text-[11px] text-1 '>5%</p>
                    
                    </div>
                    
                </div>
                <div className='w-full pl-0  pt-[10px]'>
                <hr  />
                <p className='flex text-[12px] items-center text-gray-500 opacity-60 pt-[6px] pl-[16px]'>Updated 16 Des 2023</p>
                </div>
            </div>
            {/* End of Aplicant */}

            {/* Total Project */}
            <div className='pt-[20px]'>
            <div className='border rounded-md w-[313px] h-[154px] pt-[16px]  shadow-md'>
                <div className='container flex items-center pl-[16px] gap-[10px]'>
                    <div className='bg-gray-100 rounded-md w-[40px] h-[40px] flex items-center justify-center'>
                    <img src="image/svg/employeesSolid.svg" alt="" className='w-[20px] h-[20px]'/>
                    
                    </div>
                    <h3 className='text-[14px]'>Total Employee</h3>
                </div>
                <div className='flex items-center pt-[10px] gap-[172px] pl-[16px] '>
                    <h1 className='text-[30px] font-bold'>560</h1>
                    <div className='flex bg-green-100 w-[54px] h-[26px] rounded-md justify-center  items-center pr-'>
                        <img src="image/svg/up-arrow.svg" alt="" />
                    <p className='text-[11px] text-1 '>12%</p>
                    
                    </div>
                    
                </div>
                <div className='w-full pl-0  pt-[10px]'>
                <hr  />
                <p className='flex text-[12px] items-center text-gray-500 opacity-60 pt-[6px] pl-[16px]'>Updated 16 Des 2023</p>
                </div>
            </div>
            </div>
            {/* End of Total Project */}

            </div>
            
            <div className='border rounded-lg mt-[40px] max-w-[300px]'>
                <div className='flex items-center '>
                <h1 className='text-[20px] font-bold pt-[20px] pl-[20px]'>My Schedule</h1>
                
                </div>
            <Calendar/>
            </div>

            
            </div>
            
    </>
    )
}


}
export default DashboardMenu   












{/* <div className='border rounded-md w-[313px] h-[154px] pt-[16px] pl-[16px] shadow-md'>
                <div className='container flex items-center gap-[10px]'>
                    <div className='bg-gray-100 rounded-md w-[40px] h-[40px] flex items-center justify-center'>
                    <img src="image/svg/employeesSolid.svg" alt="" className='w-[20px] h-[20px]'/>
                    
                    </div>
                    <h3 className='text-[14px]'>Total Employee</h3>
                </div>
                <div className='flex items-center pt-[10px] gap-[172px] '>
                    <h1 className='text-[30px] font-bold'>560</h1>
                    <div className='flex bg-green-100 w-[54px] h-[26px] rounded-md justify-center  items-center pr-'>
                        <img src="image/svg/up-arrow.svg" alt="" />
                    <p className='text-[11px] text-1 '>12%</p>
                    </div>
                    
                </div>
            </div> */}
