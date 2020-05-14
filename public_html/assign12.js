var error3 = 0;
var error4 = 0;
var error2 = 0;
var error1 = 0;
var queryString;
var url;
var xhttp;

function cSCity()
{
   if(document.getElementById("sCity").value == undefined)
   {
      cSCity.focus();
      cSCity.select();
      document.getElementById("checkSC").innerHTML ="Please fill out the city";
      error1 = 0;
   }
   else
   {
      document.getElementById("checkSC").innerHTML ="";
      error1 = 1;
   }
}

function cECity()
{
   if(document.getElementById("eCity").value == undefined)
   {
      cECity.focus();
      cECity.select();
      document.getElementById("checkEC").innerHTML ="Please fill out the city";
      error2 = 0;
   }
   else
   {
      document.getElementById("checkEC").innerHTML ="";
      error2 = 1;
   }
}


function cEState() {
  var cEState = document.getElementById("eState");
  var eState1 = cEState.value.search(/^[a-zA-Z]{2}$/);

  if(eState1 != 0)
  {
   document.getElementById("checkES").innerHTML = "It must be the state initials";

   cEState.focus();
   cEState.select();
   error3=0;
  }
  else{
    document.getElementById("checkES").innerHTML = "";
    error3=1;
  }
}
function cSState() {
  var cSState = document.getElementById("sState");
  var sState1 = cSState.value.search(/^[a-zA-Z]{2}$/);

  if(sState1 != 0)
  {
   document.getElementById("checkSS").innerHTML = "It must be the state initials";

   cSState.focus();
   cSState.select();
   error4=0;
  }
  else{
    document.getElementById("checkSS").innerHTML = "";
    error4=1;
  }
}

function validate(){
   if(error3==1 && error4==1 && error1 == 1 && error2 == 1)
   { 
      document.getElementById("checkES").innerHTML = "";
      queryString = "?startCity=" + document.getElementById("sCity").value + 
      "&startState=" + document.getElementById("sState").value + "&endCity=" + 
      document.getElementById("eCity").value + "&endState=" + 
      document.getElementById("eState").value; 
      sendData(queryString);
   }
   else
   {
      document.getElementById("checkES").innerHTML = "Please fill out form.";
   }
}

function sendData(queryString) 
{ 
  loadData("/cgi-bin/cs213/mileageAjaxJSON" + queryString, myFunction1); 
}

function loadData(url, cFunction) 
{ 
  xhttp = new XMLHttpRequest();   
  xhttp.onreadystatechange = function() 
  {
      if (this.readyState == 4 && this.status == 200)
      {
        cFunction(this);
      }
  };
   xhttp.open("GET", url, true);
   xhttp.send();
} 
   
function myFunction1(xhttp)
{
   var myObj = JSON.parse(xhttp.responseText);
   var list = "From ";

   list = list + myObj.trip.startcity + ", " + myObj.trip.startstate + " to " + myObj.trip.endcity + ", " + myObj.trip.endstate + " is " +
   myObj.trip.miles + " miles.";
   document.getElementById("miles").innerHTML = list;

   var list2 = "Modes of transportation: ";
   if(myObj.trip.tmode != undefined)
   {
      var j = 1;
      for(var i = 0; i < myObj.trip.tmode.length; i++)
      {
         if(j == myObj.trip.tmode.length)
         {
            list2 = list2 + " and " + myObj.trip.tmode[i];
         }
         else
         {
            list2 = list2 + myObj.trip.tmode[i] +  ", ";
         }
         j++;
      }
      document.getElementById("tMode").innerHTML = list2;
   }

}


function reset(){
   document.getElementById("checkSS").innerHTML = "";
   document.getElementById("checkES").innerHTML = "";
   document.getElementById("tMode").innerHTML = "";
   document.getElementById("miles").innerHTML = "";
   document.getElementById("sCity").value = "";
   document.getElementById("sState").value = "";
   document.getElementById("eCity").value = "";
   document.getElementById("eState").value = "";
   document.getElementById("checkSC").innerHTML = "";
   document.getElementById("checkEC").innerHTML = "";
   document.getElementById("checkForm").innerHTML = "";
   error1 = 0;
   error2 = 0;
   error3 = 0;
   error4 = 0;
}