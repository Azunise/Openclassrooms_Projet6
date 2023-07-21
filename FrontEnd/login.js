
const form = document.querySelector("form");



form.addEventListener("submit", async function(event) {
    event.preventDefault();
    
	const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
	const userCredentials = {email, password};
    console.log(JSON.stringify(userCredentials));
	
	const formData = await fetch("http://localhost:5678/api/users/login", {
	method: "POST",
	mode : "no-cors",
	body: JSON.stringify(userCredentials)
  	});


	console.log(formData);   
	const authenticationResponse = await formData.json();
	
	const authenticationToken = authenticationResponse.token;
	const authenticationToggle = formData.ok;
	


	if (authenticationToggle === true) {
		sessionStorage.setItem("authenticationToken", authenticationToken);
		sessionStorage.setItem("authenticationToggle", authenticationToggle);
		window.location.replace("index.html");
	};
});

