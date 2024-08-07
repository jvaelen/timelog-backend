const express = require('express');
const app = express();
const port = 3000;

app.get('/export', (req, res) => {
    res.send('This is the export endpoint');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
