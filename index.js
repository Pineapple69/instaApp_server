var express = require('express');
var cors = require('cors');
var bodyParser  = require('body-parser');
var app = express();

var posts = require('./Home/Posts.js');
var users = [{
        id: "1",
        username: "test",
        password: "pwd"
    }
    ];

app.set('port', (process.env.PORT || 8200));
app.use(cors());
app.use(bodyParser.json());

app.use(posts);

app.get('/', function(req, res) {
	res.send("Welcome to Instaapp!!");
});

app.post('/login', function(req,res){
    console.log("test login");
    console.log(req.body);

	var u = users.find(function(element){
         return (element.username === req.body.username) && (element.password === req.body.password);
    });

    if(u !== undefined)
    {
        return res.json({id: u.id, username: u.username});
    }
    else
    {
        return res.sendStatus(401);
    }
});

app.post('/signup', function(req,res){
    console.log("test signup");
    console.log(req.body);
    var u = users.push(
	{
        id: "2",
        username: req.body.username,
        password: req.body.password
    }
	);

    if(u !== undefined)
    {
        return res.json({id: u.id, username: u.username});
    }
    else
    {
        return res.sendStatus(401);
    }
});

app.get('/users/:username', function(req, res){
 /*  var items=[];
    users.forEach(function(item,i){
    if (item.users.username==req.body.username){
    items.push(item);
        }
      });
      res.json(items);
    });*/
  console.log("Insert name" + req.body.username);
  for (var i = 0; i < users.length; i++) {
    if(req.body.username === users[i].username) {
      res.json(users[i]);
      return;
    }
  }
  res.json(users[i]);
});

app.get('/posts/:id', function(req, res) {
var items=[];
posts.forEach(function(item,i){
if (item.user.id==req.params.id){
items.push(item);
}
});
res.json(items);
});


app.listen(app.get('port'), function() {

console.log('Instaapp is running!');

});
