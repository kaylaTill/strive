//import sequelize module
var Sequelize = require("sequelize");
// connect to db 
const sequelize = new Sequelize('mysql://root@localhost:3306/strive');
const User = require('./users.js');
const Objective = sequelize.define('objective', {
    // objectives collumns
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    timeSpan: {
        type: Sequelize.STRING,
        allowNull: false
    },
    keyResult1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    keyResult2: {
        type: Sequelize.STRING,
        allowNull: false
    },
    keyResult3: {
        type: Sequelize.STRING,
        allowNull: false
    },
    keyResult4: {
        type: Sequelize.STRING,
        allowNull: false
    },
    keyResult5: {
        type: Sequelize.STRING,
        allowNull: false
    }
    // },
    // user_id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: User.User,
    //         key: 'id'
    //     },
    //     allowNull: false
    // }
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
    Objective.create({
        name: 'Test Objectives',
        timeSpan: '6 Months',
        keyResult1:'KR',
        keyResult2: 'KR',
        keyResult3: 'KR',
        keyResult4: 'KR',
        keyResult5: 'KR',
        userID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
        }
    })
    console.log('Synced to user table');
});



module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize,
    Objective: Objective
}