const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 4001; // The port Tina expects images to come from when hosted locally under the same port

app.use(cors());

// Serve the /uploads folder at the root of `/uploads`
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve the /uploads folder natively on `/`
app.use(express.static(path.join(__dirname, 'uploads')));

// Fallback just in case
app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Static media server listening at http://localhost:${port}`);
});
