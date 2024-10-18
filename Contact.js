function Reg()
{
	//For First Name
	let fname=document.getElementById("Fname").value;
	if(fname=="")
	{
		document.getElementById("Fnamemsg").innerHTML="Please Enter First Name..!"; 
		return false;
	}
	else
	{
		document.getElementById("Fnamemsg").innerHTML=""; 
	}
	if(fname.length<3 || fname.length>15)
	{
		document.getElementById("Fnamemsg").innerHTML="Name length 4-15 char..!";
		return false;
	}
	else
	{
		document.getElementById("Fnamemsg").innerHTML=""; 
	}


	//For Last Name
	let lname=document.getElementById("Lname").value;
	if(lname=="")
	{
		document.getElementById("Lnamemsg").innerHTML="Please Enter Last Name..!"; 
		return false;
	}
	else
	{
		document.getElementById("Lnamemsg").innerHTML=""; 
	}


	//for Mobile Number
	let cnum=document.getElementById("Cnumber").value;
	if(cnum=="")
	{
		document.getElementById("mobilemsg").innerHTML="Please Enter contact No..!";
		return false;
	}
	else
	{
		document.getElementById("mobilemsg").innerHTML=""; 
	}
	if(isNaN(cnum))
	{
		document.getElementById("mobilemsg").innerHTML="Please Enter Number only..!";
		return false;
	}
	else
	{
		document.getElementById("mobilemsg").innerHTML=""; 
	}

	//Number start with 6,7,8,9  if(cnum.charAt(0)<=6)
	if((cnum.charAt(0)!=6) && (cnum.charAt(0)!=7) && (cnum.charAt(0)!=8) && (cnum.charAt(0)!=9)) 
	{
		document.getElementById("mobilemsg").innerHTML="Please Enter Valid contact..!";
		return false;	
	}
	else
	{
		document.getElementById("mobilemsg").innerHTML=""; 
	}

	//10 digit only  if(cnum.length!=10)
	if (cnum.length<10 || cnum.length>10) 
	{
		document.getElementById("mobilemsg").innerHTML="Please Enter 10 Digit No..!";
       	return false;
  	}
  	else
	{
		document.getElementById("mobilemsg").innerHTML=""; 
	}


	//For Email Id
	let email=document.getElementById("email").value;
	if(email=="")
  	{
  		document.getElementById("emailmsg").innerHTML="Please Enter Email..!";
  		return false;
  	}
  	else
	{
		document.getElementById("emailmsg").innerHTML=""; 
	}	
	if(email.charAt(email.length-3)!="." && email.charAt(email.length-4)!=".")
	{
		document.getElementById("emailmsg").innerHTML="Please Enter Valid Email..!";
  		return false;
	}
	else
	{
		document.getElementById("emailmsg").innerHTML=""; 
	}


	//for Guest
	let guest=document.getElementById("guest").value;
	if(guest=="")
	{
		document.getElementById("guestmsg").innerHTML="Please Enter Number of Guests..!";
		return false;
	}
	else
	{
		document.getElementById("guestmsg").innerHTML=""; 
	}


	//For Package
	let package=document.getElementById("package").value;
	if(package=="0")
	{
		document.getElementById("packagemsg").innerHTML="Please Select Any Package..!";
		return false;
	}
	else
	{
		document.getElementById("packagemsg").innerHTML=""; 
	}
	
	//For Type of room
	let room=document.getElementById("room").value;
	if(package=="0")
	{
		document.getElementById("roommsg").innerHTML="Please Select Type of Room..!";
		return false;
	}
	else
	{
		document.getElementById("roommsg").innerHTML=""; 
	}

	//For Pass
	let pass=document.getElementById("pass").value;
	if(package=="0")
	{
		document.getElementById("passmsg").innerHTML="Please Select Pass..!";
		return false;
	}
	else
	{
		document.getElementById("passmsg").innerHTML=""; 
	}
}