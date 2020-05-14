<!DOCTYPE html>
<html>
<html lang = "en">
<head>
   <meta charset = "utf-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
   <meta name="viewport" content="width=device-width, initial-scale=1"/>
   <title>APR Calc</title>
   <link rel="stylesheet" type="text/css" href="assign05.css">
</head>
<body>
   <header>Mortage Calculator</header>

<?php
   $apr = $_GET["APR"];
   $loanTerms = $_GET["loanTerms"];
   $loanAmount = $_GET["loanAmount"];
   $monthlyPayment = 0;
   $errors = 0;
   
   $rate100 = $apr/100;
   $rate12 = $rate100/12;
   $rate1 = $rate12+1;
   $years12 = $loanTerms*12;

   $rateYears = pow($rate1, -$years12);
   $rateYears1 = 1-$rateYears;
   $endRate = $rate12/$rateYears1;
   $monthlyPayment = $endRate*$loanAmount;
?>

   <div>
      <p>
      Your monthly payments will be: $<?php echo number_format($monthlyPayment, 2, '.', ''); ?>
      </p>
   </div>

    <a href="http://157.201.194.254/~spatterson/mortgage.html">Return</a>
   <script type="text/javascript" src="assign05.js"></script>
</body>
</html>
