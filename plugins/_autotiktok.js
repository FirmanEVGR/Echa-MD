const tiktok = require('../lib/tiktok.js');

var handler = m => m
handler.before = async function (m, { text, conn }) {
const isCmd =/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(m.text)
let urlTiktokRegex = /(https?:\/\/[^\s]*tiktok\.com[^\s]*)/g;
var budy = (typeof m.text == 'string' ? m.text : '')
if(!isCmd && budy.match(urlTiktokRegex)){
let res = budy.match(urlTiktokRegex)[0]
await m.react('⏱️')
if (m.isGroup) return await m.reply('Video berhasil dikirim ke private chat!')
let anu = await tiktok(res)
let capt = `*Username :* ${anu.author}
*Deskripsi :* ${anu.desc}`
let qu = await conn.sendFile(m.sender, anu.video, "", capt, m)
await conn.sendMessage(m.sender, {
audio: { url: anu.audio },
mimetype: "audio/mpeg"
},{ quoted: qu })
await m.react('✅')
}
}

module.exports = handler