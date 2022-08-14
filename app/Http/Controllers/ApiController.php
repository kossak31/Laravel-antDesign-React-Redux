<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use http\Env\Response;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class ApiController extends Controller
{
    function register(Request $request)
    {
        $rules = array(
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'password_confirmation' => 'required|same:password',
        );
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return Response()->json(['status' => 'failure', 'message' => 'errors', 'errors' => $validator->getMessageBag()->toArray()]);
        }
        $now = new \DateTime();
        $ctime = $now->format('Y-m-d H:i:s');
        User::insert([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'created_at' => $ctime,

        ]);
        return Response()->json(['status' => 'success', 'message' => 'Successful..!']);
    }

    function login(Request $request)
    {
        $rules = array(
            'email' => 'required|email',
            'password' => 'required',
        );
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return Response()->json(['status' => 'failure', 'message' => 'errors', 'errors' => $validator->getMessageBag()->toArray()]);
        }
        $email = $request->email;
        $password = $request->password;
        if (Auth::attempt(array('email' => $email, 'password' => $password))) {
            $userDetails = array(
                'user_id' => Auth::id(),
                'name' => Auth::User()->name,
                'email' => Auth::User()->email,
            );
            return Response()->json(['status' => 'success', 'message' => 'Successful..!', 'userDetails' => $userDetails]);
        } else {
            return Response()->json(['status' => 'failure', 'message' => 'Invalid username or password']);
        }
    }
}
