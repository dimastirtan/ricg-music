<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function index(){
        $Card = Card::all();

        return response()->json($Card);
    }

    public function AddCard(){
        
        return 'Test';
    }
}
