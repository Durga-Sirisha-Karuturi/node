const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1><p>This is a simple Node.js web application.</p>');
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
