const progressService = require('../services/progressService');


const getProgress = async (req, res) => {
    try {
        const progress = await progressService.getProgress(req.params.id);
        return res.status(200).json(progress)
    } catch (err) {
        console.error('Error al obtener datos:', err);
        res.status(500).json({ message: 'Error al obtener los datos' });
    }
}

module.exports = { getProgress };   