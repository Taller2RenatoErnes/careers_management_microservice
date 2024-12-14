const careerService = require('../services/careerService');
const grpc = require('@grpc/grpc-js');

const careers = async (call, callback) => {
  try {
    const data = call.request;
    console.log('Datos:', data);
    const careers = await careerService.getCareers();
      if (careers.length === 0) {
          return callback({
          code: grpc.status.NOT_FOUND,
          details: 'No se encontraron carreras'
          });
      }
    callback(null, {careers});
  } catch (error) {
    callback({
      code: grpc.status.INTERNAL,
      details: 'Error al obtener las carreras'
    });
  }
}

const getCareersHTTP = async (req, res) => {
  try {
    const careers = await careerService.getCareers();
    return res.status(200).json(careers);
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
}

module.exports = { careers, getCareersHTTP };