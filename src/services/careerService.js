const Career = require('../database/models/career');




const getCareers = async () => {
  try {
    const careers = await Career.find();
    return careers;
  } catch (err) {
    console.error('Error al obtener datos:', err);
    throw new Error('Error al obtener los datos' + err.message);
  }
}

module.exports = { getCareers };