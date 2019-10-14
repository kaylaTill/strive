const quoteData = require('./quoteData.js');

// const Quote = sequelize.define('quote', {
//     // attributes

// }, {
//     // options
// });

var quoteObj = quoteData.quoteData[0]

for (var quote in quoteObj) {
    console.log(`key: ${quote} value: ${quoteObj[quote]}`);
}
