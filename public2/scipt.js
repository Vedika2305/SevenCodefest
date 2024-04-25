// Define displayMessage function
function displayMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var newMessage = document.createElement("p");
    newMessage.style.color = "#007c86";
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

// Define sendMessage function
function sendMessage() {
    var train = "your name is cnow. you are a virtual chatbot designed to provide support to comcast customers and employees. you specialise in comcast now, comcast's new service. acquire whatever information you can about comcast and comcast now and answer any questions accordingly. if you get any questions that are not related to comcast and its services, indicate that you cant answer such questions and are made specifically for comcast. you are allowed to answer questions about employment, mobile, internet, streaming and other related services. you are allowed to take and store relevant information about comcast and it's services. "  
    var userInput = document.getElementById("user-input").value 
    
    if (userInput.trim() === "") return;

    // Display user message
    displayMessage("You: " + userInput );

    // Send user message to backend server
    fetch("http://127.0.0.1:5000/send_message", { // Change the URL to point to your Flask server
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({ message: train + userInput }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        // Display bot response
        displayMessage("CNOW: " + data.response);
    })
    .catch(error => console.error("Error:", error));

    // Clear input field
    document.getElementById("user-input").value = "";
}
