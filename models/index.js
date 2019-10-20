const monk = require('monk')

// const dbUrl = `mongodb+srv://jmullen:${process.env.DbName}@cluster0-onieb.mongodb.net/${process.env.DbName}?retryWrites=true&w=majority`
const dbUrl = `mongodb://jmullen:${process.env.DbPassword}@cluster0-shard-00-00-onieb.mongodb.net:27017,cluster0-shard-00-01-onieb.mongodb.net:27017,cluster0-shard-00-02-onieb.mongodb.net:27017/${process.env.DbName}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`
const dbRequest = monk(dbUrl)

// request by the Collection's Name
const data = dbRequest.get('Numbers')

module.exports = {
    data
};