var client = require('./connection.js');
var inputfile = require("./restaurants.json");
var bulk = [];

var makebulk = function(restaurantlist,callback){
  for (var current in restaurantlist){
    bulk.push(
      { index: {_index: 'gov', _type: 'restaurants', _id: restaurantlist[current].id } },
      {
        'created_at': restaurantlist[current].created_at,
        'updated_at': restaurantlist[current].updated_at,
        'city_id': restaurantlist[current].city_id,
        'opening_hr': restaurantlist[current].opening_hr,
        'closing_hr': restaurantlist[current].closing_hr,
        'delivery_charge': restaurantlist[current].delivery_charge,
        'description_en': restaurantlist[current].description_en,
        'description_ar': restaurantlist[current].description_ar,
        'menus_count': restaurantlist[current].menus_count,
        'reviews_count': restaurantlist[current].reviews_count,
        'branches_count': restaurantlist[current].branches_count,
        'photos_count': restaurantlist[current].photos_count,
        'name_en': restaurantlist[current].name_en,
        'name_ar': restaurantlist[current].name_ar
      }
    );
  }
  callback(bulk);
}

var indexall = function(madebulk,callback) {
  client.bulk({
    maxRetries: 5,
    index: 'gov',
    type: 'restaurants',
    body: madebulk
  },function(err,resp,status) {
      if (err) {
        console.log(err);
      }
      else {
        callback(resp.items);
      }
  })
}

makebulk(inputfile,function(response){
  console.log("Bulk content prepared");
  indexall(response,function(response){
    console.log(response);
  })
});
