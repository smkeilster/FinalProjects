<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Response;
use Purifier;

use App\Content;
use App\City;
use App\Event;

class ContentController extends Controller
{
    public function index()
    {
        $cities = City::all();
        $events = Event::all();

        return Response::json(['cities' => $cities, 'events' => $events]);
    }
}
