const fs = require('fs');

exports.auto_BlockCaller = async (bp, json) => {
const user_Call = json.content[0].attrs['call-creator']
bp.sendMessage(user_Call, { text: 'Maaf kamu terdeteksi telepon bot!\n5 detik lagi kamu akan,\ndiblokir otomatis oleh bot.'})
await sleep(5000)
bp.updateBlockStatus(user_Call, 'block')
}