let handler = async (m, { conn }) => {
let img = 'https://telegra.ph/file/452b1f5af8b657a430a1f.jpg'
let capt = `*— SEWA BOT*

*Sewa Bot 7 Hari*
- Harga: Rp 3.000

*Sewa Bot 14 Hari*
- Harga: Rp 6.000

*Sewa Bot 30 Hari*
- Harga: Rp 10.000

*Sewa Bot 1 Tahun*
- Harga: Rp 119.000


*— UPDATE PREMIUM*

*Premium 7 Hari*
- Harga: Rp 2.000

*Premium 15 Hari*
- Harga: Rp 3.000

*Premium 30 Hari*
- Harga: Rp 5.000

*Premium 1 Tahun*
- Harga: Rp 99.000`
conn.sendMessage(m.chat, {
text: capt,
contextInfo: { 
mentionedJid: [m.sender],
externalAdReply: { 
title: '',
body: '',
thumbnailUrl: img,
sourceUrl: "https://wa.me/6283861518933?text=Assalamualaikum+Kak",
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
handler.help = ['sewa', 'sewabot', 'buyprem', 'premium']
handler.tags = ['main']
handler.command = /^(buyprem|sewa|sewabot|prem|premium)$/i

module.exports = handler