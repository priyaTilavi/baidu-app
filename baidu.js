const express = require("express");
const router = express.Router();
const translate = require("baidu-translate-api");

router.get("/", async (req, res) => {
	try{
		const query= req.query.searchTerm;
		const result = await translate(query);
		res.set('Access-Control-Allow-Origin', '*');
		res.send({result:result});
	}catch(error){
		console.log(error);
	}
	
	
});

module.exports = router;