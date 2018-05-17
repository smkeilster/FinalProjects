<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Response;
use Purifier;

use App\Content;
use App\City;
use App\Event;
use DB;

class ContentController extends Controller
{
    public function indes()
    {
        $cities = City::all();
        $events = Event::all();

        return Response::json(['cities'=>$cities, 'events' =>$events]);
    }

    public function index()
    {
        // Ghosts of mysql past
            // $cities = City::all();
            // $events = Event::all();
            // $sql = "SELECT * FROM `cities` INNER JOIN `events` ON cities.cityID=events.cityID";

            // $content = DB::table('cities')
            // ->join('events', 'cityID', '=', 'cityID')
            // ->select('*')
            // ->get();

            // $content = DB::select(DB::raw("SELECT * FROM `cities` INNER JOIN `events` ON cities.cityID=events.cityID"),array());
            // $c = mysql_connect("http://127.0.0.1:3306", "forge", "");
            // mysql_select_db("outabout");
            // $result = mysql_query("SELECT * FROM `cities` INNER JOIN `events` ON cities.cityID=events.cityID");
            // $row = mysql_fetch_assoc($result);

            // $sql = "SELECT * FROM `cities` INNER JOIN `events` ON cities.cityID=events.cityID";
            // $content->db =Mage::get

            $content = DB::select('SELECT * FROM `cities` INNER JOIN `events` ON cities.cityID=events.cityID ORDER BY cities.cityID, events.eventOrder');
        return Response::json(['content'=> $content]);
    }
}
?>