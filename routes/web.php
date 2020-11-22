<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])
  ->name('home');
Route::resource('/reports', \App\Http\Controllers\ReportsController::class)
  ->except('create', 'show', 'edit');
