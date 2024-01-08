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
            header={`Hello ${user.userName} 👋🏻`}
            headerAlt={`Good ${getGreeting()}`}
        >
            
            <DashboardMenu/>
            
            
        </AuthenticatedLayout>
        </>
        
    );
}

const getGreeting = () => {
    const currentHour = new Date().getHours();

    if(currentHour >= 5 && currentHour < 12){
        return 'Morning'
    } else if(currentHour >= 12 && currentHour < 17){
        return 'Afternoon'
    } else {
        return 'Evening'
    }
}