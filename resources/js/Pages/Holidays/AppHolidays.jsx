import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AppHolidays({auth}) {
    let user = auth.user
    return (
        <>
            <Head title="Holidays" />
            <AuthenticatedLayout
                user={auth.user}
                header='Holidays'
                headerAlt='All Holidays Lists'
            >
                
                
            </AuthenticatedLayout>
        </>
        
    );
}
