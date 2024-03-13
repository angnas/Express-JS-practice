const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    // res.send("User List")
    res.render("user/new")

})

router.get('/new', (req, res) => {
    // res.send("User New Form")
    res.render("users/new" , { firstName : "Test" })
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router
.route('/:id').get((req, res) => {
    console.log(req.user)
    res.send(`Get User With ID ${req.params.id}`)
})
.put((req, res) => {
    
    res.send(`Update User With ID ${req.params.id}`)
})
.delete((req, res) => {
    
    res.send(`Delete User With ID ${req.params.id}`)
})

const users = [{ name: "kyle"}, {name: 'sally'}]
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})





////another way of defining
// router.get('/:id', (req, res) => {
//     // req.params.id
//     res.send(`Get User With ID ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
    
//     res.send(`Update User With ID ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
    
//     res.send(`Delete User With ID ${req.params.id}`)
// })



module.exports = router