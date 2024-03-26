var handler = async (m, { conn, text, usedPrefix, command }) => {
try {
if(!text) return m.reply(`*Contoh :*\n${usedPrefix+command} 120363207783982936@g.us|Sirkel Ngawi`)
m.reply(wait)
await sleep(2000)
let anu = await conn.groupMetadata(text.split('|')[0])
let gcname = text.split('|')[1]
let member = await anu.participants
let user = []
for(let i of member){
user.push(i.id)
}
let buat = await conn.groupCreate(gcname, user);
await m.reply(`Sukses membuat grup *${gcname}* dengan jumlah anggota ${user.length - 1}`)
sleep(1000)
await conn.groupLeave(buat.id)
} catch (error) {
conn.reply(m.chat, `❌ Terjadi kesalahan: ${error}`, m);
}
};

handler.help = ['tgc'];
handler.command = /^tgc$/i;
handler.tags = ['owner'];
handler.owner = true;
module.exports = handler;

const sleep = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}