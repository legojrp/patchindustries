<?php 
class DataAccess { // creates access to data
    protected $idFile;
    protected $pathToData;
    private $isUser = false;
    private $passwordConfirmed = false;
    public $id;
    protected $password;
    function __construct(){
        $this->idFile = fopen("listofid.txt", "r+") or die("Access Function Failed: Failure Logged");
    }
    function checkForCredential($setflags = false, $checkPassword = false) { // checks the credentials of the stored id and password
        while (!feof($this->idFile)){
            $parts = $this->lineParse(fgets($this->idFile));
            if ($parts[0] == $this->id && $checkPassword && $this->password == $parts[1]){
                if ($setflags){
                    $this->passwordConfirmed = true;
                    $this->isUser = true;
                }
                rewind($this->idFile);
                return true;
            }
            else if($parts[0] == $this->id){
                if ($setflags){
                    $this->isUser = true;
                }
                rewind($this->idFile);
                return true;

            }
        }
        return false;
    }
    function  lineParse($line) { // parses a string for an id and as password hash, returns both in an array
        return explode( " - ", $line,);
    }
    function createUser($password){
        do {

            $length = 8;
            $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $id = '';
            for ($i = 0; $i < $length; $i++) {
                $randomIndex = rand(0, strlen($characters) - 1);
                $id .= $characters[$randomIndex];
            }
        }       
        while (!$this->checkForCredential($id));

        $this->id = $id;

        $this->setPassword($password);
        
        fwrite($this->idFile, "$this->id - $this->password\n");

        if (!fopen("data/$this->id" . ".data", "x+")){
            echo "Error Creating Account: Logged Error";
            return false;
        }
        $this->pathToData = "data/$this->id" . ".data";

    }
    
    function getIdData(){
        $json = readfile("data/$this->id" . ".data");
        $json = json_decode($json);
        return $json;
    }
    
    //setters
    function setPath(){ // /** sets path of data, from the data folder, if id is there, plus if it exists 
        if ($this->id && file_exists("data/" . $this->id . ".data")){
            $this->pathToData = "data/" . $this->id . ".data";
        }
        return false;
    }
    function setId($id){ // sets id 
        $this->id = $id;
    }
    function setPassword($password){ // sets password plus hashes
        $hashed = hash("sha256", $password);
        $this->password = $password;
        
    }
    
    //getters
    

    
}





class UserAccount extends DataAccess {}

?>