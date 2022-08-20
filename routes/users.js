const express = require('express');
const {updateUser,deleteUser,getUser,getAllUser} = require('../controllers/user')
const router = express.Router();


router.put('/:id', updateUser) 

router.delete('/:id', deleteUser)

router.get('/:id', getUser) 

router.get('/', getAllUser) 

module.exports = router;