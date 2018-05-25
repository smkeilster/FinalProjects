<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/{path?}', [
    'uses' => 'MainController@index',
    'as' => 'react',
    'where' => ['path' => '.*']
]);

// Route::get('/', function () {
//     return view('index');
// });

// Route::any('{path?}', 'MainController@index')->where("path", ".+");