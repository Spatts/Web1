var error3 = 0;
var error4 = 0;
var error5 = 0;

function phoneV() {
  var phoneNumber = document.getElementById("phoneVald");

  var posPhone = phoneNumber.value.search(/\d{3}-\d{3}-\d{4}$/);

  if(posPhone != 0)
  {
   document.getElementById("checkPN").innerHTML = "Enter a valid number";

   phoneNumber.focus();
   phoneNumber.select();
   error3=0;
  }
  else{
    document.getElementById("checkPN").innerHTML = "";
    error3=1;
  }
}

function ccnV() {
  var ccnNumber = document.getElementById("CCN");

  var posN = ccnNumber.value.search(/^[0-9]{16}$/);

  if(posN != 0)
  {
   document.getElementById("checkCCN").innerHTML = "Enter a valid credit card number";

   ccnNumber.focus();
   ccnNumber.select();
   error5=0;
  }
  else{
    document.getElementById("checkCCN").innerHTML = "";
    error5=1;
  }
}

function check(){
  var total = 0;
  var x = document.querySelectorAll("[name=Milk], [name=Cookies], [name=Pizza], [name=Soup Packets], [name=Redbull], [name=Steak]");
  for(var i = 0; i<x.length;i++)
  {
   if(x[i].checked) 
   {
      total = total + x[i].value * 1;
   }
  }
  if(total == 0)
  {
   error4 = 0;
   document.getElementById("purchaseError").innerHTML = "Please select an item before you submit your order.";
  }
  else
  {
   error4 = 1;
   document.getElementById("purchaseError").innerHTML = "";
  }

  document.getElementById("calculate").innerHTML = total.toFixed(2);
}

function reset(){
   document.getElementById("checkPN").innerHTML = "";
   document.getElementById("checkAd").innerHTML = "";
   document.getElementById("checkCCN").innerHTML = "";
   document.getElementById("calculate").innerHTML = "0.00";
}

function validate(){
   if(error3==1 && error4 ==1 && error5==1)
   { 
      return true;
   }
   if(error4 == 0)
   {
      document.getElementById("purchaseError").innerHTML = "Please select an item before you submit your order.";
      return false;
   }
   else
   {
      return false;
   }
}

document.getElementById('rButton').addEventListener("click", reset);