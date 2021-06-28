const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const val = new Schema({
    Suelo: { type: Number },
    Temperatura: { type: Number },
    Humedad: { type: Number },
    Fecha: { type: Date, default: Date.now }
    //Suelo: String,
    //Temperatura: String,
    //Humedad: String,
    //Fecha: Date
});
module.exports = mongoose.model('iots', val);