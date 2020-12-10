<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class RestaurantController extends Controller
{
    public function lists(Request $request)
    {
        $ggckey = config('app.ggckey');
        $location = $request->input('location')['zone'];
        $lat = $request->input('location')['lat'];
        $lng = $request->input('location')['lng'];

        $response = Http::withOptions([
            'verify' => false
        ])->get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+$location&location=$lat,$lng&radius=1000&key=$ggckey");

        return $response->body();
    }
}
