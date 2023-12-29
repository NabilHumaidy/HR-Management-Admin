import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AppEmployees({auth}) {
    let user = auth.user
    return (
        <>
            <Head title="Employee" />
            <AuthenticatedLayout
                user={auth.user}
                header='All Employees'
                headerAlt='All Employee Information'
            >
                test
                
            </AuthenticatedLayout>
        </>
        
    );
}
