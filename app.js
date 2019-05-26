const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        message: 'App working'
    })
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})
