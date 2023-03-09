const connectDatabase = require('./config/database');
const City = require('./models/city');

connectDatabase();

async function countCitiesByDepartment() {
    const results = await City.aggregate([
        { $group: { _id: "$department_number", count: { $sum: 1 } } },
        { $sort: { _id: 1 } },
        { $project: { _id: 0, department_number: "$_id", count: 1 } },
    ]);
    console.log(results);
}

countCitiesByDepartment();
