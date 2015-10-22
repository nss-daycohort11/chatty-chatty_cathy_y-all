$(document).ready(function() { 
var enterMessage = $("#enter-message");
  console.log("enterMessage", enterMessage);

var clearBoard = $("#clear-board");
  console.log("clearBoard", clearBoard);

var messageBox = $("#message-box");
	console.log("messageBox", messageBox);

var numOfMessages = 0;

function removeFirstMessage() {
	var messageContainer = $("#message-box");
	// console.log("messageContainer", messageContainer);

	var childNode = messageContainer.children(20);

	messageContainer.find("div:last").remove();
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
	var newMessage = enterMessage.val();
	var message = newMessage + " " + " - " + currentTime + " " + "<input type='submit' name='delete-message' value='Delete' id='delete-message'>" ;
	
	enterMessage.val(" ");
	console.log(enterMessage);
//prepend 
	populateMessage = "<div>";
	populateMessage += message;
	messageBox.prepend(populateMessage);

	numOfMessages++;
	console.log("numOfMessages", numOfMessages);

	if (numOfMessages >= 21) {
		console.log("greater than 20", numOfMessages);
		removeFirstMessage();
	}
}


enterMessage.keypress(function(event){
	if(event.which == 13) {
		console.log("Hi Kids!!")
		// console.log("target", event);
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

clearBoard.click(function() {
	messageBox.html("<div>" + " " + "</div>");
});

var darkTheme = $("#dark-theme");

var largeText = $("#large-text");

darkTheme.click(function () {
	
	messageBox.toggleClass("dark-theme1");
});

largeText.click(function () {
	
	messageBox.toggleClass("large-text");
});


});