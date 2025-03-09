const Clothing = require("../models/clothing");

exports.getAllClothing = async (req, res, next) => {
  try {
    const data = await Clothing.find();
    if (data && data.length !== 0) {
      return res.status(200).send({
        message: "Clothing found",
        payload: data,
      });
    }
    res.status(404).send({
      message: "Clothing not found",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.getClothingById = async (req, res, next) => {
  try {
    const data = await Clothing.findById(req.params.id);
    if (data) {
      return res.status(200).send({
        message: "Clothing found",
        payload: data,
      });
    }
    res.status(404).send({
      message: "Clothing not found",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.createClothing = async (req, res, next) => {  
    try {
        const data = new Clothing({
            name: req.body.name,
            brand: req.body.brand,
            color: req.body.color,
            price: req.body.price,
        })
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Clothing created",
                payload: result
            })
        }
        res.status(500).send({
            message: "not found",
        })
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.updateClothing = async (req, res, next) => {
  try {
    const data = {
      name: req.body.name,
      brand: req.body.brand,
      color: req.body.color,
      price: req.body.price,
    };
    const result = await Clothing.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        message: "Clothing updated",
        payload: result,
      });
    }
    res.status(500).send({
        message: "Clothing not updated",
    })
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.deleteClothing = async (req, res, next) => {
    try {
        const result = await Clothing.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "Clothing deleted",
                payload: result
            })
        }
        res.status(500).send({
            message: "Clothing not deleted",
        })
  } catch (err) {
    res.status(500).send(err);
  }
};
