<form action="/schemas/{{$uuid}}" method="POST">
    {{csrf_field()}}
    {{method_field('PATCH')}}
    <div class="modal fade" tabindex="-1" role="dialog" id="editModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">Edit Schema</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>Schema Name</label>
                        <input type="text" class="form-control" required name="name" value="{{$name}}">
                    </div>
                    <div class="form-group">
                        <label>Model Namespace <span class="fa fa-question-circle"></span></label>
                        <input type="text" class="form-control" required name="namespace" value="{{$namespace}}">
                    </div>
                    <div class="form-group">
                        <div class="checkbox checkbox-slider--b-flat">
                            <label>
                                <input type="checkbox" name="is_private" @if($is_private) checked @endif value="1"><span>Make this schema hidden from public</span>
                            </label>
                        </div>
                    </div>
                    <hr>
                    <h5><strong>Shared with people</strong></h5>
                    <small class="help-block">People who registered to this list, has privilege to change this schema.</small>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                            <img width="64" class="media-object" src="https://i.vimeocdn.com/portrait/2965109_300x300" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <h5 class="media-heading">Franky Soputra</h5>
                            <p>frankyso.mail@gmail.com</p>
                        </div>
                        <div class="media-right">
                            <button class="btn btn-sm btn-default">Revoke Access</button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" v-on:click="deleteScheme()" class="btn btn-danger pull-left"><span class="fa fa-trash"></span></button>

                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">Update Scheme</button>
                </div>
            </div>
        </div>
    </div>
</form>