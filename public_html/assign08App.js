var error3 = 0;

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

function reset(){
   document.getElementById("checkPN").innerHTML = "";
   document.getElementById("checkAd").innerHTML = "";
}

function validate(){
   if(error3==1)
   { 
      return true;
   }
   else
   {
      return false;
   }
}
