
// disini atur aja kak menu bot nya └───────⭓
// jangan lupa hapus fitur yg ga penting ┌──⭓│⭔

var monoSpace = '```'

exports.allmenu = (sender,prefix,ad,jumlahcmd,jumlahharian,namenya,premnya,isOwner,usernya,romnya,jam,tanggal,no,ucapanWaktu,fot) => {
return`
╭──❍ ⟩>「 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 」❍
├ *Nama* : ${namenya}
├ *Number* : @${sender.split('@')[0]}
├ *Premium* : ${premnya}
╰───────⭓

╭──❍ ⟩>「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」❍
├ *Nama Bot* : 𝗕𝗮𝗽𝗵𝗼𝗺𝗮𝘁𝗲 - 𝗕𝗼𝘁
├ *Owner* : ${isOwner}
├ *Mode* : Public
├ *Prefix* : 「 ! 」
├ *Total Hit* : ${jumlahcmd}
├ *Total Hit Today* : ${jumlahharian}
├ *Terdaftar* : ${usernya}
├ *Room Chat* : ${romnya}
╰───────⭓

╭──❍ ⟩>「 𝗝𝗲𝗽𝗮𝗻𝗴 」❍
├ *Date* : ${jam} ${tanggal}
├ *Salam* : ${ucapanWaktu}
╰───────⭓

╭───────⭓
│⭔ 𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐
│⭔ !menu
│⭔ !rules
│⭔ !owner
│⭔ !script
│⭔ !infobot
│⭔ !donate
│⭔ !jadibot
│⭔ !listjadibot
│⭔ !sewabot
│⭔ !infoowner
│⭔ !totalhit
│⭔ !hit
│⭔ !speedbot
│⭔ !speedtest
│⭔ !ping
╰───────⭓

╭──❍ ⟩>
│⭔ *NSFW MENU*
│⭔ !Kacamata
│⭔ !ahegao
│⭔ !kobo
│⭔ !ass
│⭔ !yuri
│⭔ !blowjob
╰───────⭓

╭──❍ ⟩>
│⭔ *ASUPAN MENU*
│⭔ !asupanloli
│⭔ !asupanjp
│⭔ !asupanth
│⭔ !ass
│⭔ !yuri
│⭔ !blowjob
╰───────⭓

╭──❍ ⟩>
│⭔ 𝙐𝙎𝙀𝙍 𝙈𝙀𝙉𝙐 
│⭔ !verify 
│⭔ !report
│⭔ !request
│⭔ !menfess
│⭔ !buatroom
│⭔ !secretchat
│⭔ !cekprem
│⭔ !daftarprem
│⭔ !changename
│⭔ !openai <pertanyaan>
│⭔ !ai <pertanyaan>
│⭔ !halodok <pertanyaan>
│⭔ !dok <pertanyaan>
│⭔ !bang <pertanyaan>
│⭔ !aiimage <pencarian>
│⭔ !gimage <pencarian>
╰───────⭓

╭──❍ ⟩>
│⭔ 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 
│⭔ !delete
│⭔ !revoke
│⭔ !tagall
│⭔ !hidetag
│⭔ !setdesc
│⭔ !linkgrup
│⭔ !infogroup
│⭔ !setppgrup
│⭔ !setnamegrup
│⭔ !group open
│⭔ !group close
│⭔ !antilink on
│⭔ !antilink off
│⭔ !welcome on
│⭔ !welcome off
│⭔ !tiktokauto on
│⭔ !tiktokauto off
│⭔ !kick @tag
│⭔ !demote @tag 
│⭔ !promote @tag
╰───────⭓

╭──❍ ⟩>
│⭔ 𝘼𝙐𝙏𝙊𝘿𝙀𝘾𝙏 𝙈𝙀𝙉𝙐 
│⭔ !sadcat
│⭔ !translate
│⭔ !stalknpm
│⭔ !stalkgithub
╰───────⭓

╭──❍ ⟩>
│⭔ 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐
│⭔ !tiktok
│⭔ !pinterest
│⭔ !playmp3
│⭔ !play <query>
│⭔ !playmp4
│⭔ !gitclone
│⭔ !mediafire
│⭔ !soundcloud 
╰───────⭓

╭──❍ ⟩>
│⭔ 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝙈𝙀𝙉𝙐 
│⭔ !tts <Indonesian>
│⭔ !tts2 <english>
│⭔ !ttp2
│⭔ !tourl
│⭔ !upload
│⭔ !toimg
│⭔ !toimage
│⭔ !tomp3
│⭔ !toaudio
│⭔ !tomp4
│⭔ !tovideo
│⭔ !emojimix
│⭔ !emojmix
│⭔ !emojinua
│⭔ !mixemoji
│⭔ !stiker
│⭔ !sticker
│⭔ !sgif
│⭔ !stikergif
│⭔ !stickergif
│⭔ !swm
│⭔ !stikerwm
│⭔ !stickerwm
│⭔ !smeme
│⭔ !memestiker
│⭔ !stikermeme
│⭔ !stickermeme
│⭔ !takesticker
│⭔ !emojinua2
│⭔ !mixemoji2
│⭔ !emojmix2 
│⭔ !emojimix2
╰───────⭓

╭──❍ ⟩>
│⭔ 𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐 
│⭔ !translate
│⭔ !ssweb-pc
│⭔ !ssweb-hp
│⭔ !bitly_short
│⭔ !cuttly_short
│⭔ !tinyurl_short
│⭔ !base32
│⭔ !base64
│⭔ !debase32 
│⭔ !debase64
╰───────⭓

╭──❍ ⟩>
│⭔ 𝘽𝙐𝙂𝙑𝙄𝙋 𝙈𝙀𝙉𝙐 
│⭔ !santet @tag
│⭔ !virtex 628xxx
│⭔ !kill 628xxx
│⭔ !kenon +628xxx
│⭔ !satir 628xxx
│⭔ !logout 628xxx
│⭔ !bug 628xxx
╰───────⭓

╭──❍ ⟩>
│⭔ 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝙈𝙀𝙉𝙐 
│⭔ !buatroom 628xxx
│⭔ !room <only owner>
│⭔ !stopchat <only room>
│⭔ !menfess 628xx|bot|hai
╰───────⭓

╭──❍ ⟩>
│⭔ 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉 𝙈𝙀𝙉𝙐 
│⭔ !latintoaksara 
│⭔ !aksaratolatin
╰───────⭓

╭──❍ ⟩>
│⭔𝙍𝘼𝙉𝘿𝙊𝙈 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 
│⭔ !dadu
│⭔ !anjing
│⭔ !patrick
│⭔ !bucinstick
│⭔ !gawrgura 
│⭔ !amongus
╰───────⭓

╭──❍ ⟩>
│⭔ 𝙊𝙏𝙃𝙀𝙍 𝙈𝙀𝙉𝙐 
│⭔ !ppcouple
╰───────⭓

╭──❍ ⟩>
│⭔ 𝘼𝙉𝙄𝙈𝙀 𝙈𝙀𝙉𝙐 
│⭔ !jadianime <reply/kirim gambar>
╰───────⭓

╭──❍ ⟩>
│⭔ 𝙎𝙊𝙐𝙉𝘿 𝙈𝙀𝙉𝙐 
│⭔ !sound1-119
│⭔ !audio1-40
│⭔ example: !sound3
╰───────⭓

╭──❍ ⟩>
│⭔ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙄𝙈𝘼𝙂𝙀
│⭔ !islamic
╰───────⭓

                            ${fot}`
}

exports.Mema = (premnya,isOwner,ucapanWaktu,fot) => {
return` 
*Premium* : ${premnya}
*Owner* : ${isOwner}

    *Salam* : ${ucapanWaktu}
    
╭──❍ ⟩>
│⭔ 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐 
│⭔ !error
│⭔ !clearerr
│⭔ !siaran
│⭔ !session
│⭔ !resetdb
│⭔ !setexif
│⭔ !setwm
│⭔ !setfooter
│⭔ !setppbot
│⭔ !addprem
│⭔ !delprem
│⭔ !bc
│⭔ !bctext
│⭔ !bcvideo
│⭔ !bcaudio
│⭔ !bcimage
│⭔ !broadcast
│⭔ !restart
╰───────⭓

                  ${fot}`

}

//menu nya
exports.menu = (premnya,isOwner,ucapanWaktu,fot) => {
return`*Premium* : ${premnya}
*Owner* : ${isOwner}

    *Salam* : ${ucapanWaktu}
─────── NS - BOT MD ────
👋 Hai kak! Ada yang bisa saya bantu?
────────────────────
𝕾  *Menu:*
      •(1) allmenu
      •(2) simplemenu
      •(3) changelog

silahkan pilih menu di atas dengan mengetik 1/2/3 example: !1

𝕾 • Terima kasih telah menggunakan Bot Kami! • 
────────────────────
𝕾 • Di Harapkan untuk berlangganan premium agar dapat menikmati fitur-fitur premier dan jangan lupa terus Suport tim kami! • 
────────────────────
✍️ Type *!help* to display menu this back

                        ${fot}.`
}
//changelog
exports.change = (premnya,isOwner,fot) => {
return`
*Premium* : ${premnya}
*Owner* : ${isOwner}

CHANGELOG:
•Baphomate - BOT sedang dalam pengembangan 
•Bot versi 0.1.0
•Developer Mas Budy
•Thanks To Allah SWT and Nabi Muhammad Saw
•Kepada Creator Bot dan RestApi

Thanks to user NS - BOT MD

                        ${fot}`
}
//simplemenu
exports.simpmenu = (premnya,isOwner,fot) => {
return`*Premium* : ${premnya}
*Owner* : ${isOwner}

««[ 𝑵𝑺 - 𝑩𝑶𝑻 𝑴𝑫 ]»»

──❍ ⟩>*STIKER*<⟨❍──
 sticker
"Menjadikan Image ke Stiker"
example : !sticker

toimg
"Menjadikan stiker ke Gambar"
example : !toimg < reply gambar >

──❍ ⟩>*Bug*<⟨❍──
 bug/kill/virtex/santet
"Membuat Wa trget Crash"
example : !bug

 kenon/logout/satir
"Membuat Target "
example : !sticker

──❍ ⟩>*DOWNLOAD*<⟨❍──

 play
" Mencari dan mendownload lagu/video "
example : !play dj kane

 gdrive
" Mendownload file google Drive "
example : !gdrive <link>

 tiktok
" Mendownload tiktok berdasarkan link "
example : !tiktok <Link>

──❍ ⟩>*CONVERT PICTURE/SOUND*<⟨❍──

 jadianime
" Merubah foto menjadi anime "
example : !jadianime <reply img>

 tts <Indonesian>
" Merubah teks menjadi voice "
example : !tts <teks>

 tts2 <English>
" Merubah teks menjadi voice "
example : !tts <teks>

──❍ ⟩>*AI ChatGpt*<⟨❍──

 openai
" ChatBot ChatGPT Menelusuri Query "
example : !openai penelitian nasa 

 halodok
" Konsultasi Dengan Dokter ChatGpt"
example : !halodok obat untuk sakit gigi apa

 bang
" Ngobrol Dengan ChatBot Biar gak gabut "
example : !bang boleh kenalan gak

──❍ ⟩>*OTHER FEATURE*<⟨❍──

 totalhit
" Untuk Mengetahui Jumlah Hit Fitur "
example : !totalhit

             ${fot}
{•----──❍ ⟩><⟨❍──----•}`
}

exports.rulesBot = () =>{
return`*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`──「 *MENU DONATE* 」──

Hi *${cekName}* ${ucapanWaktu} 👋🏻

*Payment Via DANA*
Number: 085691724140

*Payment Via GoPay*
Number: 085691724140

*Payment Via Pulsa Im3*
Number: 085691724140

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

──「 *THX FOR YOU* 」──`
}

exports.infoOwner = () =>{
return`╒──「 *INFO OWNER* 」───────╮
│      
│ *Data Profil*
│ • *Nama:* R4id3n      
│ • *Umur:* null      
│ • *Hoby:* Turu/Game    
│ • *Askot:* Andromeda
│ • *Konten:* Creator 
│
│_iam developer bot whatsapp._   
│                 
│ *Sosial Media*
│ • *Whatsapp:* 085691724140    
│ • *Youtube:* null
│ • *Github:* https://github.com/Azarela-Vnk
╰────────────────────╛
 `
}