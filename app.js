const express = require('express')
const app     = express()
const port    = 3000

app.set('view engine', 'ejs')   // setting penggunaan template engine untuk express
app.set('views', './view-ejs')  // setting penggunaan folder untuk mentimpan file .ejs

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/profil', (req, res) => {
    res.render('profil')
})

app.listen(port, () => {
    console.log(`App sudah siap, buka http://localhost:${port}`)
})