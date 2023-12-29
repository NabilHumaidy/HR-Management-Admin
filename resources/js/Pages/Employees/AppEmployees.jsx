import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AppEmployees({auth}) {
    let user = auth.user
    return (
        <AuthenticatedLayout
            user={auth.user}
            header='All Employees'
            headerAlt='All Employee Information'
        >
            <Head title="Employee" />
            Test
            
        </AuthenticatedLayout>
    );
}
