const express = require("express");
const baidu = require("./baidu.js");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use("/api/translate", baidu);
app.listen(3000, function () {
	console.log('Server started on port');
});

