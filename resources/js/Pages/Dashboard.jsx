import DashboardMenu from '@/Components/DashboardMenu';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({auth}) {
    let user = auth.user
    return (
        <>
            <Head title="Dashboard" />
            <AuthenticatedLayout
            user={auth.user}
            header={`Hello ${user.name} 👋🏻`}
            headerAlt='Good Morning'
        >
            
            
            <DashboardMenu/>
            
            
        </AuthenticatedLayout>
        </>
        
    );
}
