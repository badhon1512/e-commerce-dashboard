<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Product;
use Illuminate\Support\Facades\Hash;




class productController extends Controller
{

    

    function productList()
    {
        $data=Product::all();

        return $data;
    }

    function addProduct(Request $req)
    {
        $product=new Product();
        $product->id=$req->input('id');
        $product->name=$req->input('name');
        $product->file_path=$req->input('file_path');
        $product->description=$req->input('description');
        $product->price=$req->input('price');
        $product->file_path=$req->input("picture");
        $product->save();

        return $product;
      

        

    }

    function delete($id)
    {
        Product::where('id',$id)->delete();
    }
}
