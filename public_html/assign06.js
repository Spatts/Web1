var error1 = 0;
var error2 = 0;
var error3 = 0;

function addressV() {
  var address = document.getElementById("addressID");

  var posAd = address.value.search(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,}), ((?=.*[a-z])(?=.*[A-Z]).{1,}), ([A-Z]{2}) ([0-9]{5})$/);

  if(posAd != 0)
  {
   document.getElementById("checkAddress").innerHTML = "Enter a valid address";

   address.focus();
   address.select();
   error2=0;
  }
  else{
    document.getElementById("checkAddress").innerHTML = "";
    error2=1;
  }
}

function phoneV() {
  var posPhone = phoneNumber.value.search(/\d{3}-\d{3}-\d{4}$/);
  var phoneNumber = document.getElementById("phoneVald");
  if(posPhone != 0)
  {
   document.getElementById("checkPN").innerHTML = "Enter a valid number";

   phoneNumber.focus();
   phoneNumber.select();
   error1=0;
  }
  else{
    document.getElementById("checkPN").innerHTML = "";
    error1=1;
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
   error3=0;
  }
  else{
    document.getElementById("checkCCN").innerHTML = "";
    error3=1;
  }
}

function check(){
  var total = 0;
  var x = document.querySelectorAll("[name=item]");
  for(var i = 0; i<x.length;i++)
  {
   if(x[i].checked) 
   {
      total = total + x[i].value * 1;
   }
  }
  document.getElementById("calculate").innerHTML = total.toFixed(2);
}

function validate(){
   if(error1==1 && error2==1 && error3==1)
   { 
      return true;
   }
   else
   {
      return false;
   }
}

function reset(){
   document.getElementById("checkPN").innerHTML = "";
   document.getElementById("checkAddress").innerHTML = "";
   document.getElementById("checkCCN").innerHTML = "";
}

document.getElementById('rButton').addEventListener("click", reset);