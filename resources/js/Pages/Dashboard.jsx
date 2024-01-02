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
            
            {/* <div className='absolute bg-zinc-400 bg-opacity-20 backdrop-blur-[10px] h-screen w-screen top-0 left-0'>
                
            </div> */}
            
        </AuthenticatedLayout>
        </>
        
    );
}
