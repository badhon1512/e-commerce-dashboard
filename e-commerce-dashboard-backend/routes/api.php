<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\usersController;
use App\Http\Controllers\productController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register',[usersController::class,'register']);

Route::post('/add',[productController::class,'addProduct']);

Route::post('/login',[usersController::class,'login']);

Route::get('/productlist',[productController::class,'productList']);

Route::delete('/delete/{id}',[productController::class,'delete']);

Route::get('/update/{id}',[productController::class,'getProductById']);

Route::put('/updateproduct/{id}',[productController::class,'updateProduct']);

Route::get('/search/{data}',[productController::class,'search']);
