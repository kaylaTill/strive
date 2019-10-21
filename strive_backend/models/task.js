//import sequelize module
var Sequelize = require("sequelize");
// connect to db 
const sequelize = new Sequelize('mysql://root@localhost:3306/strive');
const Task = sequelize.define('task', {
    // objectives collumns
    task: {
        type: Sequelize.STRING
    },
    objective_id: {
        type: Sequelize.INTEGER
    },
    KR_id: {
        type: Sequelize.INTEGER
    }
}, {
    sequelize,
    modelName: 'task'
});



sequelize
    .authenticate()
    .then(() => {
        console.log('Tasks connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// sync model
Task.sync({ force: false }).then(() => {
    // sync obj model
    console.log('Synced to tasks table');
});



module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize,
    Task : Task 
}