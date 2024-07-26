<?php 
class Creds {
    public $host = "localhost";
    public $user = "patchind_phpguy";
    public $password = "Flypigsfly1";
    public $database = "patchind_spoons";

    public function __construct($database = "patchind_spoons") {
        $this->database = $database;
    }
}