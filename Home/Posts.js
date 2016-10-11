var data = require('../Data/data.js');
var express = require('express');
var router = express.Router();
var cors = require('cors');

router.route('/posts') 
	.get(function(req,res,next){     
        res.json(data.getAllPosts());               
    })
	.post(function(req,res,next){
		data.addnewPosts(req.body);
    })
	
router.route('/postdislike')
	.post(function(req,res,next){
		data.Postdislike(req.body.id, req.body.userLike);
    })
router.route('/postlike')
	.post(function(req,res,next){
		data.Postlike(req.body.id, req.body.userLike);
    })
router.route('/addcomments')
	.post(function(req,res,next){
	console.log(req.body.id, req.body.comments );
		data.addcomment(req.body.id, req.body.comments);
    })
	
;
	
  
module.exports = router;
