module.exports = function (sequelize, DataTypes) {
  var pets = sequelize.define("pets", {
    animal: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    lost: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING
    },
    comment: {
      type: DataTypes.TEXT
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return pets;

}