const fs = require('fs')
const chalk = require('chalk')

// APIKEY OPEN AI
global.jeropenai  = "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" // ISI APIKEY LU

// API , BAGIAN SINI JAN UBAH SAMA SEKALI \\
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
	btz: 'https://api.betabotz.eu.org' // JAN UBAH
}

// APIKEY \\
global.APIKeys = {
	'https://api.zeeoneofc.my.id': '4TyzzyGa5yQEzuE', // ISI APIKEY LU
	'https://api.betabotz.eu.org': 'mN8lnCcw' // Isi key lu
}

global.btz = 'mN8lnCcw'// KEY LU

global.namabot = "Refa" // UBAH JADI NAMA LU
global.namaowner = "rzz" // NAMA OWNER
global.footer_text = "©" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6285797208971']// UBAH NOMOR YANG MAU DI JADIKAN OWNER
global.owner2 = ['6285722050975']
global.pairingNumber = "6285722050975" // ISI NOMOR BOT LU
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU
// -- \\
// FALSE OR TRUE \\
// TRUE = AKTIF
// FALSE = MATI

global.autoTyping = true // BEBAS
global.welcome = false // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // TRUE AJA
global.autoblok212 = true // BEBAS
global.autoread = true // BEBAS
global.autorespon = false // BEBAS
global.onlyprem = true // BEBAS
global.onlygrub = true // BEBAS
global.onlypc = false // BEBAS
global.antispam = true // TRUE KALO MAU GA DI SPAM

// - \\
// PEMISAH \\
global.packname = '© refa' //sticker wm ubah
global.author = 'Di Buat Oleh rzz' //sticker wm ganti nama kalian

// PANEL
global.seller = ['6283167532721', '628999811229', '6283167532721'] // UBAH NOMOR YANG MAU DI JADIKAN SELLER PANEL
global.domain = "https://" // DOMAIN PANEL LU
global.apikey = '' // APIKEY PLTA LU
global.capikey = '' // APIKEY PLTC LU
global.eggsnya = '' // ID EGGS
global.docker = 'ghcr.io/parkervcp/yolks:nodejs_21' // NODEJS
global.location = '' // id location
global.storepanel = '© LynnZxD'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})