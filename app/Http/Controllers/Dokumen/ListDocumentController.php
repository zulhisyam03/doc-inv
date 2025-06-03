<?php

namespace App\Http\Controllers\Dokumen;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Document;
use Carbon\Carbon;

class ListDocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Ambil data documents dengan pagination 10 per halaman, urut berdasarkan updated_at desc
        $documents = Document::orderBy('updated_at', 'desc')->paginate(10);
        // Format tanggal dan data agar sesuai kebutuhan frontend
        $documents->getCollection()->transform(function ($document) {
            return [
                'judul_dokumen'  => $document->judul_dokumen,
                'tanggal_upload' => Carbon::parse($document->updated_at)->format('Y-m-d H:i'),
                'status'         => $document->status,
            ];
        });
        
        // Render tampilan dengan Inertia, kirim data paginated
        return Inertia::render('document/list-document', [
            'documents' => $documents,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
