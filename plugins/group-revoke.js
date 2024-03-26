let handler = async (m, { conn }) => { 
   let res = await conn.groupRevokeInvite(m.chat) 
   let gruf = m.chat 
   m.reply(`🚩 Tautan grup ini telah diperbarui oleh @${m.sender.split('@')[0]}, ketik *.link* untuk melihatnya`)
 } 
 handler.help = ['revoke'] 
 handler.tags = ['group', 'adminry'] 
 handler.command = /^re(voke|new)(invite|link)?$/i 
 handler.group = true 
 handler.admin = true 
 handler.botAdmin = true 
  
 module.exports = handler