import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AppAttendance({auth}) {
    let user = auth.user
    return (
        <>
            <Head title="Attendance" />
            <AuthenticatedLayout
                user={auth.user}
                header='Attendance'
                headerAlt='All Employee Attendance'
            >
                
                
            </AuthenticatedLayout>
        </>
        
    );
}
