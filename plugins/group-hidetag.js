let handler = async(m, { conn, text, participants }) => {
let msg = m.quoted ? m.quoted.text : text
let tel = `6283861518933`
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${tel}:${tel}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
     conn.sendMessage(m.chat, { text: msg.trim(), mentions: participants.map(a => a.id) }, {quoted:fkontak})
}
handler.help = ['hidetag <pesan>']
handler.tags = ['group']
handler.command = /^(hidetag|h|ht)$/i

handler.group = true
handler.admin = true

module.exports = handler