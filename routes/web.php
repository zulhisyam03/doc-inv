<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect('/login');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// PARAMETER
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/parameter/jurusan', function () {
        return Inertia::render('masterform/parameter-jurusan');
    })->name('parameter.jurusan');
    Route::get('/parameter/prodi', function () {
        return Inertia::render('masterform/parameter-prodi');
    })->name('parameter.prodi');
    Route::get('/parameter', function () {
        return Inertia::render('masterform/parameter');
    })->name('parameter');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
