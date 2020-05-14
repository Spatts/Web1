var error1 = 0;
var error2 = 0;
var error3 = 0;
var error4 = 0;
var error5 = 0;
var pType;
var skillLevel;
var instrument;
var time = "9:00 am";
var firstName;
var lastName;
var studentId;
var masterDuetfName = "";
var masterDuetlName = "";
var masterStudentId = "";
var list = "";
var building1= "Romney";
var number;
var url;
var room = 148;
var queryString = "";

function cSID() {
  var studentID1 = document.getElementById("cstudentID");

  var sID1 = studentID1.value.search(/^[0-9]{9}$/);

  if(sID1 != 0)
  {
   document.getElementById("eSID").innerHTML = "Enter a valid student ID (9 numbers)";

   studentID1.focus();
   studentID1.select();
   error1=0;
  }
  else{
    document.getElementById("eSID").innerHTML = "";
    error1=1;
  }
}

function cSIDDuet() {
  var studentID1Duet = document.getElementById("cstudentIDDuet");

  var sID1Duet = studentID1Duet.value.search(/^[0-9]{9}$/);

  if(sID1Duet != 0)
  {
   document.getElementById("eSIDDuet").innerHTML = "Enter a valid student ID (9 numbers)";

   studentID1Duet.focus();
   studentID1Duet.select();
   error2=1;
  }
  else{
    document.getElementById("eSIDDuet").innerHTML = "";
    error2=0;
  }
}

function duetMasterPiece(){
  if(document.getElementById("duetMasterInput1").checked == true)
  {
    document.getElementById("duetForm").style.display = "block";
  }
  else
  {
    document.getElementById("duetForm").style.display = "none";
  }
}

function reset(){
   document.getElementById("eSIDDuet").innerHTML = "";
   document.getElementById("eSID").innerHTML = "";
   document.getElementById("duetForm").style.display = "none";
   error1 = 0;
   error2 = 0;
   error3 = 0;
   error4 = 0;
   error5 = 0;
   pType = "";
   skillLevel = "";
   instrument = "";
   time = "9:00 am";
   firstName = "";
   lastName = "";
   studentId = "";
   masterDuetfName = "0";
   masterDuetlName = "0";
   masterStudentId = "0";
   list = "";
   number = "";
   url = "";
   building1= "Romney";
   room = 148;
  document.getElementById("fName1").value = "";
  document.getElementById("fName2").value = "";
  document.getElementById("lName1").value = "";
  document.getElementById("lName2").value = "";
  document.getElementById("cstudentID").value = "";
  document.getElementById("cstudentIDDuet").value = "";
  document.getElementById("duetForm").style.display = "none";
  document.getElementById("slotTime").value = "9:00 am";
  document.getElementById("roomNumberId").value = 148;
  document.getElementById("locationId").value = "Romney";
  document.getElementById("fillout").innerHTML = "";
  document.getElementById("solo1").checked = false;
  document.getElementById("duetMasterInput1").checked = false;
  document.getElementById("concerto1").checked = false;
  document.getElementById("beginner").checked = false;
  document.getElementById("intermediate").checked = false;
  document.getElementById("pre-advanced").checked = false;
  document.getElementById("advanced").checked = false;
  document.getElementById("piano").checked = false;
  document.getElementById("voice").checked = false;
  document.getElementById("string").checked = false;
  document.getElementById("organ").checked = false;
  document.getElementById("otherI").checked = false;
}

document.getElementById('rButton').addEventListener("click", reset);

function radioDataP(){
  pType = document.getElementsByName("performanceType");
  if(pType[0].checked)
  {
    pType = document.getElementById("solo1").value;
    masterDuetfName = "";
    masterDuetlName = "";
    masterStudentId = "";
    error3 = 1;
  }
  if(pType[1].checked)
  {
    pType = document.getElementById("duetMasterInput1").value;
    error3 = 1;
  }
  if(pType[2].checked)
  {
    pType = document.getElementById("concerto1").value;
    masterDuetfName = "";
    masterDuetlName = "";
    masterStudentId = "";
    error3 = 1;
  }
}

function radioDataS(){
  skillLevel = document.getElementsByName("skillLevelF");
  if(skillLevel[0].checked)
  {
    skillLevel = document.getElementById("beginner").value;
    error4 = 1;
  }
  if(skillLevel[1].checked)
  {
    skillLevel = document.getElementById("intermediate").value;
    error4 = 1;
  }
  if(skillLevel[2].checked)
  {
    skillLevel = document.getElementById("pre-advanced").value;
    error4 = 1;
  }
  if(skillLevel[3].checked)
  {
    skillLevel = document.getElementById("advanced").value;
    error4 = 1;
  }
}

function radioDataI(){
  instrument = document.getElementsByName("instrumentF");
  if(instrument[0].checked)
  {
    instrument = document.getElementById("piano").value;
    error5 = 1;
  }
  if(instrument[1].checked)
  {
    instrument = document.getElementById("voice").value;
    error5 = 1;
  }
  if(instrument[2].checked)
  {
    instrument = document.getElementById("string").value;
    error5 = 1;
  }
  if(instrument[3].checked)
  {
    instrument = document.getElementById("organ").value;
    error5 = 1;
  }
  if(instrument[4].checked)
  {
    instrument = document.getElementById("otherI").value;
    error5 = 1;
  }
}

function getTime(){
  var e = document.getElementById("slotTime");
  time = e.options[e.selectedIndex].value;
}

function getLocation(){
  var l = document.getElementById("locationId");
  building1 = l.options[l.selectedIndex].value;
}

function getRoomNumber(){
  var n = document.getElementById("roomNumberId");
  room = n.options[n.selectedIndex].value;
}

function getRestofData(){
  firstName = document.getElementById("fName1").value;
  lastName = document.getElementById("lName1").value;
  studentId = document.getElementById("cstudentID").value;

  if(document.getElementById("fName2").value != 0)
  {
    masterDuetfName = document.getElementById("fName2").value;
    masterDuetlName = document.getElementById("lName2").value;
    masterStudentId = document.getElementById("cstudentIDDuet").value;
  }

    if(document.getElementById("fName2").value == 0)
  {
    masterDuetfName = "";
    masterDuetlName = "";
    masterStudentId = "";
  }
}

function validate(){
   if(error1==1 && error2==0 && error3 ==1 && error4 ==1 && error5 ==1)
   { 
      getRestofData();
      queryString = 
      "?performanceType=" + pType +
      "&fname=" + firstName +
      "&lname=" + lastName +
      "&studentid=" + studentId +
      "&fname2=" + masterDuetfName +
      "&lname2=" + masterDuetlName +
      "&studentid2=" + masterStudentId +
      "&level=" + skillLevel +
      "&instrument=" + instrument +
      "&timeslot=" + time +
      "&building=" + building1 +
      "&roomNumber=" + room; 
      console.log(queryString);
      url = "assign13.php" + queryString;
      loadData(url, myFunction1);
      reset();
   }
   else
   {
      document.getElementById("fillout").innerHTML = "Please fill out completely.";
   }
}

function loadData(url, cFunction) 
{ 
  xhttp = new XMLHttpRequest();   
  xhttp.onreadystatechange = function() 
  {
      if (this.readyState == 4 && this.status == 200)
      {
        cFunction(this);
        console.log(url);
      }
  };
   xhttp.open("GET", url, true);
   xhttp.send();
} 

function myFunction1(xhttp)
{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = this.responseText;
    document.getElementById("signedUp1").innerHTML = myObj;
  }
};
xmlhttp.open("GET", "PianoTimes/register.txt", true);
xmlhttp.send();
}