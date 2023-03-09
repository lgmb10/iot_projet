const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(con => {
        console.log(`Db connected with host ${con.connection.host}`);
    })
}

module.exports = connectDatabase;