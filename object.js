function panggilObject(){
    var mobil = {
        type: 'sedan',
        harga: '21213',
        warna: 'pink',
        tahun: [2001,2002,2003,2004]
    }

    //memanggil data berdasarkan index
    console.log(mobil.warna)
    //memanggil data array
    console.log(mobil.tahun[2])
}

panggilObject()