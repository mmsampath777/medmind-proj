document.addEventListener('DOMContentLoaded', () => {
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotWindow = document.getElementById('chatbot-window');
    const sendButton = document.getElementById('send-button');
    const userInput = document.getElementById('user-input');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const loader = document.getElementById('loader');

    // Toggle chatbot window visibility
    chatbotButton.addEventListener('click', () => {
        chatbotWindow.style.display = chatbotWindow.style.display === 'none' || chatbotWindow.style.display === '' ? 'block' : 'none';
    });

    // Handle sending message
    sendButton.addEventListener('click', async () => {
        const prompt = userInput.value.trim();
        if (prompt) {
            // Display user message
            addMessage('user', prompt);

            // Show loader and hide send button
            loader.style.display = 'block';
            sendButton.style.display = 'none';

            // Fetch response from the Gemini API
            try {
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer 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`
                    },
                    body: JSON.stringify({ prompt }),
                });

                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

                const data = await response.json();
                loader.style.display = 'none'; // Hide loader
                sendButton.style.display = 'block'; // Show send button

                const formattedText = formatBotResponse(data.response || "No response received.");
                addMessage('bot', formattedText);

            } catch (error) {
                console.error('Error fetching generated content:', error);
                loader.style.display = 'none'; // Hide loader
                sendButton.style.display = 'block'; // Show send button
                addMessage('bot', 'Error: Unable to fetch response. Please try again.');
            }

            // Clear input field
            userInput.value = '';
        }
    });

    // Function to add messages to the chat window
    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}`;
        const textElement = document.createElement('div');
        textElement.className = 'text';
        textElement.innerHTML = message;
        messageElement.appendChild(textElement);
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to the bottom
    }

    // Function to format bot response
    function formatBotResponse(text) {
        // Format bot response (optional customization)
        text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'); // Bold
        return text;
    }
});
