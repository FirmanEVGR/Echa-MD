const moment = require('moment-timezone');

const handler = async (m, { conn, usedPrefix, command, groupMetares }) => {
  let anu = db.data.chats[m.chat].listStr;
  let res = Object.keys(anu);
  if (res.length > 0) {
    let grup = await conn.getName(m.key.remoteJid);
    let capt = `「 Kon'nichiwa 」@${m.sender.split('@')[0]} ^_^
*${salam()} 🌸*

🚩 List Store *${grup}*
┏────✧\n`;

    let firman = res.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
    let num = 1;
    for (let i of firman) {
      capt += `│ ${num++}. *${i}*\n`;
    }
    capt += `┗──────✧`;
    let img = `https://telegra.ph/file/5c9c2ad2f0c205ae525ce.jpg`;
    await conn.sendMessage(m.chat, { text: capt, contextInfo: { mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true, title: '', body: '', thumbnailUrl: img, sourceUrl: "", mediaType: 1, renderLargerThumbnail: true }}},{ quoted:m });
  } else {
    m.reply(`Belum ada *list store* di grup ini.`);
  }
}

handler.help = ['store'].map(v => 'list' + v);
handler.tags = ['store', 'group'];
handler.command = /^list(store|shop)?$/i;
handler.group = true;

module.exports = handler;

function salam() {
  let wishloc = '';
  const time = moment.tz('Asia/Jakarta').format('HH');
  wishloc = ('Hi');
  if (time >= 0) {
    wishloc = ('Selamat Malam');
  }
  if (time >= 4) {
    wishloc = ('Selamat Pagi');
  }
  if (time >= 11) {
    wishloc = ('Selamat Siang');
  }
  if (time >= 15) {
    wishloc = ('️Selamat Sore');
  }
  if (time >= 18) {
    wishloc = ('Selamat Malam');
  }
  if (time >= 23) {
    wishloc = ('Selamat Malam');
  }
  return wishloc;
}