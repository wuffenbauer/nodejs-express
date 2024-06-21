const m_daftar_karyawan = require('../model/m_daftar_karyawan')

module.exports = {
        
    index: async(req, res) => {      
        let dataview = {
            req: req,
            semua_karyawan: await m_daftar_karyawan.get_semua_karyawan(),
        }
        res.render('daftar-karyawan/all', dataview)
    },

    detail: async(req, res) => {
        const id = req.params.id_karyawan
        let dataview = {
            detail_karyawan: await m_daftar_karyawan.get_satu_karyawan(id),
        }
        res.render('daftar-karyawan/detail', dataview)
    },

    tambah: async(req, res) => {
        res.render('daftar-karyawan/form-tambah', {info_error: null})
    },

    proses_simpan: async(req, res) => {
        try {      
            let insert = await m_daftar_karyawan.tambah_karyawan(req)  
            if (insert.affectedRows > 0) {
                res.redirect('/daftar-karyawan?status=insert-success')
            }        
        } 
        catch (error) {        
            res.render('/daftar-karyawan/form-tambah', {info_error: error})
        }
    }

}