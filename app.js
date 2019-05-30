const express = require('express')

const app = express()

app.get('/', (req, res) => {
    const host = req.hostname
    res.json({
        message: `App working ${host}`,
        status: 200
    })
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})
