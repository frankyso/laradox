<div class="modal fade" tabindex="-1" role="dialog" id="exportModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">Export</h4>
            </div>
            <div class="modal-body">
                <div class="checkbox checkbox-slider--b">
                    <label>
                        <input type="checkbox" v-model="temporary.addField.optionValues.autoIncrement" v-bind:disabled="!temporary.addField.options.autoIncrementCheck">
                        <span>Export Migration</span>
                    </label>
                </div>
                <div class="checkbox checkbox-slider--b">
                    <label>
                        <input type="checkbox" v-model="temporary.addField.optionValues.autoIncrement" v-bind:disabled="!temporary.addField.options.autoIncrementCheck">
                        <span>Export Model</span>
                    </label>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary" v-on:click="createTableSubmit">Create Table</button>
            </div>
        </div>
    </div>
</div>