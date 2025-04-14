import express from "express";

const app = express();
const port = 5001;

app.get('/api', (req, res) => {
    console.log('Received request at /api');
    res.send('Hello from your Cool Server!');
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});