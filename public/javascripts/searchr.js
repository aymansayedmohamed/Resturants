
var client = require('./connection.js');

function Search(from,size,time, cb)
{

 client.search({
  index: 'gov',
  type: 'restaurants',
  body: {
    from : from    , size : size,

query: {
   bool :{
      must:[
              {range : {
                    "closing_hr":{
                      gt : time,
                       format:"HH:mm:ss a"
                                }
                       }
              },   
          ],
      must:[
           {range : {
                    "opening_hr":{
                      lte : time,
                      format:"HH:mm:ss a"
                                }
                    }
           },      
          ],

         }
}
  }
},function (error, response,status) {
        cb(response.hits.hits);
});
}

module.exports = Search;