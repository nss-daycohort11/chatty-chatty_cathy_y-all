
var enterMessage = document.getElementById("enter-message");
  console.log("enterMessage", enterMessage);

var clearBoard = document.getElementById("clear-board");
  console.log("clearBoard", clearBoard);

var messageBox = document.getElementById("message-box");
	console.log("messageBox", messageBox);

var numOfMessages = 0;

function removeFirstMessage() {
	var messageContainer = document.getElementById("message-box");
	console.log("messageContainer", messageContainer);

	var childNode = messageContainer.childNodes.item(19);

	messageContainer.removeChild(childNode);

	// function removeElement(node) {
 //    node.parentNode.removeChild(node);
	// }

}

function populateMessageBox() {
	var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept.", "Oct.", "Nov.", "Dec."];
	var time = new Date();
	var year = time.getFullYear();
	var month = time.getMonth();
	var day = time.getDate();
	var currentMonth = monthName[month];
	var currentTime = day + " " + currentMonth + " " + year;
	console.log(month, currentMonth, day);
	var newMessage = enterMessage.value;
	var message = newMessage + " " + " - " + currentTime + " " + "<input type='submit' name='delete-message' value='Delete' id='delete-message'>" ;
	
	enterMessage.value = " ";
	console.log(enterMessage);
//prepend 
	populateMessage = document.createElement('div');
	populateMessage.innerHTML = message;
	messageBox.insertBefore(populateMessage, messageBox.childNodes[0]);

	numOfMessages++;
	console.log("numOfMessages", numOfMessages);

	if (numOfMessages >= 20) {
		console.log("greater than 20", numOfMessages);
		removeFirstMessage();
	}
}


enterMessage.addEventListener("keyup", function(){
	if(event.keyCode === 13) {
		
		console.log("target", event);
		populateMessageBox();
	} 
	
});

document.querySelector("section").addEventListener("click", function(event) {
  console.log(event);

  	 if (event.target.tagName.toLowerCase() === "input") {
    	event.target.parentNode.remove();

    	console.log("anything")
	};
  });

clearBoard.addEventListener("click", function() {
	messageBox.innerHTML = "<div>" + " " + "</div>";
});

var darkTheme = document.getElementById("dark-theme");

var largeText = document.getElementById("large-text");

darkTheme.addEventListener("click", function () {
	
	messageBox.classList.toggle("dark-theme1");
});

largeText.addEventListener("click", function () {
	
	messageBox.classList.toggle("large-text");
});


