function calc() {
   var year = parseFloat(document.getElementById("year").value);
   var apr = parseFloat(document.getElementById("apr").value);
   var loanAmount = parseFloat(document.getElementById("loanAmount").value);
   var monthly = 0;
   var errors = 0;
   
 if(year < 0 || year > 40)
   {
       alert("ERROR: Years need to be between 0 and 40.\n");
       year = 0;
       errors++;
   }

   if(apr < 0 || apr > 25)
   {
      alert("ERROR: Rate needs to be between 0 and 25.\n");
      apr = 0;
      errors++;
   }

   if(document.getElementById("loanAmount").value == "")
   {
      alert("ERROR: Fill out the Loan Amount field.\n");
      errors++;
   }

   if(document.getElementById("apr").value == "")
   {
      alert("ERROR: Fill out the Annual Percentage Rate field.\n");
      errors++;
   }

   if(document.getElementById("year").value == "")
   {
      alert("ERROR: Fill out the Loan Term field.\n");
      errors++;
   }
 
   if(errors == 0)
   {
      var rate100 = apr/100;
      var rateY = rate100/12;
      var rate1 = rateY+1;
      var years12 = year*12;
      var rateYears = Math.pow(rate1, -years12);
      var rateYears1 = 1-rateYears;
      var endRate = rateY/rateYears1;
      monthly = endRate*loanAmount;

      document.getElementById("results").innerHTML = monthly.toFixed(2);
   }
}

function reset() {
   apr = 0;
   loanAmount = 0;
   monthly = 0;
   document.getElementById("results").innerHTML = monthly.toFixed(2);
   getFocus();
}

function getFocus() {
    document.getElementById("apr").focus();
}

document.getElementById('calculate').addEventListener("click", calc);
document.getElementById('rButton').addEventListener("click", reset);

var a = 10;
var c = 10;
var b = "10";
var d = "10"
console.log(b+d+a)