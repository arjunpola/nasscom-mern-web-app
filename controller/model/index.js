var mongoose = require('mongoose');
const AUTH_URI = MONGO_AUTH_URI = "mongodb+srv://arjun-nasscom:TYKc8WsBYDn38Yas@mern.xpj8mrq.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=MERN";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function MongoInit() {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(AUTH_URI, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log(error);
    }
}

function MongoTerminate() {
    mongoose.disconnect().then(() => {
        console.log('\nMongoose connection is disconnected due to application termination!');
    }).catch((reason) => {
        console.log(reason);
    }).finally(() => {
        process.exit();
    });
}

module.exports = { MongoInit, MongoTerminate };