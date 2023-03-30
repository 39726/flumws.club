const socket = new WebSocket("wss://flumws.onrender.com");

socket.addEventListener('open', (event) => {
    const statusLabel = document.getElementById('status');
    statusLabel.textContent = 'Status: connected';
});

socket.addEventListener('message', (event) => {
    const statusLabel = document.getElementById('status');
    statusLabel.textContent = 'Status: Message Received';
});

const submitButton = document.getElementById('submit-button');
const inputArea = document.getElementById('msg');
submitButton.addEventListener('click', (event) => {
  const statusLabel = document.getElementById('status');
  statusLabel.textContent = 'Status: Message Sent';
  socket.send(toString(inputArea.textContent));
});

