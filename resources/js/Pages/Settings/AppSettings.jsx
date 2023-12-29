import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AppSettings({auth}) {
    let user = auth.user
    return (
        <AuthenticatedLayout
            user={auth.user}
            header='Settings'
            headerAlt='All System Settings'
        >
            <Head title="Settings" />
            
            
        </AuthenticatedLayout>
    );
}
