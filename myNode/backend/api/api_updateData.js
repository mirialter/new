const { log } = require('console')
const { query } = require('express')
const router = require('express-promise-router')
const api_users = new router()
const users = require('../conectDb/db')
const bookmark = new users('bookmark')


api_users.post('/addCategory', async (req, res) => {
    console.log('wwww');
    let new_user = await bookmark.addUser(req.body)

    if (new_user)
        console.log(new_user);
    else
        console.log('dont exits in the data');
    console.log(new_user);
    res.json(new_user)
})

// api_users.post('/addBookmark', async (req, res) => {
//     console.log(req.body);
//     let my_user = await bookmark.getQuery(req.body.category)
//     console.log(my_user[0],"wow!");
//      await bookmark.removeOneObect(my_user[0])
    
//     my_user[0].bookmarks = [...my_user[0].bookmarksmy_user[0].bookmarks, req.body.newBookmark]
//     // console.log(my_user[0]);
//     let new_user = await bookmark.addUser(my_user[0])
//     if (new_user)
//         console.log(new_user);
//     else
//         console.log('dont exits in the data');
//     console.log(new_user);
//     res.json(new_user)
// })

api_users.post('/addBookmark', async (req, res) => {

    var find = { name: req.body.category.name };
    send = { $push: {bookmarks: req.body.newBookmark } }
    let final={find,send}
    let new_user = await bookmark.updateObject(final)
    if (new_user)
        console.log(new_user);
    else
        console.log('dont exits in the data');
    res.json(new_user)
})

module.exports = api_users