<div class="modal fade" tabindex="-1" role="dialog" id="editFieldModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">Add Field @{{temporary.editField.tableName}}</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Laravel Column Type</label>
                    <select class="form-control" v-model="temporary.editField.type">
                        <option v-bind:value="type.type" v-for="type in options.fieldType">@{{type.type}}</option>
                    </select>
                    <span class="help-block">@{{temporary.editField.typeDescription}}</span>
                </div>
                <div class="form-group" v-if="temporary.editField.options.nameVisibility">
                    <label>Name</label>
                    <input type="text" class="form-control" name="name" v-model="temporary.editField.name">
                </div>
                <div v-if="temporary.editField.options.arrayVisibility">
                    <div class="form-group">
                        <label>Choices</label>
                        <div class="input-group m-b-md" v-for="(numdata, index) in temporary.editField.enum">
                            <input type="text" class="form-control" name="name" v-model="temporary.editField.enum[index]">
                            <span class="input-group-btn">
                                <button class="btn btn-danger" v-on:click="temporary.editField.enum.splice(index,1)" type="button">
                                    <span class="fa fa-times"></span>
                                </button>
                            </span>
                        </div>
                    </div>
                    <a href="javascript:void(0);" v-on:click="temporary.editField.enum.push('');" class="help-block text-right">
                        <span class="fa fa-plus"></span> Add More Choice</a>
                </div>
                <div class="form-group" v-if="temporary.editField.options.lengthVisibility">
                    <label>Length</label>
                    <input type="number" class="form-control" name="name" v-model="temporary.editField.length">
                </div>
                <div class="form-group" v-if="temporary.editField.options.lengthDecimalVisibility">
                    <label>Decimal</label>
                    <input type="number" class="form-control" name="name" v-model="temporary.editField.decimal">
                </div>
                <div class="form-group" v-if="temporary.editField.options.defaultValueVisibility">
                    <label>Default Value</label>
                    <input type="text" class="form-control" name="namespace" v-model="temporary.editField.modelName" v-if="temporary.editField.options.defaultValueVisibility">
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.editField.optionValues.autoIncrement" v-bind:disabled="!temporary.editField.options.autoIncrementCheck">
                                <span>Auto Incremental</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.editField.optionValues.unsigned" v-bind:disabled="!temporary.editField.options.unsignedCheck">
                                <span>Unsigned Integer</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.editField.optionValues.primaryKey" v-bind:disabled="!temporary.editField.options.primaryKeyCheck">
                                <span>Primary Key</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.editField.optionValues.index" v-bind:disabled="!temporary.editField.options.indexCheck">
                                <span>Index</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.editField.optionValues.nullable" v-bind:disabled="!temporary.editField.options.nullableCheck">
                                <span>Nullable</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.editField.optionValues.unique" v-bind:disabled="!temporary.editField.options.uniqueCheck">
                                <span>Unique Index</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="row m-t-md">
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.editField.optionValues.fillable" v-bind:disabled="!temporary.editField.options.fillableCheck">
                                <span>Fillable</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.editField.optionValues.guarded" v-bind:disabled="!temporary.editField.options.guardedCheck">
                                <span>Guarded</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.editField.optionValues.visible" v-bind:disabled="!temporary.editField.options.visibleCheck">
                                <span>Visible</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.editField.optionValues.hidden" v-bind:disabled="!temporary.editField.options.hiddenCheck">
                                <span>Hidden</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="row m-t-md">
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.editField.optionValues.foreign" v-bind:disabled="!temporary.editField.options.foreignKeyCheck">
                                <span>Foreign Key</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary" v-on:click="editFieldSubmit">Update Field</button>
            </div>
        </div>
    </div>
</div>