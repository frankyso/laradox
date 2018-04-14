<div class="modal fade" tabindex="-1" role="dialog" id="editRelationModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">Editt Relationship from model @{{temporary.relation.tableName}}</h4>
            </div>
            <div class="modal-body">
                <div class="form-group" v-bind:class="{'has-error': errors.has('createRelationRelationType')}">
                    <label>Relation Type</label>
                    <select class="form-control" v-model="temporary.relation.relationType">
                        <option value="hasOne">hasOne</option>
                        <option value="belongsTo">belongsTo</option>
                        <option value="hasMany">hasMany</option>
                        <option value="belongsToMany">belongsToMany</option>
                    </select>
                    <span v-show="errors.has('createRelationRelationType')" class="help-block">@{{ errors.first('createRelationRelationType') }}</span>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group" v-bind:class="{'has-error': errors.has('createRelationForeignTable')}">
                            <label>Related Model</label>
                            <select class="form-control" v-model="temporary.relation.tableKey">
                                <option v-bind:value="index" v-for="(table, index) in schema.tables">@{{table.modelName}}</option>
                            </select>
                            <span v-show="errors.has('createRelationForeignTable')" class="help-block">@{{ errors.first('createRelationForeignTable') }}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group" v-bind:class="{'has-error': errors.has('createRelationForeignField')}">
                            <label>Foreign Key (Optional)</label>
                            <input type="text" class="form-control" v-model="temporary.relation.foreignKey">
                            <span v-show="errors.has('createRelationForeignField')" class="help-block">@{{ errors.first('createRelationForeignField') }}</span>
                        </div>
                    </div>
                </div>
                <div class="form-group" v-bind:class="{'has-error': errors.has('functionNameField')}">
                    <label>Function Name</label>
                    <input type="text" class="form-control" name="name" v-model="temporary.relation.function">
                    <span v-show="errors.has('functionNameField')" class="help-block">@{{ errors.first('functionNameField') }}</span>
                </div>
                <pre class="language-php">
<code v-if="temporary.relation.foreignKey===''">
public function @{{temporary.relation.function}}(){
    $this->@{{temporary.relation.relationType}}('@{{schema.namespace}}\@{{relationForeignModelName}}');
}
</code><code v-if="temporary.relation.foreignKey!==''">
public function @{{temporary.relation.function}}(){
    $this->@{{temporary.relation.relationType}}('@{{schema.namespace}}\@{{relationForeignModelName}}','@{{temporary.relation.foreignKey}}');
}
</code>
</pre>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary" v-on:click="updateRelationshipSubmit">Change Relation</button>
            </div>
        </div>
    </div>
</div>