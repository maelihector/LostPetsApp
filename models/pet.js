module.exports = function(sequelize, DataTypes) {
  var pets = sequelize.define("pets", {
    animal: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [1, 25]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        len: [1, 150]
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
  return pets;
}