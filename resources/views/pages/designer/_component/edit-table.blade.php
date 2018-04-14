<div class="modal fade" tabindex="-1" role="dialog" id="editTableModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">Edit Table</h4>
            </div>
            <div class="modal-body">
                <div class="form-group" v-bind:class="{'has-error': errors.has('editTableName')}">
                    <label>Table Name</label>
                    <input type="text" class="form-control" name="name" v-model="temporary.editTable.name">
                    <span v-show="errors.has('editTableName')" class="help-block">@{{ errors.first('editTableName') }}</span>
                </div>
                <div class="form-group" v-bind:class="{'has-error': errors.has('editTableModelName')}">
                    <label>Model Name</label>
                    <input type="text" class="form-control" name="namespace" v-model="temporary.editTable.modelName">
                    <span v-show="errors.has('editTableModelName')" class="help-block">@{{ errors.first('editTableModelName') }}</span>
                </div>
                <div class="form-group" v-bind:class="{'has-error': errors.has('editTableTableColorClass')}">
                    <label>Table Color</label>
                    <select class="form-control" v-model="temporary.editTable.tableColorClass">
                        <option v-bind:value="color.class" v-for="color in options.tableColor">@{{color.name}}</option>
                    </select>
                    <span v-show="errors.has('editTableTableColorClass')" class="help-block">@{{ errors.first('editTableTableColorClass') }}</span>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary" v-on:click="editTableSubmit">Update Table</button>
            </div>
        </div>
    </div>
</div>