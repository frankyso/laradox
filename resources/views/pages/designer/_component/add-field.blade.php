<div class="modal fade" tabindex="-1" role="dialog" id="addFieldModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">Add Field @{{temporary.addField.tableName}}</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Laravel Column Type</label>
                    <select class="form-control" v-model="temporary.addField.type">
                        <option v-bind:value="type.type" v-for="type in options.fieldType">@{{type.type}}</option>
                    </select>
                    <span class="help-block">@{{temporary.addField.typeDescription}}</span>
                </div>
                <div class="form-group" v-if="temporary.addField.options.nameVisibility">
                    <label>Name</label>
                    <input type="text" class="form-control" name="name" v-model="temporary.addField.name">
                </div>
                <div v-if="temporary.addField.options.arrayVisibility">
                    <div class="form-group">
                        <label>Choices</label>
                        <div class="input-group m-b-md" v-for="(numdata, index) in temporary.addField.enum">
                            <input type="text" class="form-control" name="name" v-model="temporary.addField.enum[index]">
                            <span class="input-group-btn">
                                <button class="btn btn-danger" v-on:click="temporary.addField.enum.splice(index,1)" type="button">
                                    <span class="fa fa-times"></span>
                                </button>
                            </span>
                        </div>
                    </div>
                    <a href="javascript:void(0);" v-on:click="temporary.addField.enum.push('');" class="help-block text-right">
                        <span class="fa fa-plus"></span> Add More Choice</a>
                </div>
                <div class="form-group" v-if="temporary.addField.options.lengthVisibility">
                    <label>Length</label>
                    <input type="number" class="form-control" name="name" v-model="temporary.addField.length">
                </div>
                <div class="form-group" v-if="temporary.addField.options.lengthDecimalVisibility">
                    <label>Decimal</label>
                    <input type="number" class="form-control" name="name" v-model="temporary.addField.decimal">
                </div>
                <div class="form-group" v-if="temporary.addField.options.defaultValueVisibility">
                    <label>Default Value</label>
                    <input type="text" class="form-control" name="namespace" v-model="temporary.addField.modelName" v-if="temporary.addField.options.defaultValueVisibility">
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.addField.optionValues.autoIncrement" v-bind:disabled="!temporary.addField.options.autoIncrementCheck">
                                <span>Auto Incremental</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.addField.optionValues.unsigned" v-bind:disabled="!temporary.addField.options.unsignedCheck">
                                <span>Unsigned Integer</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.addField.optionValues.primaryKey" v-bind:disabled="!temporary.addField.options.primaryKeyCheck">
                                <span>Primary Key</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.addField.optionValues.index" v-bind:disabled="!temporary.addField.options.indexCheck">
                                <span>Index</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.addField.optionValues.nullable" v-bind:disabled="!temporary.addField.options.nullableCheck">
                                <span>Nullable</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.addField.optionValues.unique" v-bind:disabled="!temporary.addField.options.uniqueCheck">
                                <span>Unique Index</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="row m-t-md">
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.addField.optionValues.fillable" v-bind:disabled="!temporary.addField.options.fillableCheck">
                                <span>Fillable</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.addField.optionValues.guarded" v-bind:disabled="!temporary.addField.options.guardedCheck">
                                <span>Guarded</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.addField.optionValues.visible" v-bind:disabled="!temporary.addField.options.visibleCheck">
                                <span>Visible</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                                <input type="checkbox" v-model="temporary.addField.optionValues.hidden" v-bind:disabled="!temporary.addField.options.hiddenCheck">
                                <span>Hidden</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- <div class="row m-t-md">
                    <div class="col-md-6">
                        <div class="checkbox checkbox-slider--b">
                            <label>
                              <input type="checkbox" v-model="temporary.addField.optionValues.foreign" v-bind:disabled="!temporary.addField.options.foreignKeyCheck"> <span>Foreign Key</span>
                            </label>
                        </div>
                    </div>
                </div> -->
                <div v-if="temporary.addField.optionValues.foreign">
                    <table class="table">
                        <tr>
                            <th>On (Table)</th>
                            <th>References</th>
                            <th>onUpdate</th>
                            <th>onDelete</th>
                        </tr>
                        <tr>
                            <td>
                                <select name="" id="" class="form-control" v-model="temporary.addField.optionValues.foreignValue.tableUuid">
                                    <option v-bind:value="index" v-for="(table, index) in schema.tables">@{{table.name}}</option>
                                </select>
                            </td>
                            <td>
                                <select name="" id="" class="form-control" v-model="temporary.addField.optionValues.foreignValue.fieldUuid">
                                    <option v-bind:value="index" v-for="(table, index) in fieldForeignAddField">@{{table.name}}</option>
                                </select>
                            </td>
                            <td>
                                <select name="" id="" class="form-control" v-model="temporary.addField.optionValues.foreignValue.onUpdate">
                                    <option value="restrict">restrict</option>
                                    <option value="no action">no action</option>
                                    <option value="cascade">cascade</option>
                                    <option value="set null">set null</option>
                                </select>
                            </td>
                            <td>
                                <select name="" id="" class="form-control" v-model="temporary.addField.optionValues.foreignValue.onDelete">
                                    <option value="restrict">restrict</option>
                                    <option value="no action">no action</option>
                                    <option value="cascade">cascade</option>
                                    <option value="set null">set null</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary addFieldSubmitButton" v-on:click="addFieldSubmit">Add Field</button>
            </div>
        </div>
    </div>
</div>