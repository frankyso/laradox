@extends('layouts.designer')
@section('page_title','Home')
@section('content')
<ltable v-for="(table, index) in schema.tables" v-bind:readonly="schema.readonly" v-bind:table="table" :key="table.uuid" v-bind:index="index" v-bind:editTableParent="editTable"></ltable>
@endsection

@section('menu')
<ul class="nav navbar-nav navbar-right">
    <li><a href="/auth/login">Login</a></li>
    <!-- <li><a href="/"><span class="fa fa-code-fork"></span> Fork</a></li> -->
    <li><a href="/schemas/{{$uuid}}/export"><span class="fa fa-external-link"></span> Export</a></li>
    <li><a href="#shareModal" data-toggle="modal"><span class="fa fa-share"></span> Share</a></li>
    <!-- <li><a href="/" class="thumb-rating"><span class="fa fa-thumbs-o-up"></span></a></li>
    <li><a href="/" class="thumb-rating"><span class="fa fa-thumbs-o-down"></span></a></li> -->
</ul>
@endsection

@include('pages.designer._component.share')

@push('footer')
<script src="{{url('js/designer.js')}}"></script> 
@endpush 

@push('header')
    <meta schema name="schema-uuid" content="{{$uuid}}">
    <meta schema name="schema-namespace" content="{{$namespace}}"> 
    <meta schema name="readonly" content='1'> 
@endpush