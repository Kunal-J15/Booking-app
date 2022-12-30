const Sequelize  = require("sequelize");
const sequelize = require("../utils/database");

const Appointment = sequelize.define("appointment",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    number:{
        type:Sequelize.STRING
    }
}) 
module.exports = Appointment;