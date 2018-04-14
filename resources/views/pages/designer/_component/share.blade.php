<div class="modal fade" tabindex="-1" role="dialog" id="shareModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">Share</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label for="">Url</label>
                    <div class="form-control">{{url('schemas/'.$uuid)}}</div>
                </div>

                <div id="share-buttons"> 
                    
                    <!-- Digg -->
                    <a href="http://www.digg.com/submit?url={{url('schemas/'.$uuid)}}" target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/diggit.png" alt="Digg" />
                    </a>
                
                    <!-- Facebook -->
                    <a href="http://www.facebook.com/sharer.php?u={{url('schemas/'.$uuid)}}" target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
                    </a>
                    
                    <!-- Google+ -->
                    <a href="https://plus.google.com/share?url={{url('schemas/'.$uuid)}}" target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" />
                    </a>
                    
                    <!-- LinkedIn -->
                    <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url={{url('schemas/'.$uuid)}}" target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" />
                    </a>
                    
                    <!-- Twitter -->
                    <a href="https://twitter.com/share?url={{url('schemas/'.$uuid)}}&amp;text=Simple%20Share%20Buttons&amp;hashtags=laradox" target="_blank">
                        <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>