const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('here')
    // res.send('hi')
    // res.status(500).send('HI')
    // res.status(500).json({ message: 'Error'})
    res.download("server.js")
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(3000);