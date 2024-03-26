const moment = require('moment-timezone');

const handler = async (m, { conn }) => {
  let _uptime = process.uptime() * 1000;
  let _muptime;
  if (process.send) {
    process.send('uptime');
    _muptime = await new Promise(resolve => {
      process.once('message', resolve);
      setTimeout(resolve, 1000);
    }) * 1000;
  }
  let muptime = clockString(_muptime);
  let uptime = clockString(_uptime);
  let d = new Date(new Date + 3600000);
  let locale = 'id';
  let date = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  let img = `https://telegra.ph/file/127459a86382952fa7627.jpg`;
  let capt = `${salam()} @${m.sender.split("@")[0]}

𝑺𝒄𝒓𝒊𝒑𝒕 :
https://github.com/Echaa`;
  conn.sendMessage(m.chat, {
    text: capt,
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: '𝐃𝐚𝐭𝐞 : ' + date,
        body: '𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ' + uptime,
        thumbnailUrl: img,
        sourceUrl: ``,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });
}

handler.help = ['sc', 'script'];
handler.tags = ['main'];
handler.command = /^(sc|script|sourcecode)$/i;

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

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}