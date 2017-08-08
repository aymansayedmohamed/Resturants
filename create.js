var client = require('./public/javascripts/connection');

client.indices.create({  
  index: 'gov'
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
  }
});