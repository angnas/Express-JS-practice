const express = require('express');
const app = express();

// app.use(logger)
app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log('here')
    // res.send('hi')
    // res.status(500).send('HI')
    // res.status(500).json({ message: 'Error'})
    res.download("server.js")
})

const userRouter = require('./routes/users')
// const postRouter = require('./routes/posts')


app.use('/users', userRouter)
// app.use('/posts', postRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000);