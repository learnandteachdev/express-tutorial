
require('dotenv').config()

const express = require('express'),
	app = express()

// these two imports help us perform server-side DOM 
const request = require('request')
const bodyParser = require('body-parser')

// these imports provide a database interface
const nosql = require('nosql') // NoSQL instead of PSQL
const db = nosql.load('./server/database.nosql')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
	extended: true
}))
//tells us where to find the css file, in the public folder

app.set('view engine', 'ejs')

/*
Objective 1-
build a GET route here and serve up the EJS file
	parse out from the URL the 'entry' variable and
	pass it into the EJS somewhere on the web-page
*/

app.get('/', function(req, res){
//	res.render('index.ejs', {entry: req.query.test})
	if(req.query.test !== undefined){

		res.render('index.ejs', {entry: req.query.test})
	} else {
		res.render('index.ejs', {entry: ''})
	}
})
/*
Objective 2-
build a POST route to load form data into the database
*/
app.post('/', function(req, res){
	//write a variable below
	let data = {first: req.body.firstname,
				last: req.body.lastname}
	db.insert(data)
	console.log(db)
})
/*
Objective 3-
start the server on port 3000
*/
app.listen(3000, function(){
	console.log('it should work')
})