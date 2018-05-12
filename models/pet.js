module.exports = function(sequelize, Datatypes) {
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
        
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [1, 25]
      }
    }
    // needs img tag
    //date added included in sequelize??
  })
}