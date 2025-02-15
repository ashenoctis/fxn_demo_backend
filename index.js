const express = require('express')
const app = express()
const port = 80

app.get('/',(req, res) => {
    res.send('This is FXN Corp Demo Backend for azure, running on Port: '+ port)
})

app.listen(port, () =>{
    console.log('This is FXN Corp Demo Backend for azure, running on Port: '+ port)
})