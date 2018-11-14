var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
	host:'localhost:9200',
	log:'trace'
});



// client.indices.create({
//      index: 'transaction'
//  }, function(err, resp, status) {
//      if (err) {
//          console.log(err);
//      } else {
//          console.log("create", resp);
//      }
//  });

// ################ to create entity user document ###########################

// client.index({
//      index: 'testing_entity_user',
//      type: 'posts',
//      body: {
//      	"firstName": "praveen",
//      	"LastName":"kumar",
//         "entityId":{
//         	"id":"AWcQ3bjgtgsCLBibsb85",
//         	"entityId": 1,
//             "entityName": "Entity1",
//             "entityTypes": "type 1"
//         },
//         "addresses":
//         {"addressLine1":"Rajajinagar", "addressLine2":"2 stage", "city":"Bangalore", "State":"Karnataka", "zip":560065}

//      }
//  }, function(err, resp, status) {
 	 
//      console.log(resp);
//  });


// #################################################################################


// ############################### to create transaction document #####################


// for (i=601;i<=700;i++){
// client.index({
//      index: 'transaction',
//      type: 'posts',
//      body: {
//         	"entityId": {
//         	              "id": "AWcQ4T8ztgsCLBibsb9k",
// 			              "entityId": 35,
//             			  "entityName": "Entity2",
//             			  "entityTypes": "type 2"



//         	            },

//         	"entityUser": {
//         				"id":"AWcRe-M6tgsCLBibsb_E",
//         				"firstName": "praveen",
// 			            "LastName": "kumar",
// 			            "entityId": {
// 			              "id": "AWcQ3bjgtgsCLBibsb85",
// 			              "entityId": 1,
// 			              "entityName": "Entity1",
// 			              "entityTypes": "type 1"
// 			            },
// 			            "addresses": {
// 			              "addressLine1": "Rajajinagar",
// 			              "addressLine2": "2 stage",
// 			              "city": "Bangalore",
// 			              "State": "Karnataka",
// 			              "zip": 560065
// 			            }


//         	          },
//         	"tranDescription": "Descirption1",
//         	"transactionType": "Tran Type 3",
//         	"transactionDate": "21/10/2018",
//         	"transactionAmount": "75,000"


//      }
//  }, function(err, resp, status) {
//  	 console.log(i)
//      console.log(resp);
//  });

// }
// ######################################################################################


// client.ping({
//      requestTimeout: 30000,
//  }, function(error) {
//      if (error) {
//          console.error('elasticsearch cluster is down!');
//      } else {
//          console.log('Everything is ok');
//      }
//  }),


// client.indices.exists({
//      index: "entity1"
    
//  }, function(err, resp, status) {
//  	console.log("@@@@@@@@@@@")
//      console.log(resp);
//      console.log(status)
//  });


// initMapping : function(req,resp,indexName,docType,payload){
// client.indices.putMapping({
//      index: indexName,
//      type: docType,
//      body:payload
//  }, function(err, resp, status) {
//  	console.log("@@@@@@@@@@@")
//      console.log(resp);
//      console.log(status)
//  });

// },




// client.search({
//     index: 'latest_entity',
//     type: 'posts',
//     body: {
//         query: {
//             match: {
//                 entityId: '20'


//             }
//         }
//     }
// }).then(function(resp) {
//     console.log(resp["hits"]["hits"]);
// }, function(err) {
//     console.trace(err.message);
// });

// client.search({
//     index: 'testing_entity_user',
//     type: 'posts',
//     body: {
//     query: {
//       bool: {
//         filter: 
//           { match: { "firstName": "praveen" }},
//           // { match: { "entityId.entityTypes": "type 3" }},
        
//       },
//     },
//   },
// }).then(function(resp) {
//     console.log(resp["hits"]["hits"]);
// }, function(err) {
//     console.trace(err.message);
// });

// client.search({
//     index: 'transaction',
//     body: {
//         filter: {
//             range: {
//                 transactionDate:{
//                 	"gte" : "20/10/2018",
//                 	"lte" : "31/10/2018"
//                 }

//             }
//         }
//     }
// }).then(function(resp) {
//     console.log(resp);
// }, function(err) {
//     console.trace(err.message);
// });




//  client.search({
//     index: 'testing_entity_user',
//     type: 'posts',
//     body: {
//     "query": {
//     "match": {
//       "_all": "pavan"
//     }
//   },


//             }
// }).then(function(resp) {
//     console.log(resp["hits"]["hits"]);
// }, function(err) {
//     console.trace(err.message);
// });


//  client.search({
//     index: 'latest_entity',
//     type: 'posts',
//     body: {
//     "query": {
//     "match": {
//       "_all": "type 2"
//     }
//   },


//             }
// }).then(function(resp) {
//     console.log(resp["hits"]["hits"]);
// }, function(err) {
//     console.trace(err.message);
// });