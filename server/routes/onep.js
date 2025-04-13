const express = require('express');
const router = express.Router();

const onepRouter = require("../controllers/onep")

router.get('/', onepRouter.getAllOneP);

router.get('/:id', onepRouter.getOnePById);

router.post('/', onepRouter.createOneP);

router.put('/:id', onepRouter.updateOneP);

router.delete('/:id', onepRouter.deleteOneP);

module.exports = router;
