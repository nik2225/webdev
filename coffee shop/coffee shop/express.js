const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the specified directory
app.use(express.static(path.join(__dirname, 'public')));

// Define route to serve the index.html file
app.get('/', (req, res) => {
  // Set the path to the index.html file
  const indexPath = path.join(__dirname, 'public', 'index.html');
  
  // Send the index.html file as response
  res.sendFile(indexPath);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});