<?php 

    $id = $_GET["id"];
    $file = fopen("./data/" . $id . ".data" , "r");
    $json = fread($file, filesize("./data/" . $id . ".data"));
    fclose($file        );
    $jsondecode = json_decode($json);
    if ($jsondecode){
        echo $json;
    }
    else {
        $data->error = 200;

    }




    //Error code
    // 1__ : soft error
    // 2__ : hard read error
    
?>