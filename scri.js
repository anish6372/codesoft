


function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;

    if (message.trim() !== '') {
        addMessage('You', message);
        messageInput.value = '';
        simulateReply(); // Simulate a reply from the other person
    }
}

function addMessage(sender, message) {
    var chatMessages = document.getElementById('chat-messages');
    var messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerText = sender + ': ' + message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function simulateReply() {
    var replies = [
        "Hello!",
        "How are you?",
        "I am fine !",
        "What is your name?",
        "nice name..My name is John",
        "What do you want to talk about?",
        "What Do u like?"
    ];
    var randomReply = replies[Math.floor(Math.random() * replies.length)];
    setTimeout(function() {
        addMessage('Friend', randomReply);
    }, 1000); // Simulate a delay before the reply
}