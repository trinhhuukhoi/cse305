/**
 * 
 */

// login

const addButton = document.getElementById("add_button");

addButton.addEventListener("click", function() {
	const xhr1 = new XMLHttpRequest();

	xhr1.onreadystatechange = () => {
		if (xhr1.readyState === 4) {
			if (xhr1.status == 200) {
				alert("Request Sent");
			} else {
				alert(xhr1.responseText);
			}
		}
	}


	xhr1.open("POST", "http://" + window.location.host + "/my-first-webapp2-1.0-SNAPSHOT/addStudentServlet");
	xhr1.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
	const account = JSON.stringify({
		"account": document.getElementById("add_account").value
	});

	

	xhr1.send(account);
}
)
