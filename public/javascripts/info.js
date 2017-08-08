var client = require('./connection.js');

client.count({index: 'gov',type: 'restaurants'},function(err,resp,status) {  
  console.log("restaurants",resp);
});