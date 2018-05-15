module.exports = function(sequelize, DataTypes) {
  var Pet = sequelize.define("Pet", {
    animal: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [1, 25]
      }
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [1, 25]
      }
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [1, 25]
      }
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 10,
        min:1
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    date: {
      type: DataTypes.DATE
    },
    img: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    }
  });
  return Pet;
}