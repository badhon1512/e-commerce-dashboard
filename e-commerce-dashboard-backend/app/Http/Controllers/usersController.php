<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class usersController extends Controller
{
    function login(Request $req)
    {
        $email=$req->input('email');
        $password=$req->input('password');
        $data=DB::select("select * from users where email='$email' and password='$password'");
        return $data;

    }
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
