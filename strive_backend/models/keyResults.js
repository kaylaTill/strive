//import sequelize module
var Sequelize = require("sequelize");
// connect to db 
const sequelize = new Sequelize('mysql://root@localhost:3306/strive');
const objective = require('./objectives.js');
const KeyResult = sequelize.define('keyResult', {
    // objectives collumns
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    task: {
        //Array of task, respond by adding to end of array, on post 

        //send task array on get 

    },

    objective_id: {
        type: Sequelize.INTEGER
    }
}, {
    sequelize,
    modelName: 'keyResult'
});



sequelize
    .authenticate()
    .then(() => {
        console.log('Objectives connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// sync model
Objective.sync({ force: false }).then(() => {
    // sync obj model
    console.log('Synced to objective table');
});



module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize,
    Objective: Objective
}