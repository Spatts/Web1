<?php
   $ptype = $_GET['performanceType']; 
   $name1 = $_GET['fname'];
   $name2 = $_GET['lname'];
   $name3 = $_GET['fname2'];
   $name4 = $_GET['lname2'];
   $nameid = $_GET['studentid'];
   $nameid2 = $_GET['studentid2'];
   $level = $_GET['level'];
   $instrument = $_GET['instrument'];
   $time = $_GET['timeslot'];
   $building = $_GET['building'];
   $roomNumber = $_GET['roomNumber'];

   if($name3 == "" && $name1 != "")
  {
    $list = "$ptype: $name1 $name2, $nameid(ID). Performing at the $level level playing the instrument: $instrument. At $time in the $building building, room $roomNumber.\n\n";
  }
  else if($name3 != "" && $name1 != "")
  {
   $list = "$ptype: $name1 $name2, $nameid(ID) performing with $name3 $name4, $nameid2(ID).\n      Performing at the $level level playing the instrument: $instrument. At $time in the $building building, room $roomNumber.\n\n";
  }

   $file = "PianoTimes/register.txt";
   file_put_contents($file, $list, FILE_APPEND);

  echo json_encode($list);
?>
