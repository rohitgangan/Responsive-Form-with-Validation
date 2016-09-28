function validate()
      {
        var text; 
	
	if( document.myForm.Name.value == "" )
         {
         		document.getElementById("Namebox").innerHTML="Please provide your name";   
                       	document.myForm.Name.focus() ;
			return false;

			     
	 }
          
	
	  else if(document.myForm.Name.value !== "" && document.myForm.Email.value == "" )
         {
            	document.getElementById("Namebox").innerHTML="";
		document.getElementById("Emailbox").innerHTML="Please provide your Email";
		document.myForm.Email.focus() ;
           	return false;
         }
        
      	else if(document.myForm.Name.value !== "" && document.myForm.Email.value !== "" && document.myForm.Contact.value == "" )
         {
            	document.getElementById("Namebox").innerHTML="";
		document.getElementById("Emailbox").innerHTML="";
		document.getElementById("Contactbox").innerHTML="Please provide your Contact Number";
		document.myForm.Contact.focus();
            return false;
         }
         
	else if(document.myForm.Name.value !== "" && document.myForm.Email.value !== "" && document.myForm.Contact.value !== "" && document.myForm.Password.value == "")
         {
            	document.getElementById("Namebox").innerHTML="";
		document.getElementById("Emailbox").innerHTML="";
		document.getElementById("Contactbox").innerHTML="";
		document.getElementById("Passwordbox").innerHTML="Please provide password";
		document.myForm.Password.focus();
            	return false;
         }
	
		

	return true;
      }