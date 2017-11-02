<?php
// CONNECT TO THE DATABASE
$DB_HOST = "127.0.0.1:3306";
$DB_NAME = "attdnc";
$DB_USER = "root";
$DB_PASS = "kiit";

$link = mysqli_connect($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
if($link === false){

    die("ERROR: Could not connect. " . mysqli_connect_error());

}
?>
