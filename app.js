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

app.get('/pengalaman', (req, res) => {
    // let data_kandidat = {
    //     nama: 'Ami',
    //     posisi: 'Mahasiswa',
    //     perusahaan: 'Universitas Terbuka',
    // }
    res.render('daftar-pengalaman', {
        nama: 'Amirah Puspadewi',
        jenis_kelamin: 'P',
        profesi: 'Mahasiswa',
        institusi: 'Universitas Terbuka',
        gaji: 1000000,
        pajak: (this.gaji > 10000000) ? 'Gaji Anda kena pajak.' : 'Aman, tidak perlu bayar pajak.',
    })
})

app.listen(port, () => {
    console.log(`App sudah siap, buka http://localhost:${port}`)
})