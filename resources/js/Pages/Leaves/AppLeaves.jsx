import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AppLeaves({auth}) {
    let user = auth.user
    return (
        <AuthenticatedLayout
            user={auth.user}
            header='Leaves'
            headerAlt='Show All Leaves'
        >
            <Head title="Leaves" />
            
            
        </AuthenticatedLayout>
    );
}
