//import sequelize module and connection
var Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root@localhost:3306/strive');
// import quote data
const quoteData = require('./quoteData.js');

const Quote = sequelize.define('quote', {
    // attributes
    quote_text: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quote_author: {
        type: Sequelize.STRING,
        allowNull: false
    },

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


// sync quote model, seed db with quotes
Quote.sync({ force: true }).then(() => {
    var quoteObj = quoteData.quoteData[0]
    // make sure data doesn't overflow
    Quote.findAll()
        .then((quotes) => {
            if (quotes.length <= 60) {
                for (let quote in quoteObj) {
                    Quote.create({
                        quote_text: quote,
                        quote_author: quoteObj[quote]
                    });
                }    
            }
        })
});


module.exports = {
    Quote: Quote
}
