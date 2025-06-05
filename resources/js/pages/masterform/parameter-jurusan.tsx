import { Head, Link, useForm, usePage, router } from '@inertiajs/react';

import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Transition } from '@headlessui/react';
import { type BreadcrumbItem } from '@/types';
import { FormEventHandler } from 'react';
import { FaRegSave  } from 'react-icons/fa'; // Ikon panah dari react-icons

import AppLayout from '@/layouts/app-layout';

const { post } = router;
const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('parameter.jurusan.create'), {
        preserveScroll: true,
    });
};

export default function Appearance() {
    return (
        <div className="space-y-6">
            <HeadingSmall title="Parameter Jurusan" description="Data Jurusan" />

            {/* Content */}
            <form onSubmit={submit} className="space-y-6">
                <div className="grid gap-2">
                    <Label htmlFor="kode_jurusan">Kode Jurusan</Label>

                    <Input
                        id="kode_jurusan"
                        className="mt-1 block w-full"
                        required
                        autoComplete="off"
                        placeholder="Kode Jurusan"
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="nama_jurusan">Nama Jurusan</Label>

                    <Input
                        id="nama_jurusan"
                        className="mt-1 block w-full"
                        required
                        autoComplete="off"
                        placeholder="Nama Jurusan"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <Button className='bg-blue-500 hover:bg-blue-400 cursor-pointer
                                        transition-all duration-300 ease-in-out transform hover:scale-105'>
                        Save
                        <FaRegSave className='w-4 h-4' />
                    </Button>
                </div>
            </form>
        </div>
    )
}
