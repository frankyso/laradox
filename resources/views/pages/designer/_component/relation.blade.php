<div class="modal fade" tabindex="-1" role="dialog" id="relationModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">Relationships for model @{{temporary.relation.tableName}}</h4>
            </div>
            <!-- <div class="modal-body"> -->
                <table class="table table-striped">
                    <tr>
                        <th>Function</th>
                        <th>Relation</th>
                        <th>Model</th>
                        <th>Foreign Key</th>
                        <th></th>
                    </tr>
                    <tr v-for="(relation, index) in temporary.filteredRelation" :key="relation.uuid">
                        <td>@{{relation.functionName}}</td>
                        <td>@{{relation.type}}</td>
                        <td>@{{relation.foreign.modelName}}</td>
                        <td>@{{relation.foreign.foreignKey}}</td>
                        <td>
                            <a class="m-r-xs" href="javascript:void(0)" v-on:click="editRelationship(relation)"><span class="fa fa-pencil"></span></a>
                            <a href="javascript:void(0)" v-on:click="deleteRelationship(relation.id)"><span class="fa fa-trash"></span></a>
                        </td>
                    </tr>
                </table>
            <!-- </div> -->
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>                
                <button type="submit" class="btn btn-primary" v-on:click="createRelationship()">Add New Relationship</button>
            </div>
        </div>
    </div>
</div>