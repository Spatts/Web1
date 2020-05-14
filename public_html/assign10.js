var xhttp;
function loadDocFiles(url, cFunction) 
{
  console.log(url);
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

function displayFiles(xhttp)
{
  var myObj = JSON.parse(xhttp.responseText);          
  var length = myObj.length;

  var list = "<table><tr><th>Filename</th><th>Type</th><th>CWD</th><th>Action</th></tr>";
  for(i = 0; i < length; ++i)
  {
    if(myObj[i].fileType == "dir")
    {        
       list = list + "<tr><td>" + myObj[i].fileName + "</td><td>" + myObj[i].fileType + "</td><td>" + myObj[i].filecwd
        + "</td><td>";
    }
    else
    {
      list = list + "<tr><td>" + myObj[i].fileName + "</td><td>" + myObj[i].fileType + "</td><td>" + myObj[i].filecwd
        + "</td><td>" +  "<button onclick=window.location='" + myObj[i].fileName + "'>click to show</button>" + "</td>";
    }
  }
  
  document.getElementById("dir").innerHTML = list;               
}
