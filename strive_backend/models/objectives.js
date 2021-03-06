//import sequelize module
var Sequelize = require("sequelize");
// connect to db 
const sequelize = new Sequelize('mysql://root@localhost:3306/strive');
const user = require('./users.js');
const Objective = sequelize.define('objective', {
    // objectives collumns
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
    },
    timeSpan: {
        type: Sequelize.STRING,
        allowNull: false
    },
    key_results: {
        type: Sequelize.JSON
    },
    progress: {
        type: Sequelize.INTEGER
    },
    user_id: {
        type: Sequelize.INTEGER
    }
}, {
    sequelize,
    modelName: 'objective'
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