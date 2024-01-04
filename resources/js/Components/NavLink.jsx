import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function NavLink() {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [delayedLink, setDelayedLink] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredLink(index);
        clearTimeout(delayedLink);
    };

    const handleMouseLeave = (index) => {
        const timeoutId = setTimeout(() => {
            setHoveredLink(null);
        }, 200);
        setDelayedLink(timeoutId);
    };
    const sideLink = [
        {title: 'Dashboard', logoOutline: 'dashboardOutline.svg', logoSolid:'dashboardSolid.svg', location: '/dashboard', route: 'dashboard'},
        {title: 'All Employees', logoOutline: 'employeesOutline.svg', logoSolid:'employeesSolid.svg', location: '/dashboard/employees', route: 'employees'},
        {title: 'All Departments', logoOutline: 'departmentsOutline.svg', logoSolid:'departmentsSolid.svg', location: '/dashboard/departments', route: 'departments'},
        {title: 'Attendance', logoOutline: 'attendanceOutline.svg', logoSolid:'attendanceSolid.svg', location: '/dashboard/attendance', route: 'attendance'},
        {title: 'Payroll', logoOutline: 'payrollOutline.svg', logoSolid:'payrollSolid.svg', location: '/dashboard/payroll', route: 'payroll'},
        {title: 'Jobs', logoOutline: 'jobsOutline.svg', logoSolid:'jobsSolid.svg', location: '/dashboard/jobs', route: 'jobs'},
        {title: 'Candidates', logoOutline: 'candidatesOutline.svg', logoSolid:'candidatesSolid.svg', location: '/dashboard/candidates', route: 'candidates'},
        {title: 'Leaves', logoOutline: 'leavesOutline.svg', logoSolid:'leavesSolid.svg', location: '/dashboard/leaves', route: 'leaves'},
        {title: 'Holidays', logoOutline: 'holidayOutline.svg', logoSolid:'holidaySolid.svg', location: '/dashboard/holidays', route: 'holidays'},
        {title: 'Settings', logoOutline: 'settingOutline.svg', logoSolid:'settingSolid.svg', location: '/dashboard/settings', route: 'settings'},
    ];
    return (
        <>
            {sideLink.map((link, i) => {
                return(
                    <Link href={link.location} key={i} className={'transition-all flex mx-6 ps-3 py-2 gap-4 items-center hover:font-semibold hover:border-l-4 border-primary-500 hover:text-primary-500 hover:bg-[#7152F30D] rounded-br-xl rounded-tr-xl ' + (route().current(link.route) && ' font-semibold border-l-4 text-primary-500 bg-[#7152F30D]')} onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={() => handleMouseLeave(i)}>
                    <img src={`/image/svg/${hoveredLink === i ? link.logoSolid : route().current(link.route) ? link.logoSolid : link.logoOutline}`} className=''/>
                    <p className='text-xs xl:text-sm'>{link.title}</p>
                </Link>
                );
                
            })}
            
        </>
    );
}