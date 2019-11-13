



let kelas3 = [{
    nis: 1,
    nama: "winnerdy"
},
{
    nis: 2,
    nama: "Setiabudi"
},
]

function tambahSiswa(siswa) {
    return new Promise((resolve, reject) => {
        try {
            resolve()
            kelas3.push(siswa);
        } catch (err) {
            console.log(err)
        }
    })
}

function getKelas() {
    console.log('kelas3 dalam getclass (baris:26)')
}

async function init() {
    await tambahSiswa({
        nis: 3,
        nama: 'Bambang'
    })
    await getKelas()
}
init()

