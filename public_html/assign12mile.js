var url;
var xhttp;

function getFileName() {
    url = document.getElementById("fileNameStudent").value;
    return url;
}

function loadDocStudent(url, cFunction) 
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

function myFunction1(xhttp)
{
       var myObj = JSON.parse(xhttp.responseText);
                  var list = "<table border = '1'><tr><th>Name</th><th>Address</th><th>Major</th><th>GPA</th></tr>\n";

                  for (var i = 0; i < myObj.students.length; i++)
                  {
                     list = list + "<tr><td>" + myObj.students[i].first + " " + myObj.students[i].last + "</td>" +
                            "<td>" + myObj.students[i].address.city + ", " + myObj.students[i].address.state + " " +
                            myObj.students[i].address.zip + "</td>" +
                            "<td>" + myObj.students[i].major + "</td>" +
                            "<td>" + myObj.students[i].gpa + "</td></tr>\n";
                  }
 
      document.getElementById("student").innerHTML = list;
}

function processJSON_Student()
{
  if (xhttp.readyState == 4)
  {
    if (xhttp.status == 200)
    {
        var myObj = JSON.parse(xhttp.responseText);
        var list = "<table border = '1'><tr><th>First</th><th>Last</th><th>Address</th><th>Major</th><th>GPA</th></tr>\n";

        for (var i = 0; i < myObj.students.length; i++)
        {
              list  = list + "<tr><td>" + myObj.students[i].first + " " + myObj.students[i].last + " " + myObj.students[i].address.city + " " + myObj.students[i].address.state + " " + myObj.students[i].address.zip + " " + myObj.students[i].major + " " + myObj.students[i].gpa + " " + "</td></tr>\n";
         }
      document.getElementById("student").innerHTML = list;
    }
    else
    {
        alert("There was a problem retrieving the text file:" + xhttp.statusText);
    }
  }
}
