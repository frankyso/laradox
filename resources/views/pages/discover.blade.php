@extends('layouts.layout')
@section('page_title','Discover Schema')
@section('content')
<div class="laradox-discover-hero">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <form action="" method="GET">
                    <!-- {{csrf_field()}} -->
                    <!-- {{method_field('POST')}} -->
                    <div class="input-group">
                    <input type="text" name="keywords" class="form-control" placeholder="Search Within These Results" value="{{$keywords}}">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="submit">Search!</button>
                        </span>
                    </div>
                </form>
                <h4 class="text-white text-center m-t-md">Search all over {{number_format(\App\Schema::count())}} Database Schema</h4>
                <h6 class="text-white text-center m-t-xs">Powered By <a href="https://www.algolia.com" target="_blank"><img width="80" class="m-l-xs" src="https://www.algolia.com/static_assets/images/press/downloads/algolia-logo-dark.png" alt=""></a></h6>
            </div>
        </div>
    </div>
</div>
<div class="container p-t-lg p-b-lg">
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
        <div class="clearfix"></div>
        <div class="text-center m-t-md">
            {{ $schemas->appends(['keywords' => $keywords])->links() }}
        </div>
    </div>
</div>
@endsection