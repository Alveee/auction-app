const { MongoClient } = require("mongodb");
const dbConnString = process.env.ATLAS_URI;
const client = new MongoClient(dbConnString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

var _db;

module.exports = {
	connect: function (callback) {
		client.connect(function (err, db) {
			if (db) {
				_db = db.db("auction");
				console.log("Successfully connected to MongoDB.");
			}
			return callback(err);
		});
	},

	getDb: function () {
		return _db;
	},
};
