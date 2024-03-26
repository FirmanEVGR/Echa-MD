const { proto } = require('@whiskeysockets/baileys');

var handler = async(m, { conn, usedPrefix, command, text }) => {
  let M = proto.WebMessageInfo;
  if (!text || !m.quoted) return m.reply(`Balas pesan dengan perintah *${usedPrefix+command}*\n\n*Contoh :*\n${usedPrefix+command} Payment`);
  
  let msgs = db.data.chats[m.chat].listStr;
  if (!(text in msgs)) return m.reply(`Tidak ada list dengan bernama *${text}* digrup ini!`);
  
  msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON();
  m.reply(`Berhasil mengedit list berjudul *${text}* di grup ini^_^\nKetik *${usedPrefix}list* untuk mengeceknya.`);
}

handler.help = ['editlist <text>'];
handler.tags = ['store', 'group', 'adminry'];
handler.command = /^(editlist)$/;
handler.group = true;
handler.admin = true;

module.exports = handler;