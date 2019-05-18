const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./public'))

// app.get('/', (req, res) => res.send('Hello World!'));
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
	console.log("app listening on: http://localhost" + PORT);
});
