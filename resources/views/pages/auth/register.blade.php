@extends('layouts.auth')
@section('page_title','Sign Up')
@section('content')
    <h4 class="text-center m-b-lg">Sign Up</h4>
    <form action="" class="form" method="POST">
        {{method_field('POST')}}
        {{csrf_field()}}
        <div class="form-group {{ $errors->has('name') ? ' has-error' : '' }}">
            <input type="text" class="form-control" placeholder="Full Name" name="name" value="{{old('name')}}">
            {!! $errors->first('name', '<p class="help-block">:message</p>') !!}
        </div>
        <div class="form-group {{ $errors->has('email') ? ' has-error' : '' }}">
            <input type="text" class="form-control" placeholder="Email" name="email" value="{{old('email')}}">
            {!! $errors->first('email', '<p class="help-block">:message</p>') !!}
        </div>
        <div class="form-group {{ $errors->has('password') ? ' has-error' : '' }}">
            <input type="password" class="form-control" placeholder="Password" name="password">
            {!! $errors->first('password', '<p class="help-block">:message</p>') !!}
        </div>
        <div class="form-group">
            <input type="password" class="form-control" placeholder="Password Confirmation" name="password_confirmation">
        </div>
        <div class="form-group">
            <input type="submit" class="btn btn-block btn-success" value="Sign Up">
        </div>
    </form>
@endsection

@section('footer-content')
    <div class="text-center text-white m-t-md">
        <a href="/auth/login" class="text-white text-hover-white">Have an Account? <strong>Sign In</strong></a>
    </div>
@endsection