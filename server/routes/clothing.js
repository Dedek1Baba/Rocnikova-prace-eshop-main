const express = require('express');
const router = express.Router();

const clothingRouter = require("../controllers/clothing")

router.get('/', clothingRouter.getAllClothing);

router.get('/:id', clothingRouter.getClothingById);

router.post('/', clothingRouter.createClothing);

router.put('/:id', clothingRouter.updateClothing);

router.delete('/:id', clothingRouter.deleteClothing);

module.exports = router;
