const form = document.querySelector("form");

form.addEventListener("submit", async function(event) {
    event.preventDefault();
    
	const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
	const userCredentials = {email, password};
    console.log(JSON.stringify(userCredentials));
	
	const formData = await fetch("http://localhost:5678/api/users/login", {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify(userCredentials)
  	});


	console.log(formData);   
	const authenticationResponse = await formData.json();
	
	const authenticationToken = authenticationResponse.token;
	const authenticationToggle = formData.ok;
	
	console.log(sessionStorage);
	console.log("token");
	console.log(authenticationToken);
	console.log(authenticationToggle);

	if (authenticationToggle === true) {
		sessionStorage.setItem("authenticationToken", authenticationToken);
		sessionStorage.setItem("authenticationToggle", authenticationToggle);
		console.log(sessionStorage);
		window.location.replace("../index.html");
		
	} else {
		return alert("Ce n'est pas la bonne combinaison")
	}


});

