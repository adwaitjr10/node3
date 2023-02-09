export const AnotherTask = (sequelize, DataTypes) => {
  const AnotherTask = sequelize.define("anothertask", {
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Education: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    AppraisedValue: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Landacres: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    HouseSizesqrft: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Rooms: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Baths: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    Garage: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  return AnotherTask;
};
export const Evenn = (sequelize, DataTypes) => {
  const evenn = sequelize.define("Evenn", {
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    phno: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  return evenn;
};
export const Oddd = (sequelize, DataTypes) => {
  const oddd = sequelize.define("Oddd", {
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    phno: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  return oddd;
};
export const AxiosUp = (sequelize, DataTypes) => {
  const axiosup = sequelize.define("AxiosUp", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
  return axiosup;
};
