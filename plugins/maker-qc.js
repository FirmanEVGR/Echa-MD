const axios = require('axios');
const uploadImage = require('../lib/uploadImage.js');

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
try {
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || '';
let txt = m.quoted ? m.quoted.text : text;
if (!txt) throw `𝐂𝐨𝐧𝐭𝐨𝐡 :\n${usedPrefix + command} halo`;
m.reply(mess.wait);
let aw = text ? text : m.quoted.text
let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/320b066dc81928b782c7b.png')
const obj = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": m.pushName,
"photo": {
"url": pp
}
},
"text": aw,
"replyMessage": {}
}]
}
const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
 'Content-Type': 'application/json'
}
})
const buffer = Buffer.from(json.data.result.image, 'base64')
conn.sendImageAsSticker(m.chat, buffer, m, {
packname: global.packname,
author: global.author
})
} catch (e) {
throw e;
}
};

handler.help = ['fakechat', 'qc', 'quickchat'];
handler.tags = ['sticker'];
handler.command = /^(fc|fakechat|qc|quickchat)$/i;
handler.limit = true;

module.exports = handler;