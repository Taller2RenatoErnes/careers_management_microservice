const { Router } = require("express");
const router = Router();
const db = require("../models/database/database");
const mongoose = require("mongoose");
const Career = require("../models/database/career");


router.get('/', async (req, res) => {
  try {
    
    const careers = await Career.find();
    res.json(careers);
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
});
module.exports = router;