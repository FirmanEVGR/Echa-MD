const tiktok = require('../lib/tiktok.js');

var handler = m => m
handler.before = async function (m, { text, conn }) {
const isCmd =/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(m.text)
let urlTiktokRegex = /(https?:\/\/[^\s]*tiktok\.com[^\s]*)/g;
var budy = (typeof m.text == 'string' ? m.text : '')
let chat = db.data.chats[m.chat]
if(m.isGroup && !chat.autotiktok) return
if(!isCmd && budy.match(urlTiktokRegex)){
let res = budy.match(urlTiktokRegex)[0]
m.reply(mess.wait)
let anu = await tiktok(res)
let capt = `*Username :* ${anu.author}
*Deskripsi :* ${anu.desc}`
let qu = await conn.sendFile(m.chat, anu.video, "", capt, m)
await conn.sendMessage(m.chat, {
audio: { url: anu.audio },
mimetype: "audio/mpeg"
},{ quoted: qu })
}
}

module.exports = handler

/*
Plugins by 𝐅𝐢𝐫𝐦𝐚𝐧𝐗𝐃

Jangan hapus
Mikir udah gede, jangan cuman numpang nama doang wkwk
*/