module.exports = function (sequelize, DataTypes) {
  var Pets = sequelize.define("Pets", {
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
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    comment: {
      type: DataTypes.TEXT
    },
    email: {
      type: DataTypes.STRING
    }

  });
  return Pets;

}