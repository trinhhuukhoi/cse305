/**
 * 
 */

// login

const enterButton = document.getElementById("enter_button");

enterButton.addEventListener("click", function() {
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			if (xhr.status == 200) {
				window.location = 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/'
			} else {
				alert(xhr.responseText);
			}
		}
	}


	xhr.open("POST", "http://" + window.location.host + "/my-first-webapp2-1.0-SNAPSHOT/test");
	xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
	const body = JSON.stringify({
		"login": document.getElementById("login_input").value
	});

	

	xhr.send(body);
}
)
