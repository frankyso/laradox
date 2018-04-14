@extends('layouts.auth')
@section('page_title','Discover Schema')
@section('content')
    <h4 class="text-center m-b-lg">Log In</h4>
    <form action="" class="form" method="POST">
        {{csrf_field()}}
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Email" name="email">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" name="password">
        </div>
        <div class="form-group">
            <input type="submit" class="btn btn-block btn-success" value="Sign In">
        </div>
        <hr>
        <div class="row">
            <div class="col-md-6">
                
            </div>
            <div class="col-md-6">
                
            </div>
        </div>
        <div class="text-center"><a href="/auth/forgot">Forgot Password?</a></div>
    </form>
@endsection

@section('footer-content')
    <div class="text-center text-white m-t-md">
        <a href="/auth/register" class="text-white text-hover-white">Don't Have an Account? <strong>Sign Up</strong></a>
    </div>
@endsection