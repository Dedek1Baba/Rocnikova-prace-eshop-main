const onep = require("../models/OneP");

exports.getAllOneP = async (req, res, next) => {
  try {
    const data = await onep.find();
    if (data && data.length !== 0) {
      return res.status(200).send({
        payload: data,
      });
    }
    res.status(404).send({
      message: "OneP not found",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.getOnePById = async (req, res, next) => {
  try {
    const data = await onep.findById(req.params.id);
    if (data) {
      return res.status(200).send({
        message: "OneP found",
        payload: data,
      });
    }
    res.status(404).send({
      message: "OneP not found",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.createOneP = async (req, res, next) => {
  try {
    const data = new onep({
      name: req.body.name,
      material: req.body.material,
      gram: req.body.gram,
      delivery: req.body.delivery,
      color: req.body.color,
      price: req.body.price,
      image: req.body.image,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        message: "OneP created",
        payload: result,
      });
    }
    res.status(500).send({
      message: "not found",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.updateOneP = async (req, res, next) => {
  try {
    const data = {
      name: req.body.name,
      material: req.body.material,
      gram: req.body.gram,
      delivery: req.body.delivery,
      color: req.body.color,
      price: req.body.price,
      image: req.body.image,
    };
    const result = await onep.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        message: "OneP updated",
        payload: result,
      });
    }
    res.status(500).send({
      message: "OneP not updated",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.deleteOneP = async (req, res, next) => {
  try {
    const result = await onep.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        message: "OneP deleted",
        payload: result,
      });
    }
    res.status(500).send({
      message: "OneP not deleted",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
