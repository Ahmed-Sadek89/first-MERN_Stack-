const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>hello backend using node.js</h1>")
})

const port = process.env.PORT | 4000;
app.listen(port, () => console.log('server is worked on port ' + port))