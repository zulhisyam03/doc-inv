import { Head, Link, useForm, usePage, router } from '@inertiajs/react';

import HeadingSmall from '@/components/heading-small';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Transition } from '@headlessui/react';
import { type BreadcrumbItem } from '@/types';
import { FormEventHandler, useState } from 'react';
import { FaRegSave  } from 'react-icons/fa'; // Ikon panah dari react-icons

import AppLayout from '@/layouts/app-layout';
import ParameterLayout from '@/layouts/master-form/parameter-layout';

import Jurusan from '@/pages/masterform/parameter-jurusan';
import Prodi from '@/pages/masterform/parameter-prodi';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Parameter',
        href: '/masterform/parameter',
    },
];

const { post } = router;
const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('parameter.jurusan.create'), {
        preserveScroll: true,
    });
};

export default function Appearance() {

    const [activeMenu, setActiveMenu] = useState<'jurusan' | 'prodi' | null>('jurusan');

    const renderContent = () => {
        switch (activeMenu) {
            case 'jurusan':
                return <Jurusan />;
            case 'prodi':
                return <Prodi />; // Placeholder
            default:
                return null;
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Parameter" />
            <div className="px-4 py-6">
                <Heading title="Parameter" description="Setting parameter form" />

                <div className="w-full h-auto rounded-lg flex flex-col-2">
                    <div className="w-64 rounded-md flex flex-col p-2 space-y-2">
                        <span onClick={() => setActiveMenu('jurusan')} id='menuJurusan' className={`tracking-tight font-medium block w-full px-2 py-1 text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-800 cursor-pointer ${activeMenu === 'jurusan' ? 'bg-gray-100 text-gray-800' : 'bg-white hover:bg-gray-100'}`}>
                            Jurusan
                        </span>
                        <span onClick={() => setActiveMenu('prodi')} id='menuProdi' className={`tracking-tight font-medium block w-full px-2 py-1 text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-800 cursor-pointer ${activeMenu === 'prodi' ? 'bg-gray-100 text-gray-800' : 'bg-white hover:bg-gray-100'}`}>
                            Program Studi
                        </span>
                    </div>
                    <div className="w-full rounded-md flex flex-col p-4 space-y-2 border border-gray-100" id='parameterFrame'>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
