//import sequelize module
var Sequelize = require("sequelize");
// connect to db 
const sequelize = new Sequelize('mysql://root@localhost:3306/strive');

// user model definition
const User = sequelize.define('user', {
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
User.sync({ force: true }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return User.create({
        first_name: 'Kayla',
        last_name: 'Tillman',
        email: 'kaylatillman70@gmail.com',
        username: 'kay.Till',
        password: 'password'
    });
});





module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}