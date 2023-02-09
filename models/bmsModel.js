export const BookTicket = (sequelize, DataTypes) => {
  const BookTicket = sequelize.define("bookticket", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seatChoice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      allowDuplicate: true,
    },
    movieName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return BookTicket;
};
export const Theater = (sequelize, DataTypes) => {
  const Theater = sequelize.define("theater", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    movieName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Theater;
};
