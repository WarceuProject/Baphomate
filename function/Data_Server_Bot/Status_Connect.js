const fs = require('fs');

exports.status_Connection = async (bp, update, connectToWhatsApp) => {  
console.log('Connection update:', update)
if (update.connection === 'open') 
console.log("Connected with " + bp.user.id)
else if (update.connection === 'close')
connectToWhatsApp()
}