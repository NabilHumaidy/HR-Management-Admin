import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AppPayroll({auth}) {
    let user = auth.user
    return (
        <>
            <Head title="Payroll" />
            <AuthenticatedLayout
                user={auth.user}
                header='Payroll'
                headerAlt='All Employee Payroll'
            >
                
                
            </AuthenticatedLayout>
        </>
        
    );
}
