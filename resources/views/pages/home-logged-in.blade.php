@extends('layouts.layout')
@section('page_title','Home')
@section('content')
<div class="container p-b-lg">
    <h3 class="m-b-lg">My Schema 
        @if(Auth::user()->confirmed==1)<div data-toggle="modal" data-target="#createSchemaModal" class="btn btn-primary pull-right">Create New Schema</div>@endif
    </h3>

    <hr>

    @if(Auth::user()->confirmed==0)
    <div class="well text-center">
        <h4>Your Account Is Not Activated Yet</h4>
        <h5>Please check your email to activate your account</h5>
        <p>
            <a href="/auth/resend" class="btn btn-success">Resend Activation Email</a>
        </p>
    </div>
    @elseif($schemes->count() == 0)
    <div class="well text-center">
        <h4>There's No Schema here</h4>
        <h5>Why don't you trying to</h5>
        <p>
            <a href="javascript:void(0)" class="btn btn-success" data-toggle="modal" data-target="#createSchemaModal">Create New Schema</a> <span class="m-r-sm m-l-sm">or</span>
            <a href="/discover" class="btn btn-info">Browse Schema</a>
        </p>
    </div>
    @else
    <div class="schema-widget thumb-only">
        <ul>
            @foreach($schemes as $scheme)
            <li class="list-item">
                <a href="{{url('schemas/'.$scheme->uuid)}}">
                    <div class="item-avatar">
                        <div class="userpic" data-userpic-content="{{$scheme->name}}"></div>
                        <!-- <img src="https://thumb-tf.s3.envato.com/files/224236755/Artboard%201.png" alt=""> -->
                    </div>
                    <div class="item-detail">
                        <h4 class="title">{{$scheme->name}}</h4>
                        <p>Created by {{$scheme->user->name}}, at {{$scheme->created_at->format("d M Y")}}</p>
                    </div>
                </a>
            </li>
            @endforeach
        </ul>
    </div>
    @endif
</div>

<form action="/schemas" method="POST" id="createSchemaForm">
    {{csrf_field()}}
    {{method_field('POST')}}
    <div class="modal fade" tabindex="-1" role="dialog" id="createSchemaModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Create New Schema</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
                <label>Schema Name</label>
                <input type="text" class="form-control" required name="name">
            </div>
            <div class="form-group">
                <label>Model Namespace <span class="fa fa-question-circle"></span></label>
                <input type="text" class="form-control" required name="namespace" value="App">
            </div>
            <div class="form-group">
                <div class="checkbox checkbox-slider--b-flat">
                    <label>
                        <input type="checkbox" name="is_private" value="1"><span>Make this schema hidden from public</span>
                    </label>
                </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-primary">Create Schema</button>
          </div>
        </div>
      </div>
    </div>
</form>
@endsection

@push('footer')
    <script>
        $('#createSchemaForm').validate({
            rules: {
                name: {
                    minlength: 3,
                    maxlength: 100,
                    required: true
                },
                namespace: {
                    minlength: 3,
                    maxlength: 30,
                    required: true
                }
            }
        });
    </script>
@endpush