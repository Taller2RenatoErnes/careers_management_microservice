require('dotenv').config()
const db = require('mongoose')    
const careerSeeders = require('../seed/careerSeeder')


const dbconexion = async () => {
    try {
        const uri = process.env.MONGO_URI; 
        await db.connect(uri);
        console.log('Conexión exitosa a MongoDB');

    } catch (err) {
        console.error('Error al conectar a MongoDB:', err);
    }
}

dbconexion();
  

module.exports = {db}