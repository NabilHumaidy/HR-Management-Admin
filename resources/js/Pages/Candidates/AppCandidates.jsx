import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AppCandidates({auth}) {
    let user = auth.user
    return (
        <AuthenticatedLayout
            user={auth.user}
            header='Candidates'
            headerAlt='Show All Candidates'
        >
            <Head title="Candidates" />
            
            
        </AuthenticatedLayout>
    );
}
