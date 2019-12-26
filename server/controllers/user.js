const express = require("express");
const { User, validate } = require("../models/user");
const _ = require("lodash");
const bcrypt = require("bcrypt");

exports.index = async (req, res) => {
  try {
    let user = await User.find().select({"password": 0});

    res.send(user);
  } catch (err) {}
};

exports.delete = async (req, res) => {
  try {
    let user = await User.findByIdAndRemove(req.params.id);

    res.send({message: "Successflly Deleted"});
  } catch (err) {}
};