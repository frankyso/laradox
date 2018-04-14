<?php
namespace App\Services\MigrationGenerator;

use Zipper;
use Storage;

class MigrationGenerator
{
    private $schema;
    private $migration;
    private $migrationTemplate;
    private $modelTemplate;
    private $storagePath;
    private $migrationPath;
    private $modelPath;
    private $storageZipPath;
    private $migrationReplacer = [
                                    "FIELDS"        =>  "", 
                                    "POSTFIELDS"    =>  "", 
                                    "TABLE_NAME"    =>  "",
                                    "CLASSNAME"     =>  ""
                                ];
    private $modelReplacer = [
        "NAMESPACE"         =>  "", 
        "TABLE_NAME"        =>  "",
        "FILLABLE"          =>  "", 
        "GUARDED"           =>  "", 
        "HIDDEN"            =>  "", 
        "VISIBLE"           =>  "", 
        "FUNCTIONS"         =>  "",
        "CLASSNAME"         =>  ""
    ];

    
    private $migrationCompiled    = "";
    private $modelCompiled    = "";
    

    public function __construct($schema)
    {
        $this->schema             =   $schema;
        $this->storagePath        =   "schemas/generated/".$schema->id;
        $this->storageZipPath     =   "schemas/".$schema->id."-".studly_case($schema->name).".zip";
        $this->migrationPath      =   $this->storagePath."/database/migrations";
        $this->modelPath          =   $this->storagePath."/app";

        $this->migrationTemplate     =   app_path()."/Services/MigrationGenerator/template/migration.laradox";
        $this->modelTemplate         =   app_path()."/Services/MigrationGenerator/template/model.laradox";
    }

    public function generate()
    {
        // Clear Folder
        Storage::disk('local')->deleteDirectory($this->storagePath);
        
        $this->generateMigration();
        // Zip It
        $files  =   Storage::disk('local')->allFiles($this->storagePath);

        $temporaryName  =   str_random(10);
        $zip    =   Zipper::make('schema-zip/'.$temporaryName.'.zip');
        foreach($files as $file)
        {
            $zip->add(storage_path('app/'.$file));
        }
        $zip->close();

        return 'schema-zip/'.$temporaryName.'.zip';
    }

    private function generateMigration()
    {
        // Making the replacer
        foreach($this->schema->tables as $table)
        {
            $migrationFilePrefix    =   date("Y_m_d_His", strtotime($table->created_at));
            $migrationFilePath      =   $this->migrationPath."/".$migrationFilePrefix."_create_".snake_case($table->name)."_table.php";

            $modelFilePath          =   $this->modelPath."/".$table->model_name.".php";

            $this->generateMigrationReplacer($table);
            $this->generateModelReplacer($table);
            Storage::disk('local')->put($migrationFilePath, $this->migrationCompiled);
            Storage::disk('local')->put($modelFilePath, $this->modelCompiled);
        }
    }

    private function generateMigrationReplacer($table)
    {
        $this->migrationReplacer['TABLE_NAME']  =   $table->name;
        $this->migrationReplacer['CLASSNAME']   =   ucfirst(camel_case("Create ".$table->name." Table"));
        $this->generateMigrationFields($table);

        // Start to Replace
        $template   =   fread(fopen($this->migrationTemplate, "r"), filesize($this->migrationTemplate));
        foreach($this->migrationReplacer as $key => $value)
        {
            $template   =   str_replace("[%".$key."%]", $value, $template);
        }

        $this->migrationCompiled    =   $template;
    }

    private function generateModelReplacer($table)
    {
        $this->modelReplacer['NAMESPACE']   =   $table->schema->namespace;
        $this->modelReplacer["TABLE_NAME"]  =   $table->name;
        $this->modelReplacer["FUNCTIONS"]   =   "";
        
        // Generating Functions
        foreach($table->modelRelationshipsPrimary as $relation)
        {
            // foreign key
            $foreignKey     =   ($relation->foreign_key==null)?"":", '".$relation->foreign_key."'";

            $this->modelReplacer["FUNCTIONS"]  .=   "    public function ".$relation->function_name."() {\n"
            ."        return \$this->".$relation->type."('".$table->schema->namespace."\\".$relation->targetTable->model_name."'".$foreignKey.");\n"
            ."    }\n\n";
        }

        // Formatting VISIBLE, HIDDEN, GUARDED, FILLABLE
        $this->modelReplacer['FILLABLE']        =   ($this->modelReplacer['FILLABLE']=="")?"":"protected \$fillable = [".$this->modelReplacer['FILLABLE']."]";
        $this->modelReplacer['GUARDED']         =   ($this->modelReplacer['GUARDED']=="")?"":"protected \$guarded = [".$this->modelReplacer['GUARDED']."]";
        $this->modelReplacer['HIDDEN']          =   ($this->modelReplacer['HIDDEN']=="")?"":"protected \$hidden = [".$this->modelReplacer['HIDDEN']."]";
        $this->modelReplacer['VISIBLE']         =   ($this->modelReplacer['VISIBLE']=="")?"":"protected \$visible = [".$this->modelReplacer['VISIBLE']."]";
        $this->modelReplacer['CLASSNAME']       =   $table->model_name;

        $template   =   fread(fopen($this->modelTemplate, "r"), filesize($this->modelTemplate));
        foreach($this->modelReplacer as $key => $value)
        {
            $template   =   str_replace("[%".$key."%]", $value, $template);
        }

        $this->modelCompiled    =   $template;
    }

    private function generateMigrationFields($table)
    {
        $this->migrationReplacer['FIELDS'] = "";
        foreach($table->fields as $field)
        {
            $fieldString  =   "";
            $postString  =   "";
            $sencodaryParameter     =   "";

            $fieldLength    =   ($field->length==null)?"":", ".$field->length;
            $decimalLength  =   ($field->decimal==null)?"":", ".$field->decimal;
            $enumField      =   ($field->enum=="[null]")?"":", ".$field->enum;

            if($field->type=="enum") {
                $sencodaryParameter    =   $enumField;
            } else {
                $sencodaryParameter    =   $fieldLength.$decimalLength;
            }

            $fieldString    =   '            $table->'.$field->type.'(\''.$field->name.'\''.$sencodaryParameter.')';
            if($field->attrib_unsigned==1) {
                $fieldString .= "->unsigned()";
            }
    
            if($field->attrib_nullable==1) {
                $fieldString .= "->nullable()";
            }
            $this->migrationReplacer['FIELDS']       .=   $fieldString."; \r\n";

            // Add Primary, Index, Unique
            if($field->attrib_primary == 1) {
                $this->migrationReplacer['POSTFIELDS']  .=   '            $table->primary(\''.$field->name.'\'); \r\n';
            }

            if($field->attrib_index == 1) {
                $this->migrationReplacer['POSTFIELDS']  .=   '            $table->index(\''.$field->name.'\'); \r\n';
            }

            if($field->attrib_unique == 1) {
                $this->migrationReplacer['POSTFIELDS']  .=   '            $table->unique(\''.$field->name.'\'); \r\n';
            }

            // Making An Intro Files for Model
            if($field->attrib_fillable == 1)
            {
                $this->modelReplacer['FILLABLE']    .=  "'".$field->name."',";
            }

            if($field->attrib_guarded == 1)
            {
                $this->modelReplacer['GUARDED']    .=  "'".$field->name."',";
            }

            if($field->attrib_hidden == 1)
            {
                $this->modelReplacer['HIDDEN']    .=  "'".$field->name."',";
            }

            if($field->attrib_visible == 1)
            {
                $this->modelReplacer['VISIBLE']    .=  "'".$field->name."',";
            }
        }
    }
}