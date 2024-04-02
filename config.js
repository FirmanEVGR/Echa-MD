global.owner = ['6283861518933']  
global.mods = ['6283861518933'] 
global.prems = ['6283861518933']
global.nameowner = 'Firmann'
global.numberowner = '6283861518933' 
global.mail = 'firmansenpai@gmail.com' 
global.gc = 'https://chat.whatsapp.com/KNJ3aI2DqFw7m1sJDH8Z6t'
global.instagram = 'https://instagram.com'
global.wm = '𝐄𝐜𝐡𝐚 ✘ '
global.wait = '_*Tunggu, sedang di proses ...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = global.wait
global.packname = 'Hi'
global.author = 'Echa'
global.autobio = false
global.maxwarn = '2'
global.btc = 'Mark-HDR' 
global.lann = 'YOUR_APIKEY_HERE'

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'Mark-HDR'
}

global.mess = {
  wait: '_*Tunggu, sedang diproses ...*_',
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