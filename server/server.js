const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../')));

app.get('/api/working', function(req, res) {
	res.status(200).send(process.env.working || 'not');
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port:', port);
