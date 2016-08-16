var express = require ('express');
var app = express();
var mongoose = require ('mongoose');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

mongoose.connect('mongodb://jebenite:180895@ds139665.mlab.com:39665/tareasdaw1');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log("mongoose connection successful");});

var Schema = mongoose.Schema;

var sucursales = new Schema({
    nombre: String,
    direccion: String,
    descipcion: Array, //examenes q se pueden realizar
    horario: Array,
    galeria : Array,
    mapa: Array
}, { versionKey: false, collection: 'sucursal'});

var Contact = mongoose.model('Contact', sucursales);

app.get('/sucursal', function (req, res) {
  console.log('I received a get request');
    Contact.find({}, function (err, docs) {
    	console.log(docs);
        res.json(docs);
    });
});



app.get('/contactlist/:id', function(req, res){
	var id = req.params.id;
	console.log(id);

	Contact.findById(id, function(err, data) {
    	if (err){
    		res.send(err)
    	} else {
    		res.json(data);
    	}
	});
});



app.listen(3000);


