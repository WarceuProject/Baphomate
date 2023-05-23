//GUA LEXXY SUKA SKR
//SIMPLE KEREN RAPIH
//CREATED BY LEXXY OFFICIAL

const fs = require('fs')

exports.groupResponse_Remove = async (bp, update) => {
try {
ppuser = await bp.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await bp.groupMetadata(update.id)
for (let participant of update.participants) {
try{
let metadata = await bp.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'remove'){
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Bye👋'}, type: 1 }]
await bp.sendMessage(
update.id, 
{
text: `*Sayonara @${num.split("@")[0]}*\n*kalo mau balik lagi ke group ini, wajib bawa gorengan 1 truk😊*`,
buttons: button,
footer: metadata.subject, 
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Welcome = async (bp, update) => {
try {
ppuser = await bp.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await bp.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await bp.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'add') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Welcome👋'}, type: 1 }]
await bp.sendMessage(
update.id, 
{ 
text: `*Hello @${num.split("@")[0]}*\n*Welcome to ${metadata.subject}* \n\n*Jangan Lupa Intro*\n*Nama:*\n*Umur:*\n*Hobi:*\n*Askot:*\n\n*Sering² Baca Deskripsi Ya Kak🙏*`,
buttons: button, 
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Promote = async (bp, update) => {  
const metadata = await bp.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await bp.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'promote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat🎉'}, type: 1 }]
await bp.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Naik jabatan jadi admin grup*`,
buttons: button, 
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Demote = async (bp, update) => {  
const metadata = await bp.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await bp.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'demote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat🎉'}, type: 1 }]
await bp.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Turun jabatan jadi admin grup*`,
buttons: button, 
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}