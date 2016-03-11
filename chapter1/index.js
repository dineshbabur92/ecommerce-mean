var mongodb = require('mongodb');
var movies = require('./movies');
var dbInterface = require('./interface');
var connect = require('./connect');

var db;

connect(function(error, conn) {
      if (error) {
        console.log(err);
      }
     console.log("connection successful");
      db = conn;
        dbInterface.byDirector(db, 'Irvin Kershner', function(error, docs) {
          if(error){
              
              console.log(error);
              
          }
          console.log(Array.isArray(docs));
            console.log(docs);
          console.log(docs.length, 1);
          console.log(docs[0].title, 'The Empire Strikes Back');
          //done();
        });
});
    
 