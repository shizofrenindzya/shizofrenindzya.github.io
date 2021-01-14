let mongoClient = require("mongodb").MongoClient,
url =  "mongodb://localhost";
mongoClient.connect(url, function(err, client){
    if(err) console.log(err.stack);
    
    let db = client.db("sandbox");
    let humans = db.collection("humans");
 
    performActions(humans, {name: "Joe", age: 24}, {name: "Joe"})

});
function performActions(collection, data, query) {
    console.log("inserting...");
    collection.insertOne(data, function() {
        console.log("Inserted!")
    });
    console.log("Deleted!");
    collection.deleteMany(query);
}
