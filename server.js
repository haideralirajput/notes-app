// server.js or index.js or app.js (whatever your main server file is named)

import express from 'express';
import cors from 'cors';

const cors = require('cors');


const app = express();

// Enable CORS for requests from localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));

// Add any other middleware if needed
app.use(express.json());

// Define your routes here
app.get('/notes', (req, res) => {
    res.json({ message: "This is the notes endpoint!" });
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
