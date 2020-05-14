<?php
   $field1 = $_GET['bSubmit']; 
   $field2 = $_GET['bCancel'];
?>

<!DOCTYPE html>
<html lang = "en">
<head>
   <meta charset = "utf-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
   <meta name="viewport" content="width=device-width, initial-scale=1"/>
   <title>Buy Here Confirmed Order</title>
   <link rel="stylesheet" type="text/css" href="assign11.css">
</head>
<body>
    <h3>Comfirmation Screen</h3>

    <p>
        <?php
            $keys = array_keys($_GET);
            foreach ($keys as $key)
            {
                $str = strpos("$_GET[$key]", "u");
                if ($str ==  true)
                {
                    echo "Order placed. <br />Shipping takes 3-4 business days. <br />Thank you for your purchase.";
                }
                else
                {
                    echo "You canceled your order";
                }
            }
        ?>
    </p>
    <a href=assign11.html>Shop Again</a> 
</body>
</html>