<?php
   $field1 = $_GET['first']; 
   $field2 = $_GET['last'];
   $field3 = $_GET['address'];
   $field4 = $_GET['phoneNumber'];
   $field5 = $_GET['creditNumber'];
   $field6 = $_GET['creditCard'];
   $field7 = $_GET['month'];
   $field8 = $_GET['year'];
   $item1 = $_GET['Milk']; 
   $item2 = $_GET['Cookies']; 
   $item3 = $_GET['Pizza']; 
   $item4 = $_GET['Soup Packets']; 
   $item5 = $_GET['Redbull']; 
   $item6 = $_GET['Steak']; 
?>

<!DOCTYPE html>
<html lang = "en">
<head>
   <meta charset = "utf-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
   <meta name="viewport" content="width=device-width, initial-scale=1"/>
   <title>Buy Here Confirm Purchase</title>
   <link rel="stylesheet" type="text/css" href="assign11.css">
</head>
<body>
    <h2>Confirm Your Purchase</h2>
    <h3>Your Information</h3>
    <p>
        <?php
            echo "First Name: $field1<br />";
            echo "Last Name: $field2<br />";
            echo "Address: $field3<br />";
            echo "Phone Number: $field4<br />";
            echo "Credit Card: $field6<br />";
            echo "Credit Card Number: $field5<br />";
            echo "Experation Date: $field7 / $field8<br />";
        ?> 
    </p> 

    <p>
        <?php
            echo "Items in cart: <br />";
            $total = 0;
            $keys = array_keys($_GET);
            foreach ($keys as $key)
            {
                $str = strpos("$_GET[$key]", ".");
                if ($str !== false)
                {
                    echo "$key is $$_GET[$key] <br />";
                    $total += $_GET[$key];
                }
            }
            echo "Total: $";
            echo number_format($total, 2, '.', '')
        ?>
    </p>

    <form method="get" action="assign11_a.php">
          <input class="button" id="submitB" name="bSubmit" type="submit" value="Submit Order">
          <input class="button" id="cancelB" name="bCancel" type="submit" value="Cancel Order">
    </form> 
</body>
</html>
