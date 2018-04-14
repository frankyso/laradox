<div class="modal fade" tabindex="-1" role="dialog" id="createTableModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">Create New Table</h4>
            </div>
            <div class="modal-body">
                <div class="form-group" v-bind:class="{'has-error': errors.has('createTableName')}">
                    <label>Table Name</label>
                    <input type="text" class="form-control" name="name" v-model="temporary.createTable.name">
                    <span v-show="errors.has('createTableName')" class="help-block">@{{ errors.first('createTableName') }}</span>
                </div>
                <div class="form-group" v-bind:class="{'has-error': errors.has('createTableModelName')}">
                    <label>Model Name</label>
                    <input type="text" class="form-control" name="namespace" v-model="temporary.createTable.modelName">
                    <span v-show="errors.has('createTableModelName')" class="help-block">@{{ errors.first('createTableModelName') }}</span>
                </div>
                <div class="form-group" v-bind:class="{'has-error': errors.has('createTableTableColorClass')}">
                    <label>Table Color</label>
                    <select class="form-control" v-model="temporary.createTable.tableColorClass">
                        <option v-bind:value="color.class" v-for="color in options.tableColor">@{{color.name}}</option>
                    </select>
                    <span v-show="errors.has('createTableTableColorClass')" class="help-block">@{{ errors.first('createTableTableColorClass') }}</span>
                </div>

                <hr>
                <label>Set Basic Table Fields</label>
                <div class="row">
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.createTable.incrementalId">
                                <span>Incremental ID</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.createTable.timestamps">
                                <span>Timestamps</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.createTable.softDeletes">
                                <span>SoftDeletes</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary" v-on:click="createTableSubmit">Create Table</button>
            </div>
        </div>
    </div>
</div>