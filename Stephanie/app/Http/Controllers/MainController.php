<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use File;

class MainController extends Controller
{
  public function index()
  {
    return File::get('../resources/views/index.blade.php');
  }

}