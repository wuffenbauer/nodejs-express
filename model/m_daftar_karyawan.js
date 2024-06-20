const mysql   = require('mysql2')
const db      = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'xdb_belajar_database',
})
db.connect()

module.exports = {
    get_semua_karyawan: function() {
        let sql = mysql.format(
            `SELECT 
                k.*, 
                d.kode AS departemen_kode, d.nama AS departemen_nama, 
                j.nama AS jabatan_nama, j.role AS jabatan_role, j.deskripsi AS jabatan_deskripsi
            FROM daftar_karyawan AS k
            LEFT JOIN master_departemen AS d ON d.id = k.departemen_id
            LEFT JOIN master_jabatan AS j ON j.id = k.jabatan_id;`
        )
        
        return new Promise((resolve, reject) => {
            db.query(sql, function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                }
                else {
                    resolve(hasil)
                }
            })
        })
    }
}