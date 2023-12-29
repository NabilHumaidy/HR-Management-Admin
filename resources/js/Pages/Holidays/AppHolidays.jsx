import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AppHolidays({auth}) {
    let user = auth.user
    return (
        <AuthenticatedLayout
            user={auth.user}
            header='Holidays'
            headerAlt='All Holidays Lists'
        >
            <Head title="Holidays" />
            
            
        </AuthenticatedLayout>
    );
}
