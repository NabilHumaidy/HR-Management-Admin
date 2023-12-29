import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AppJobs({auth}) {
    let user = auth.user
    return (
        <AuthenticatedLayout
            user={auth.user}
            header='Jobs'
            headerAlt='Show All Jobs'
        >
            <Head title="Jobs" />
            
            
        </AuthenticatedLayout>
    );
}
