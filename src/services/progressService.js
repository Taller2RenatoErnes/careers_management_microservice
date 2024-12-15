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

const updateProgress = async (user_id, subject_id) => {
    try {
        const progress = await SubjectProgress.create({ user_id: user_id, subject_id: new mongoose.Types.ObjectId(subject_id) });
        return progress;
    } catch (err) {
        console.error('Error al añadir el progreso:');
        throw new Error('Error al a{añadir el progreso:' );
    }
}

module.exports = { getProgress, updateProgress };   