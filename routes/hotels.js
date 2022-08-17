const express = require('express');
// const getAllHotel = require('../controllers/hotel.js');
const{createHotel,updateHotel,deleteHotel,getHotel,getAllHotel}= require('../controllers/hotel.js');

const router = express.Router();

// create

router.post('/', createHotel) 

router.put('/:id', updateHotel) 

router.delete('/:id', deleteHotel)

router.get('/:id', getHotel) 

router.get('/', getAllHotel) 

module.exports = router;