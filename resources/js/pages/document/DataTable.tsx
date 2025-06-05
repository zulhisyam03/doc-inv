// resources/js/Components/DataTable.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, SquarePen, Trash2 } from 'lucide-react';

type Props = {
    columns: string[];
    data: Record<string, any>[];
    currentPage: number;
    perPage: number;
}

export default function DataTable({ columns, data, currentPage, perPage }: Props ) {
    return (
        <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
            <table className="min-w-full text-sm text-left text-gray-500">
                <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">No</th>
                        {columns.map((col, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {col}
                            </th>
                        ))}
                        <th scope="col" className="px-6 py-3">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length + 1} className="px-6 py-4 text-center">
                                Tidak ada data
                            </td>
                        </tr>
                    ) : (
                        data.map((row, index) => {
                            // ambil data status
                            const rowStatus = String(row['status'] || '').trim().toLocaleLowerCase();
                        
                            let rowClass = 'bg-white border-b hover:bg-gray-100'; //Defaulth Style
                            if(rowStatus !== 'a') {
                                rowClass = 'bg-gray-50 text-gray-400 border-b' //Style baris jika nonaktif
                            }

                            return(
                                <tr key={index} className={rowClass}>
                                <td className="px-6 py-4">
                                    {(index + 1) + ((currentPage - 1) * perPage)}
                                </td>
                                {columns.map((col, idx) => {
                                    const rawValue = String(row[col.toLocaleLowerCase().replace(/\s/g, '_')]);
                                    const value = String(rawValue || '').trim().toLocaleLowerCase();
                                    
                                    // Tentukan teks yang akan ditampilkan
                                    const displayText = value === 'a' ? 'AKTIF' : (value === 'n' || value ==='' ? 'NONAKTIF' : value);

                                    // tentukan kelas berdasarkan nilai
                                    const textColorClass = displayText === 'NONAKTIF' ? 'text-red-400': '';

                                    return (
                                        <td key={idx} className={`px-6 py-4 ${textColorClass}`}>
                                            {displayText}
                                        </td>
                                    );
                                })}
                                <td className='px-6 py-4'>
                                    {/* <Button id='btnEdit' className='cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 w-5'> */}
                                        <span className='flex flex-col-3 gap-x-1 items-center'>
                                            <Download id='btnUnduh' className='size-5 text-green-400 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105'>
                                                <title>Unduh</title>
                                            </Download>
                                            <SquarePen id='btnEdit' className='size-5 text-yellow-400 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105'>
                                                <title>Edit</title>
                                            </SquarePen>
                                            <Trash2 id='btnHapus' className='size-5 text-red-400 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105'>
                                                <title>Hapus</title>
                                            </Trash2>
                                        </span>
                                    {/* </Button> */}
                                </td>
                            </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
        </div>
    );
}
