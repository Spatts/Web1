function loadDoc(url, cFunction) 
{
  var xhttp = new XMLHttpRequest();    
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

function myFunction(xhttp)
{
  document.getElementById("list").innerHTML = xhttp.responseText;
}