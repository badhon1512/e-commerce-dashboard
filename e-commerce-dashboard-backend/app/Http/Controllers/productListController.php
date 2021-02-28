<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Productlist;
use Illuminate\Support\Facades\Hash;




class productListController extends Controller
{

    

    function productList()
    {
        $data=DB::select("select * from productlist");

        return $data;
    }

    function addProduct(Request $req)
    {
        /*$product=new Productlist();
        $product->id=$req->input('id');
        $product->name=$req->input('name');
        $product->picture=$req->input('picture');
        $product->desceiption=$req->input('desceiption');
        $product->price=$req->input('price');
        $product->save();*/
        $name=$req->input('name');
        $id=$req->input('id');
        $picture=$req->input('picture');
        $description=$req->input('description');
        $price=$req->input('price');

        $sql="insert into productlist values('$id','$name','$picture','$description','$price')";

        DB::insert($sql);


      //  return $product;

        

    }
}
