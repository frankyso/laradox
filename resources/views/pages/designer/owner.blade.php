@extends('layouts.designer') @section('page_title','Home') @section('content')
<ltable v-for="(table, index) in schema.tables" v-bind:readonly="schema.readonly" v-bind:table="table" :key="table.uuid" v-bind:index="index" v-bind:editTableParent="editTable"></ltable>

<a href="javascript:void(0)">
    <div class="add-table" v-on:click="createTable()">
        <span class="fa fa-plus"></span>
    </div>
</a>

<div class="clearfix"></div>

<!-- Create Table -->
@include('pages.designer._component.create-table')

<!-- Edit Table -->
@include('pages.designer._component.edit-table')

<!-- Add Field Table -->
@include('pages.designer._component.add-field')

<!-- Edit Field Table -->
@include('pages.designer._component.edit-field')
<!-- Create Model Relation -->
@include('pages.designer._component.create-model-relation') 
@include('pages.designer._component.edit-model-relation') 
@include('pages.designer._component.relation') 
@include('pages.designer._component.export') 
@include('pages.designer._component.edit') 
@include('pages.designer._component.share')
@endsection 
@section('menu')
<ul class="nav navbar-nav navbar-right">
    <li>
        <a href="#editModal" data-toggle="modal">
            <span class="fa fa-cog"></span> Schema Setting</a>
    </li>
    <li>
        <a href="/schemas/{{$uuid}}/export">
            <span class="fa fa-external-link"></span> Export</a>
    </li>
    <li><a href="#shareModal" data-toggle="modal"><span class="fa fa-share"></span> Share</a></li>
    <!-- <li>
        <a href="/" class="thumb-rating">
            <span class="fa fa-save"></span> Save</a>
    </li> -->
</ul>
@endsection 
@push('footer')
<script src="{{url('js/designer.js')}}"></script> 
@endpush 
@push('header')
    <meta schema name="schema-uuid" content="{{$uuid}}">
    <meta schema name="schema-namespace" content="{{$namespace}}"> 
    <meta schema name="readonly" content='0'> 
@endpush