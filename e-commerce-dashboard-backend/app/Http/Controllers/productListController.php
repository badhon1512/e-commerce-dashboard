<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;



class productListController extends Controller
{

    

    function productList()
    {
        $data=DB::select("select * from productlist");

        return $data;
    }
}
