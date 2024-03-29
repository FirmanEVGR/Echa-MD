global.owner = ['6283861518933']  
global.mods = ['6283861518933'] 
global.prems = ['6283861518933']
global.nameowner = 'Firmann'
global.numberowner = '6283861518933' 
global.mail = 'nijikaijichii@gmail.com' 
global.gc = 'https://chat.whatsapp.com/GPykFqHeemW0hWVl1UXQTa'
global.instagram = 'https://instagram.com'
global.wm = '𝐄𝐜𝐡𝐚 ✘ '
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Hi'
global.author = 'Echa'
global.autobio = false // Set true untuk mengaktifkan autobio
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'Mark-HDR' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'Mark-HDR' 
}

global.mess = {
  wait: '_Tunggu, sedang diproses ..._',
  done: '*DONE ✅*',
  error: '*_Error 404!!?!_*',
  url: '*Link nya mana kak?*'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})