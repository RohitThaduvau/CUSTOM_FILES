<?php

    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    $lines = file("tc_raw.html");

    $num = 1;

    $str = "";

    foreach($lines as $cur_line){
        
        if($num == 1) $str.='"'.trim($cur_line).'"';
        if($num == 2) $str.=' => ';
        if($num == 3) $str.='"'.trim($cur_line).'"'; 
        
        if($num == 4) {
            $str.=', <br>';
            $num = 1;
        }
        else{
            $num++;
        }


    }

    echo $str;

    

?>