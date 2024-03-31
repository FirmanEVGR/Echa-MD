let tiktok = require('../lib/tiktok.js')

let handler = async (m, { conn, args, text, usedPrefix, command }) => { 
 if (!args[0]) throw `🚩 *Example:* ${usedPrefix+command} https://vt.tiktok.com/ZS8TQkpTK/`
await m.react('⏱️')
let anu = await tiktok(text)
let capt = `*Username :* ${anu.author}
*Deskripsi :* ${anu.desc}`
let qu = await conn.sendFile(m.sender, anu.video, "", capt, m)
await conn.sendMessage(m.sender, {
audio: {
url: anu.audio
},
mimetype: "audio/mpeg"
},{ quoted: null })
if (m.isGroup) m.reply('> ⓘ _Video berhasil dikirim ke private chat_')
await m.react('✅')
setTimeout(async function(){
await m.react('')
}, 5000)
}
handler.help = ['tiktok', 'tt'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|ttdl|tiktokdl|tiktoknowm)$/i
handler.limit = true

module.exports = handler