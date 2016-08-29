/**
 * Created by quikr on 7/18/16.
 */
//Decide which configureStore to use based on production or dev
console.log("reached here");
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production')
{
  module.exports = require('./configureStore.prod');

}

else {
  module.exports = require('./configureStore.dev');
}
