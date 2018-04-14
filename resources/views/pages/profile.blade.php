@extends('layouts.layout')
@section('page_title','Home')
@section('content')
<div class="container">
    <h3>Edit Profile</h3>
    <form method="POST" action="/profile/edit">
        {{csrf_field()}}
        {{method_field('PATCH')}}
        <div class="row m-b-lg">
            <div class="col-md-8">
                @if(Session::has('message'))
                    <p class="alert {{ Session::get('alert-class', 'alert-info') }}">
                        {{ Session::get('message') }} 
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </p>
                @endif
                <div class="form-group float-label-control {{ $errors->has('name') ? ' has-error' : '' }}">
                    <label for="">Full Name</label>
                    <input type="text" name="name" class="form-control" placeholder="Input Your Full Name" value="{{old('name', $user->name)}}">
                    {!! $errors->first('name', '<p class="help-block">:message</p>') !!}
                </div>
                <div class="form-group float-label-control {{ $errors->has('name') ? ' has-error' : '' }}">
                    <label for="">Email</label>
                    <input type="text" class="form-control" placeholder="Your Email" readonly value="{{$user->email}}">
                </div>
                <div class="form-group float-label-control {{ $errors->has('password') ? ' has-error' : '' }}">
                    <label for="">Password</label>
                    <input type="password" name="password" class="form-control" placeholder="Change Password">
                    {!! $errors->first('password', '<p class="help-block">:message</p>') !!}
                </div>
                <div class="form-group float-label-control {{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                    <label for="">Password Confirmation</label>
                    <input type="password" name="password_confirmation" class="form-control" placeholder="Password Confirmation">
                </div>
                <input type="submit" value="Update Profile" class="btn btn-success">
            </div>
        </div>
    </form>
</div>
@endsection