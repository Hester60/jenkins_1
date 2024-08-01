const express = require('express');
const PORT = 3010

const app = express();

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.on('error', (error) => {
    console.error(error);
});