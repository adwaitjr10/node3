import { Sequelize } from "sequelize";
import db from "../models/index.js";
const BookTicket = db.bookticket;
const Theater = db.theater;

export const getMovieShows = async (req, res) => {
  let bookedTickets = await Theater.findAll({});
  res.status(200).json(bookedTickets);
  console.log("success");
};

export const createCustomer = async (req, res) => {
  //console.log(seats.toJSON().totalSeats - req.body.seatChoice);

  let info = {
    id: req.body.id,
    fullName: req.body.fullName,
    age: req.body.age,
    seatChoice: req.body.seatChoice,
    movieName: req.body.movieName,
  };
  const Customer = await BookTicket.create(info);
  res.status(200).json(info);
  let seats = await Theater.findOne(
    { attributes: ["totalSeats"] },
    {
      where: { movieName: req.body.movieName },
    }
  );

  let ts = seats.toJSON().totalSeats - req.body.seatChoice;
  console.log(ts);

  await Theater.update(
    { totalSeats: ts },
    { where: { movieName: req.body.movieName } }
  );
};

export const deleteCustomer = async (req, res) => {
  const { id } = req.query;
  await BookTicket.distroy({ where: { id: id } });
  res.json({
    Deleted_Customer: id,
  });
};
