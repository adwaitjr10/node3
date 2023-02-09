import { Sequelize } from "sequelize";
import db from "../models/index.js";
import csv from "csvtojson";
import axios from "axios";
import { logger } from "../middleware/logger.js";
import { response } from "express";
import multer from "multer";
//import { json } from "body-parser";
const AnotherTask = db.anothertask;
const Evenn = db.evenn;
const Oddd = db.oddd;
const AxiosUp = db.axiosup;
//Evenn.hasMany(Oddd);
//Oddd.belongsTo(Evenn);

//const ForandIf = db.forandif;
const users = [
  {
    Name: "abc",
    Number: 2,
    phno: 8108717842,
  },
  {
    Name: "def",
    Number: 3,
    phno: 9819495253,
  },
  {
    Name: "grh",
    Number: 4,
    phno: 123456789,
  },
];
// for (let i = 0; i < users.length; i++)
export const forif = async (req, res) => {
  console.log(users);
  const eo = users.map((evod) => {
    let uno = evod.Number;
    console.log(uno);
    let info = {
      Name: evod.Name,
      Number: evod.Number,
      phno: evod.phno,
    };
    //promise.all
    if (uno % 2 === 0) {
      const eve = Evenn.create(info);
      console.log(eve);
    } else {
      const od = Oddd.create(info);
      console.log(od);
    }
  });
  return res.status(200).json("Passed");

  // console.log(eo);
};
export const oneToOne = async (req, res) => {
  let data = await Evenn.findAll({
    attributes: ["Id", "Name", "phno"],
    include: [
      {
        model: Oddd,
        attributes: ["Name", "phno"],
      },
    ],
    where: { id: 6 },
  });
  res.status(200).json(data);
};

export const belongTo = async (req, res) => {
  let data = await Oddd.findAll({
    include: [
      {
        model: Evenn,
      },
    ],
  });
  res.status(200).json(data);
};

export const oneToMany = async (req, res) => {
  let data = await Evenn.findAll({
    attributes: ["Id", "Name", "phno"],
    include: [
      {
        model: Oddd,
      },
    ],
    where: { Number: 3 },
  });
  res.status(200).json(data);
};
//import { AnotherTask } from "../models/atModel.js";
export const csvtojson = async (req, res) => {
  const csvPath = "resource/EDA_data.csv";
  //const csv = require("csvtojson");
  csv()
    .fromFile(csvPath)
    .then((jsonObj) => {
      console.log(jsonObj);
    });
  const jsonArray = await csv().fromFile(csvPath);
  // res.status(200).json({ csv_data: jsonArray });
  //const obj = JSON.parse(jsonArray);

  //validations
  const newJa = jsonArray.map(async (json) => {
    let info = {
      Name: json.Name,
      Age: json.Age,
      Gender: json.Gender,
      Education: json.Education,
      Salary: json.Salary,
      AppraisedValue: json.AppraisedValue,
      Location: json.Location,
      Landacres: json.Landacres,
      HouseSizesqrft: json.HouseSizesqrft,
      Rooms: json.Rooms,
      Baths: json.Baths,
      Garage: json.Garage,
    };
    return AnotherTask.create(info);
    // const promises = [json];
    // //console.log(at);
    // const result = await Promise.all(promises).then((values) => {
    //   console.log(values);
    // });
    // return res.status(200).json(result);
    //console.log(result);
  });
  const result = Promise.all(newJa).then((values) => {
    res.status(200).json(values);
  });
  console.log(result);
};

export const getCsvFromDb = async (req, res) => {
  const { size, page } = req.query;
  console.log(size);
  let csvData = await AnotherTask.findAndCountAll({
    limit: parseInt(size),
    offset: parseInt(page),
  });
  res.status(200).json(csvData);
  logger.debug(csvData);
};

export const axiosGet = async (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      const abc = response.data.map((obj) => {
        let info = {
          id: obj.id,
          title: obj.title,
          body: obj.body,
        };
        // console.log(response.userId);
        const cdf = AxiosUp.create(info);
        logger.error("DUP");
        return info;
      });

      return res.status(200).json(abc);

      // console.log(response.data[0].userId);

      // res.status(200).json(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const awsUpload = async (req, res) => {
  const { file } = req.body;
  console.log("success");
  return res.status(200).json(file);
};
