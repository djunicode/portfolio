function getdata()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function()
	{
		if (xhttp.readyState==4 && xhttp.status==200) 
		{
			var javaobj=JSON.parse(xhttp.responseText);
			//Contact
			document.getElementById("remail").innerHTML+=javaobj.contactme.email;
			document.getElementById("rmobile").innerHTML+=javaobj.contactme.mobile;
			document.getElementById("rgithub").innerHTML+=javaobj.contactme.github;
			// Personal Details
			document.getElementById("rname").innerHTML+=javaobj.basicinfo.name+"<br>";
			document.getElementById("rdob").innerHTML+=javaobj.basicinfo.dob+"<br>";
			for(let address of javaobj.basicinfo.address)
			{
			   document.getElementById("address").innerHTML+=address.line+"<br>";
		    }
		    //Education	
		    for(let e of javaobj.education)
			{
				document.getElementById('rqualification').innerHTML+=e.name+"<br>";
			
			}

			for (var i = 0; i < javaobj.skills.length; i++)
			{
				document.getElementById('myskills').innerHTML+=javaobj.skills[i]+"<br>";

			}
		}

	}
	xhttp.open("GET","file.json",true);
	// the json file is available on the server as well. if the above line of code doesn't work
	 //   use the line of code below so it will request the json file from the server.
	//xhttp.open("GET","https://gist.githubusercontent.com/RahulSTrivedi/6494f8a881d5af140e66967af781797f/raw/bc8ab014d2169af75ab1259daa7d626c35022278/file1.json",true);
	xhttp.send();

}