function checkLogin(){
	var usename = document.getElementByName("username").value;
	var password = document.getElementByName("password").value;
	if(usename == "admin" && password == "12345"){
		alert("Login successfull! Welcome" + usename );
	}
	else if (usename != "admin" || password != "12345"){
		alert("Login failed!!!");
	}
}