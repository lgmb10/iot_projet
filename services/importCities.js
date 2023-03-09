const City = require('../models/city');
const cities = require('../cities.json');
const connectDatabase = require('../config/database');

connectDatabase();

const seedCities = async () => {
    try {
        await City.deleteMany();
        console.log('Villes supprimées');

        await City.insertMany(cities.cities)
        console.log('Villes ajoutées')

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedCities();