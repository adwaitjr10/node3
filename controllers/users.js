//const db = require("../models");
import db from "../models/index.js";
import { v4 as uuidv4 } from "uuid";
const User = db.users;
let users = [];

///get all user
export const getUser = async (req, res) => {
  let users = await User.findAll({
    // attributes:{
    //   'fname','lname','age','id'
    // }
  });
  res.status(200).json(users);

  console.log(users);
  //res.send(users);
};

//post user
export const postUser = async (req, res) => {
  console.log("ROUTES REACHED");

  //req.body

  //const user = req.body;
  //const userId = uuidv4();
  //const userWithId = { ...user, id: userId };
  let info = {
    id: req.body.id,
    fname: req.body.fname,
    lname: req.body.lname,
    age: req.body.age,

    //id: userWithId,
  };
  const user = await User.create(info);
  // info.push(userWithId);
  //users.push(userWithId);
  //res.send(`${user.fname} ${user.lname} added to the db`);
  res.status(200).json({ user });
};

/////////////////////////////////////////////////////

export const postUser2 = async (req, res) => {
  console.log("ROUTES REACHED");
  const { words } = req.params;
  users.push(words);
  console.log("working");
  res.status(200).json({ words });
};

export const getUser2 = async (req, res) => {
  console.log("Routes reached");
  var data = {
    user: {
      id: req.query.id,
      fname: req.query.fname,
      lname: req.query.lname,
      age: req.query.age,
      ...req.query,//spread ops
    },
  };
  //const user = await User.create(data);
  res.status(200).json(data);
};

////////////////////////////////////////////////////

export const singleUser = async (req, res) => {
  //req.params
  const { id } = req.params;
  let user = await User.findOne({ where: { id: id } });
  //const foundUser = users.find((user) => user.id === id);
  //res.send(foundUser);
  res.status(200).json({
    //User: foundUser,
    User: user,
  });
};

//update product
export const updateProduct = async (req, res) => {
  //req.params
  const { id } = req.params;
  const user = await User.update(req.body, { where: { id: id } });
  res.status(200).json({
    //User: foundUser,
    User: user,
  });
};

//delete user

export const deleteUser = async (req, res) => {
  // using req.params
  const { id } = req.params;
  await User.destroy({ where: { id: id } });
  //users = users.filter((users) => users.id !== id);
  res.json({
    DeleteUser: id,
  });
};

export const patchUser = (req, res) => {
  //using req.query
  const { id } = req.query;
  const user = users.find((user) => {
    if (user.id === id) {
      return user;
    }
  });
  console.log(user);
  const { fname, lname, age } = req.body;
  if (fname) {
    user.fname = fname;
  }
  if (lname) {
    user.lname = lname;
  }
  if (age) {
    user.age = age;
  }
  res.json({ updated: users });
};
