const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Use static folder for any CSS or JS
app.use(express.static('public'));

// Array of encouragement messages
const messages = [
  "You're doing a great job MAYOWA!",
  "Keep going, success is near!",
  "Every expert was once a beginner.",
  "Believe in yourself!",
  "You’ve got this!"
];

// Function to get a random message
const getRandomMessage = () => {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
};

// Object with user details (example)
const user = {
  name: "DevOps Engineer",
  level: "Intermediate",
  tools: ["Docker", "Kubernetes", "Terraform", "Jenkins", "Azure"]
};

app.get('/', (req, res) => {
  const message = getRandomMessage();

  // Prepare dynamic HTML using string template
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Encouragement App</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 2em; text-align: center; background-color: #f5f5f5; }
        h1 { color: #333; }
        p { font-size: 1.2em; color: #555; }
        ul { list-style: none; padding: 0; }
        li { margin: 0.3em 0; }
      </style>
    </head>
    <body>
      <h1>${message}</h1>
      <p>Hello, ${user.name}! You're an <strong>${user.level}</strong> DevOps Engineer.</p>
      <p>Here are your current tools:</p>
      <ul>
        ${user.tools.map(tool => `<li>🔧 ${tool}</li>`).join('')}
      </ul>
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
