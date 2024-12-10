const SubjectProgress = require('../database/models/subjectProgress');
const mongoose = require('mongoose');



const getProgress = async (user_id) => {
    try {
        const progress = await SubjectProgress.find({ user_id: user_id });
        return progress;
    } catch (err) {
        console.error('Error al obtener datos:', err);
        throw new Error('Error al obtener los datos' + err.message);
    }
};

module.exports = { getProgress };   