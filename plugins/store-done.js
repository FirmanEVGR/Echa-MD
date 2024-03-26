const moment = require('moment-timezone');

const jam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z');
const _t = new Date(new Date + 3600000);
const tanggal = _t.toLocaleDateString('id', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

var handler = async (m, { conn, isAdmin }) => {
  if (!isAdmin) return;
  if (!m.quoted) return;
  let stats = ``;
  if (m.text == 'p' || m.text == 'proses') {
    stats += `       『  *Pesanan Diproses*  』

📆 Tangal : ${tanggal}
⌚ Jam : ${jam}
✨ Status : Diproses

Hai kak @${m.quoted.sender.split('@')[0]}
Pesanan kamu sedang diproses, silahkan menunggu.`;
  }
  if (m.text == 'd' || m.text == 'done') {
    stats += `       『  *Pesanan Selesai*  』

📆 Tangal : ${tanggal}
⌚ Jam : ${jam}
✨ Status : Selesai

Hai kak @${m.quoted.sender.split('@')[0]}
Silahkan di cek ya, apabila ada kesalahan segera hubungi admin.`;
  }
  m.reply(stats);
}

handler.customPrefix = /^(done|d|proses|p)$/i;
handler.command = new RegExp();

module.exports = handler;