//import sequelize module
var Sequelize = require("sequelize");
// connect to db 
const sequelize = new Sequelize('mysql://root@localhost:3306/strive');
const Objective = require('./objectives.js');
// user model definition

const User = sequelize.define('user',{
    // user collumns
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user'
});


//test connection to db

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// sync user model
User.sync({ force: false }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    console.log('Synced to user table');
});


module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize,
    User: User
}