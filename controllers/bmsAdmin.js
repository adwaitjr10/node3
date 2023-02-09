import db from "../models/index.js";
import fs from "file-system";
import path from "path";
const BookTicket = db.bookticket;
const Theater = db.theater;

export const getTotalTickets = async (req, res) => {
  let bookedTickets = await Theater.findAll({});
  res.status(200).json(bookedTickets);
  console.log("success");
};

export const transcript = (req, res) => {
  const abc = () => {
    fs.readFile("D:/ACC Node/node3/abc.txt", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.status(200).json({ Data: data });
      }
    });
  };
  const def = (abc) => {
    abc();
  };
  def(abc);
  //res.status(200).json(data);
};

export const postTotalTickets = async (req, res) => {
  console.log("routes reached");
  let info = {
    id: req.body.id,
    movieName: req.body.movieName,
    totalSeats: req.body.totalSeats,
  };
  const pTT = await Theater.create(info);
  res.status(200).json({ pTT });
};

export const totalUsers = async (req, res) => {
  let allCustomers = await BookTicket.findAll({});
  res.status(200).json(allCustomers);
  console.log("success");
};
export const deleteCustomer = async (req, res) => {
  const { id } = req.query;
  await BookTicket.destroy({ where: { id: id } });
  res.json({
    Deleted_Customer: id,
  });
};

export const joinmovie = async (req, res) => {
  const cust = await BookTicket.findAll({ include: Theater });
  console.log(JSON.stringify(cust, null, 2));
};

export const oneToOnee = async (req, res) => {
  let data = await Theater.findAll({
    include: BookTicket,
    where: { id: 2 },
  });
  res.status(200).json(data);
};

export const belongsToo = async (req, res) => {
  let data = await BookTicket.findAll({
    include: Theater,
    where: { seatChoice: 2 },
  });
  res.status(200).json(data);
};

export const oneToManyy = async (req, res) => {
  const id = req.query.id;
  let data = await Theater.findAll({
    include: BookTicket,
    where: { id: id },
  });
  res.status(200).json(data);
};
