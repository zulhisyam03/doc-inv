<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;

    //
    protected $table = 'tb_documents'; // 👈 Tambahkan ini

    protected $fillable = [
        'judul_dokumen',
        'status'
    ];
}
