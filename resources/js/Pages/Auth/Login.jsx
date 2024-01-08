import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            
            {status && <div className=" font-medium text-sm text-green-600">{status}</div>}
            <Link href='/'>
            <ApplicationLogo  />
            </Link>
            <div className=' mt-[40px] mb-[30px]'>
            <h1 className='font-bold font-lexend text-[30px] leading-10'>Welcome 👋</h1>
            <p className='font-lexend text-base text-gray-500'>Please login here</p>
            </div>
            <form onSubmit={submit}>
            
                <div>
                
                    <InputLabel htmlFor="email" value="Email" />
            
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full rounded-md py-2 border opacity-70 outline-0"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full rounded-md opacity-70 border py-2 outline-0"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>
                {/* DIV GABUNGAN REMEMBER ME DAN FORGOT */}
                <div className='flex gap-[150px]'>

                    {/* Div Remember Me */}
                <div className=" mt-4 ">
                    
                    <label className="flex  items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm  text-gray-600">Remember me</span>
                        
                        
                    
                    </label>
                </div>

                {/* End Div Remember Me */}

                {/* Div Forgot Password */}
                <div className='mt-3 '>
                {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className=" text-sm text-primary-600 no-underline hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot password?
                        </Link>
                    )}
                </div>
                {/* End Div Forgot Pass */}

                </div>
                {/* End Div Gabungan */}


                <div className="flex flex-col items-center justify-end mt-4">
                   

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
