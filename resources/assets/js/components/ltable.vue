<template>
    <div class="panel laradox-table" v-bind:class="'panel-' + table.style.tableColorClass" v-bind:id="table.uuid">
        <div class="panel-heading">
            {{table.name}}
            <div class="pull-right m-l-md" v-if="readonly=='0'">
              <!-- <span class="ti ti-server m-r-xs"></span> --> 
              <span data-toggle="tooltip" data-placement="top" title="Relationships" class="ti ti-plug pointer m-r-xs"  v-on:click="showRelation(table.uuid)"></span> 
              <span data-toggle="tooltip" data-placement="top" title="Edit table" class="ti ti-pencil m-r-xs" v-on:click="editTable(index)"></span> 
              <span data-toggle="tooltip" data-placement="top" title="Delete table" v-on:click="deleteTable(table.uuid)" class="ti ti-trash"></span>
              
              </div>
        </div>
        <ul class="list-group sortable laradox-list">
            <li v-bind:id="table.uuid + '_' + field.uuid" v-bind:key="index" class="list-group-item" v-for="(field, index) in table.fields"><strong>{{field.name}}</strong> <i>{{field.type}}</i> 
                <div v-if="readonly=='0'" class="tool pull-right">
                    <span data-toggle="tooltip" data-placement="top" title="Edit field" class="ti ti-pencil pointer" v-on:click="editField(table.uuid, index)"></span> 
                    <span data-toggle="tooltip" data-placement="top" title="Sort" class="ti ti-arrows-vertical handle"></span>
                    <span data-toggle="tooltip" data-placement="top" title="Delete field" class="ti ti-trash pointer" v-on:click="deleteField(index, table.uuid)"></span>
                </div>
            </li>
        </ul>
        <div class="panel-footer" v-if="readonly=='0'">
            <a href="javascript:void(0);" v-on:click="addField(index)" class="btn btn-block btn-xs btn-primary">Add Field</a>
        </div>
    </div>
</template>

<script>
export default {
  mounted() {
    var me = this;
    $("#" + this.table.uuid).css({
      top: this.table.style.position.top,
      left: this.table.style.position.left
    });

    if(this.readonly == '0')
    {

    $("#" + this.table.uuid).draggable({
      scroll: true,
      handle: ".panel-heading",
      drag: function(event, ui) {
        me.table.style.position.top = ui.position.top;
        me.table.style.position.left = ui.position.left;
        // console.log(me.table.style.position.left);
      }
    });

    
      $(".sortable").sortable({
        handle: ".handle",
        update: function() {
          me.updateFieldOrder($(this).sortable("toArray"));
        }
      });
    }

    $('[data-toggle="tooltip"]').tooltip();
  },
  props: ["table", "index", "readonly"],
  watch: {
    "table.style.position": {
      handler: function() {
        this.updatePositionDebounce();
      },
      deep: true
    }
  },
  methods: {
    editTable: function(key) {
      this.$parent.$options.methods.editTable(key);
    },
    deleteTable: function(uuid) {
      this.$parent.$options.methods.deleteTable(uuid);
    },
    addField: function(key) {
      this.$parent.$options.methods.addField(key);
    },
    editField: function(tableUuid, fieldIndex) {
      this.$parent.$options.methods.editField(tableUuid, fieldIndex);
    },
    updateFieldOrder: function(fieldArray) {
      this.$parent.$options.methods.UpdateFieldOrder(
        this.table.uuid,
        fieldArray
      );
    },
    deleteField: function(key, tableuid) {
      this.$parent.$options.methods.deleteField(
        this.table.fields[key].uuid,
        tableuid
      );
    },
    showRelation: function(tableuid) {
      this.$parent.$options.methods.showRelation(tableuid);
    },
    updatePositionDebounce: _.debounce(function() {
      setTimeout(
        function() {
          this.updatePosition();
        }.bind(this),
        1000
      );
    }, 500),
    updatePosition: function() {
      var me = this;
      axios
        .post(
          "/api/v1/tables/" + me.table.uuid + "/position",
          me.table.style.position
        )
        .then(function(response) {
          // self.schema.tables=response.data.responseItem;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
