import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage, Link } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';

import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import DataTable from './DataTable';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dokumen',
    href: '/document/list-document'
  }
];

export default function DaftarDokumen(){
  const { documents = [] } = usePage().props as any;

  const columns = ['Judul Dokumen', 'Tanggal Upload', 'Status'];

  const data = Array.isArray(documents?.data)
    ? documents.data.map((item: any) => ({
        judul_dokumen: item.judul_dokumen,
        tanggal_upload: item.tanggal_upload,
        status: item.status
      }))
    : [];

  return(
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title='Dokumen' />
        <div className='space-y-6 px-4 py-6'>
          <Heading title='Dokumen' description='Daftar Dokumen'></Heading>

          <DataTable columns={columns} data={data} currentPage={documents.current_page} perPage={documents.per_page}/>
          {/* Pagination */}
          <div className="mt-6 flex justify-center space-x-1">
            {documents.links.map((link: any, index: number) => (
              <Link
                key={index}
                href={link.url || '#'}
                as="button"
                disabled={!link.url}
                className={`px-3 py-1 border rounded ${
                  link.active ? 'bg-gray-600 text-white' : 'bg-white text-gray-500 hover:bg-blue-100 hover:cursor-pointer'
                }`}
                dangerouslySetInnerHTML={{ __html: link.label }}
              />
            ))}
          </div>
        </div>

    </AppLayout>
  )
}