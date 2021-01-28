<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class usersController extends Controller
{
    function register(Request $req)
    {
        $user=new User();
       // $user->id=$req->input('id');
        $user->name=$req->input('name');
        $user->email=$req->input('email');
        $user->password=Hash::make($req->input('password'));

        $user->save();

        return $user;
    }
}