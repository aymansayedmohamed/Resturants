var client = require('./connection.js');

client.indices.getMapping({  
    index: 'gov',
    type: 'restaurants',
  },
function (error,response) {  
    if (error){
      console.log(error.message);
    }
    else {
      console.log("Mappings:\n",response.gov.mappings.restaurants.properties);
    }
});