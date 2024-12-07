require('dotenv').config()
const db = require('mongoose')    

try {
    const uri = process.env.MONGO_URI; 
    db.connect(uri);
    console.log('Conexión exitosa a MongoDB' + uri);

} catch (err) {
    console.error('Error al conectar a MongoDB:', err);
}

  

module.exports = {db}