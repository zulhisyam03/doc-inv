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
            <HeadingSmall title="Parameter Program Studi" description="Data Program Studi" />

            {/* Content */}
            <form onSubmit={submit} className="space-y-6">
                <div className="grid gap-2">
                    <Label htmlFor="kode_prodi">Kode Prodi</Label>

                    <Input
                        id="kode_prodi"
                        className="mt-1 block w-full"
                        required
                        autoComplete="off"
                        placeholder="Kode Prodi"
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="nama_prodi">Nama Prodi</Label>

                    <Input
                        id="nama_prodi"
                        className="mt-1 block w-full"
                        required
                        autoComplete="off"
                        placeholder="Nama Prodi"
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
