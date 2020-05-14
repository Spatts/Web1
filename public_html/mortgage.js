sfunction validate() {
   var apr = parseFloat(document.getElementById("apr").value);
   var loanTerms = parseFloat(document.getElementById("loanTerms").value);
   var loanAmount = parseFloat(document.getElementById("loanAmount").value);
   var monthlyPayment = 0;
   var errors = 0;
   
   if(apr < 0 || apr > 25)
   {
      alert("Annual Percentage Rate needs to be between 0 and 25%.\n");
      apr = 0;
      document.getElementById("apr").focus();
      errors++;
   }
   if(loanTerms < 0 || loanTerms > 40)
   {
       alert("Loan terms needs to be between 0 and 40.\n");
       loanTerms = 0;
       document.getElementById("loanTerms").focus();
       errors++;
   }
   if(loanAmount < 0)
   {
       alert("Loan amount needs to be above 0.\n");
       loanAmount = 0;
       document.getElementById("loanAmount").focus();
       errors++;
   }
   if(document.getElementById("apr").value == "")
   {
      alert("You need to fill out the Annual Percentage Rate field.\n");
      errors++;
      document.getElementById("apr").focus();
   }
   if(document.getElementById("loanTerms").value == "")
   {
      alert("You need to fill out the Loan Terms field.\n");
      errors++;
      document.getElementById("loanTerms").focus();
   }
   if(document.getElementById("loanAmount").value == "")
   {
      alert("You need to fill out the Loan Amount field.\n");
      errors++;   
      document.getElementById("loanAmount").focus();
   }

   if(errors > 0)
   {
      return false;
   }
   else
   {
      return true;
   }
}

function reset() {
   apr = 0;
   loanAmount = 0;
   monthlyPayment = 0;
   document.getElementById("results").innerHTML = monthlyPayment.toFixed(2);
   getFocus();
}

function getFocus() {
    document.getElementById("apr").focus();
}

document.getElementById('calculate').addEventListener("click", calc);
document.getElementById('rButton').addEventListener("click", reset);
