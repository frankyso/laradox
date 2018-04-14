@extends('layouts.layout')
@section('page_title','Home')
@section('content')
<div class="laradox-hero p-b-lg">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <h2 class="text-white hero-title m-b-lg">Schema Designer Web App for Developer, Join Our Community!</h2>
                <form class="register-form">
                    <div class="form-group float-label-control">
                        <input type="text" class="form-control" placeholder="Your Schema Name">
                    </div>
                    <div class="form-group">
                        <a href="/auth/register" class="btn btn-default btn-block">Create Schema</a>
                    </div>
                </form>
            </div>
            <div class="col-md-7">
                <img src="{{url('images/screen.gif')}}" alt="" class="img-screen">
                <!-- <img src="{{url('images/browser.png')}}" alt="" class="img-browser"> -->
            </div>
        </div>
    </div>
</div>
<div class="container p-t-lg p-b-lg">
    <a href="/discover"><h4 class="text-primary m-b-lg"><strong>Discover our Featured Database Schemas</strong></h4></a>
    <div class="schema-widget thumb-only">
        <ul>
            @foreach($schemas as $schema)
            <li class="list-item">
                <a href="/schemas/{{$schema->uuid}}">
                    <div class="item-avatar">
                        <div class="userpic" data-userpic-content="{{$schema->name}}"></div>
                        <!-- <img src="https://thumb-tf.s3.envato.com/files/224236755/Artboard%201.png" alt=""> -->
                    </div>
                    <div class="item-detail">
                        <h4 class="title">{{$schema->name}}</h4>
                        <p>Created by {{$schema->user->name}}, at {{$schema->created_at->format("d M Y")}}</p>
                    </div>
                </a>
            </li>
            @endforeach
        </ul>
    </div>
</div>
@endsection