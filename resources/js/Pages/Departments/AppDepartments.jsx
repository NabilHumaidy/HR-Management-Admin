import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AppDepartments({auth}) {
    let user = auth.user
    return (
        <>
            <Head title="Candidates" />
            <AuthenticatedLayout
                user={auth.user}
                header='All Departments'
                headerAlt='All Departments Information'
            >
                
                
            </AuthenticatedLayout>
        </>
        
    );
}
