// resources/js/Components/DataTable.tsx
import React from 'react';

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
                                rowClass = 'bg-red-400 text-white border-b hover:bg-red-500' //Style baris jika nonaktif
                            }

                            return(
                                <tr key={index} className={rowClass}>
                                <td className="px-6 py-4">
                                    {(index + 1) + ((currentPage - 1) * perPage)}
                                </td>
                                {columns.map((col, idx) => (
                                    <td key={idx} className="px-6 py-4">
                                        {/* merubah nilai char menjadi kata Aktif/Nonaktif */}
                                        {(() => {
                                            const rawValue = String(row[col.toLocaleLowerCase().replace(/\s/g, '_')]);
                                            const value = String(rawValue || '').trim().toLocaleLowerCase();
                                            
                                            if (value === 'a') return 'AKTIF';
                                            if (value ==='n' || value === '') return 'NONAKTIF';

                                            return value;
                                        })()}
                                    </td>
                                ))}
                            </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
        </div>
    );
}
