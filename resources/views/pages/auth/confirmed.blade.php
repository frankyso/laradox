@extends('layouts.auth')
@section('page_title','Registered')
@section('content')
    <p class="text-center">Your account have confirmed</p>
    <a href="/auth/login" class="btn btn-success btn-block">Sign In</a>
    <!-- <form action="" class="form" method="POST">
        {{method_field('POST')}}
        {{csrf_field()}}
        <div class="form-group {{ $errors->has('email') ? ' has-error' : '' }}">
            <input type="text" class="form-control" placeholder="Email" name="email" value="{{old('email')}}">
            {!! $errors->first('email', '<p class="help-block">:message</p>') !!}
        </div>
        <div class="form-group {{ $errors->has('password') ? ' has-error' : '' }}">
            <input type="text" class="form-control" placeholder="Password" name="password">
            {!! $errors->first('password', '<p class="help-block">:message</p>') !!}
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Password Confirmation" name="password_confirmation">
        </div>
        <div class="form-group">
            <input type="submit" class="btn btn-block btn-success" value="Sign Up">
        </div>
    </form> -->
@endsection