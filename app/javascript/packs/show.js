
import consumer from "./../channels/consumer";


document.addEventListener("DOMContentLoaded", function(event) { 
	const my_username = document.getElementById("user_name").innerHTML;

	const operators = [ '+', '-' , 'x' , '/'];

    const validate = function(input) {
 		let current_value = calculator.display.value;
 		let len = current_value.length;

 		if ( operators.includes(input)  ) {

 			if (current_value.length > 0 && current_value.split('').filter( (e) => operators.includes(e) ).length == 0 ) {
 			
 				calculator.display.value += input;
 			} else {
 				return;
 			}
 		} else {
 			if ( len > 0 && current_value.slice(len - 1, len) == '/' && input == "0" ) {
 				return;
 			} else {
 				calculator.display.value += input;
 			}
 		}
 	};


 	const calculate = function() {
 		let current_value = calculator.display.value;
 		const op = operators.filter( (o) => current_value.includes(o));
 		if (op.length == 0) {
 			return { valid: false };
 		}
 		const values = current_value.split(op[0]);
 		if (values.length < 2) {
 			return { valid: false };
 		}
 		let result = 0.0;
 		if (op[0] == '+') {
 			result = parseInt(values[0]) * parseInt(values[1]); 
 		}
 		if (op[0] == '-') {
 			result = parseInt(values[0]) - parseInt(values[1]); 
 		}
 		if (op[0] == '/') {
 			result = parseInt(values[0]) / parseInt(values[1]); 
 		}
 		if (op[0] == 'x') {
 			result = parseInt(values[0]) * parseInt(values[1]); 
 		}
 		return  { valid: true, result: result };
 	};

 	for (let i = 0; i <= 9; i ++ ) {
 		document.getElementById("bcipher" + i).addEventListener("click", (event) => {
 			validate("" + i);
 		});
 	}
	for (let i = 0; i <= 3; i ++ ) {
 		document.getElementById("operator" + i).addEventListener("click", (event) => {
 			validate("" + operators[i]);
 		});
 	}

 	const createChatItemElement = (username , message) => {
 		var item = document.createElement("div");
 		var username_div = document.createElement("div");
 		var username_text = document.createTextNode("" + username + ":");
 		username_div.appendChild(username_text);
 		var message_text = document.createTextNode("" + message);
 		const class_name = (username == my_username) ? "my-message" : "message";
 		item.classList.add(class_name);
 		item.appendChild(username_div);
 		item.appendChild(message_text);
 		chat_grid.appendChild(item);
 	}
 	const removeExtraItems = () => {
 		const children = chat_grid.getElementsByTagName("DIV");
 		if (children.length >= 10) {
 			children[0].remove();
 		}
 	}

	const sendMessageToChannel = ( username, message ) => {
		chatChannel.send({ username: username, message: message });
	};


	const processReceivedMessage = ( data ) => {
		removeExtraItems();
		createChatItemElement(data.message.user, data.message.content);
	};

 	const chatChannel = consumer.subscriptions.create(
 		{ channel: "MainChannel" },  
		{ received(data) {
  			processReceivedMessage(data);
  		}
	});

 	document.getElementById("calculator_send").addEventListener("click", (event) => {
 		const r = calculate();
 		if ( r.valid ){
 			sendMessageToChannel( my_username, calculator.display.value + "=" + r.result);
 			calculator.display.value = "";
 		} else {
 			console.alert("Invalid expression");
 		}
 	});
});

