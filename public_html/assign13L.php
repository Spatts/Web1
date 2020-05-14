<?php
$myfile = fopen("PianoTimes/register.txt", "r") or die("Unable to open file!");
    $text = fread($myfile,filesize("PianoTimes/register.txt"));
    fclose($myfile);
?>
