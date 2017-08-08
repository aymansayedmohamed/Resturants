var client = require('./public/javascripts/connection.js');

client.indices.putMapping({  
  index: 'gov',
  type: 'restaurants',
  body: {
    properties: {
      'opening_hr': {
        "type": "date",
        "format": "HH:mm:ss a"
      },
      'closing_hr': {
        "type": "date",
        "format": "HH:mm:ss a"
      },
    }
  }
},function(err,resp,status){
    if (err) {
      console.log(err);
    }
    else {
      console.log(resp);
    }
});