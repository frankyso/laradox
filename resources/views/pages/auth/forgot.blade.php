@extends('layouts.auth')
@section('page_title','Discover Schema')
@section('content')
    <h4 class="text-center m-b-lg">Forgot Password?</h4>
    <form action="" class="form" method="POST">
        {{csrf_field()}}
        @if(Session::has('message'))
            <p class="alert {{ Session::get('alert-class', 'alert-info') }}">
                {{ Session::get('message') }} 
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </p>
        @endif
        <div class="form-group {{ $errors->has('email') ? ' has-error' : '' }}">
            <input type="text" class="form-control" placeholder="Your Email Address" name="email">
            {!! $errors->first('email', '<p class="help-block">:message</p>') !!}
        </div>
        <div class="form-group">
            <input type="submit" class="btn btn-block btn-success" value="Send Email Reset">
        </div>
        <hr>
        <div class="row">
            <div class="col-md-6">
                
            </div>
            <div class="col-md-6">
                
            </div>
        </div>
    </form>
@endsection

@section('footer-content')
    <div class="text-center text-white m-t-md">
        <a href="/auth/login" class="text-white text-hover-white">Already Remember? <strong>Sign In</strong></a>
    </div>
@endsection