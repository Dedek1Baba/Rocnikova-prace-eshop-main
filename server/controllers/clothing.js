require('dotenv').config();
const Clothing = require("../models/clothing");
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

exports.getAllClothing = async (req, res, next) => {
  try {
    let queryName = req.query.name;
    console.log(queryName);
    let data;
    if (queryName) 
      data = await Clothing.find({ name: { $regex: queryName, $options: 'i' } });
    else 
      data = await Clothing.find();

    if (data && data.length !== 0) {
      return res.status(200).send({
        message: "Clothing found",
        payload: data,
      });
    }
    res.status(404).send({ message: "Clothing not found" });
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
    res.status(404).send({ message: "Clothing not found" });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createClothing = async (req, res, next) => {
  try {
    const passwordReq = req.body.password;
    if (ADMIN_PASSWORD !== passwordReq) {
      return res.status(403).send({ message: "Incorrect password" });
    }

    const data = new Clothing({
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
        message: "Clothing created",
        payload: result,
      });
    }
    res.status(500).send({ message: "Not created" });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateClothing = async (req, res, next) => {
  try {
    const passwordReq = req.body.password;
    if (ADMIN_PASSWORD !== passwordReq) {
      return res.status(403).send({ message: "Incorrect password" });
    }

    const data = {
      name: req.body.name,
      material: req.body.material,
      gram: req.body.gram,
      delivery: req.body.delivery,
      color: req.body.color,
      price: req.body.price,
      image: req.body.image,
    };

    const result = await Clothing.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        message: "Clothing updated",
        payload: result,
      });
    }
    res.status(500).send({ message: "Clothing not updated" });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteClothing = async (req, res, next) => {
  try {
    const passwordReq = req.body.password;
    if (ADMIN_PASSWORD !== passwordReq) {
      return res.status(403).send({ message: "Incorrect password" });
    }

    const result = await Clothing.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        message: "Clothing deleted",
        payload: result,
      });
    }
    res.status(500).send({ message: "Clothing not deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
};
