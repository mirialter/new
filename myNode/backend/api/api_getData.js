const { query } = require('express')
const router = require('express-promise-router')
const api_users = new router()
const users = require('../conectDb/db')
const bookmarksData = new users('bookmark')

api_users.get('/getAllData', async (req, res) => {
    let alll = await bookmarksData.getAll()
    // console.log(donorss);
    res.json(alll)
})

api_users.get('/getCategory', async (req, res) => {
    let my_aggragate = [
        {
            '$project': {
                'name':"$name"
            }
        }
    ]
    let theAns = await bookmarksData.getAggregate(my_aggragate)
    res.json(theAns)
    console.log(theAns);

})

module.exports = api_users