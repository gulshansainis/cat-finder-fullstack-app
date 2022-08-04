const { MongoClient } = require("mongodb");
const connectionString = 'mongodb+srv://admin:password09876@cluster0.68t6z.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let databaseName = 'cats';

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db(databaseName);
      console.log(`Successfully connected to ${databaseName} database`);

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};