module.exports = function(sequelize, DataTypes) {
  var pets = sequelize.define("pets", {
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
      
      },
    lost: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE
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
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }

  });
  return pets;
}