function sendMessage() {
    var userInput = document.getElementById('userInput').value;
    var chatBox = document.getElementById('chatBox');
    var chat = document.createElement('div');
    chat.className = 'chat';
    chat.innerText = 'User: ' + userInput;
    chatBox.appendChild(chat);
    document.getElementById('userInput').value = '';
    scrollToBottom();
    getResponse(userInput);
}

function getResponse(userInput) {
    // Here you can implement the logic to get a response from the chatbot based on the user input (e.g., using AJAX to send a request to the backend)
    // For demonstration purposes, let's assume the chatbot responds immediately with a generic message
    var chatBox = document.getElementById('chatBox');
    var chat = document.createElement('div');
    chat.className = 'chat';
    chat.innerText = 'Chatbot: Thank you for your query. We will provide a response shortly.';
    chatBox.appendChild(chat);
    scrollToBottom();
}

function scrollToBottom() {
    var chatBox = document.getElementById('chatBox');
    chatBox.scrollTop = chatBox.scrollHeight;
}