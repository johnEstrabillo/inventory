const express = require('express');
const bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/assets', express.static('assets'));

app.set('view engine', 'ejs');

var port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
	res.render('app')
})

app.listen(port, ()=>{
	console.log('Server is now listening to port 3000');
});