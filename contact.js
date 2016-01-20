function validateForm()  {
		var x = document.forms["myForm"]["name"].value;
		var y = document.forms["myForm"]["email"].value;
		var z = document.forms["myForm"]["message"].value;
		var formValid = true;
		
	if (x == null || x == "" || x.lenght < 2) {
        document.getElementById("x").style.background = "#ff9";
        document.getElementById("x").style.border = "solid 1px #900";
        formValid = false;
     } else {
		document.getElementById("x").style.background = "white";
        document.getElementById("x").style.border = "solid 1px black";
	 }
	 
	 if (y == null || y == "" || y.lenght < 3) {
        document.getElementById("y").style.background = "#ff9";
        document.getElementById("y").style.border = "solid 1px #900";
        formValid = false;
     } else {
		document.getElementById("y").style.background = "white";
        document.getElementById("y").style.border = "solid 1px black";
	 }
	 
	 if (z == null || z == "" || z.lenght < 3) {
        document.getElementById("z").style.background = "#ff9";
        document.getElementById("z").style.border = "solid 1px #900";
        formValid = false;
     } else {
		document.getElementById("z").style.background = "white";
        document.getElementById("z").style.border = "solid 1px black";
	 }
	 
	 if (formValid) {
        alert("L&#228;hetetty");
    }
	 
    return formValid;
 }
