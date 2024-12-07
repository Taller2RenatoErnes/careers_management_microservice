require('dotenv').config()
const db = require('mongoose')    


const dbconexion = async () => {
    try {
        const uri = process.env.MONGO_URI; 
        await db.connect(uri);
        console.log('Conexión exitosa a MongoDB' + uri);

    } catch (err) {
        console.error('Error al conectar a MongoDB:', err);
    }
}

dbconexion();
  

module.exports = {db}