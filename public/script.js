let socket;
axios.get("/ipv4").then(info => {
	socket = new WebSocket(`ws://${info.data}:5000/`);


	
   let unique = Math.round(Math.random() * 10000)
	socket.onopen = function(event) {

console.log("new user")

	}
 
// Constante declarations
const button = document.getElementById("button_footer");
const entry = document.getElementById("input_footer");
const typing = document.getElementById("typing");
const elem = document.getElementById("main");


// Command maker function

function cmdmaker(exit) {
	
		let bot_element = document.createElement("span");
		let bot_response = document.createTextNode(exit)
		bot_element.appendChild(bot_response)
		elem.appendChild(bot_element)


}

// Reply function

function func() {
	let value = entry.value.toLowerCase();
	if (value == "") return alert("You can't send an empty message.")
	entry.value = "";
	typing.innerHTML = "";
	let new_element = document.createElement("p");
	let text = document.createTextNode(value);
	new_element.appendChild(text);
	elem.appendChild(new_element)
 
    socket.send(`${value} | ${unique}`)


	
}
socket.onmessage = function(event) {
	let data = event.data;

	
	data = data.split("|");
	
	let msg = data[0] 
	let u = data[1]
	if(unique == u) return;
	cmdmaker(`${msg}`)
	}
	
	

// To check if the user is typing or not

entry.addEventListener("keyup", () => {
	typing.innerHTML = "A user is typing"
})

// To handle the left click press

button.addEventListener("click", () => {
	func()
})

// To handle the Enter key press

document.addEventListener("keydown", event => {

	if (event.code == "Enter") {
		func()

	}
})
})
