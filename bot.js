const dbd = require("dbd.js")
var fs = require('fs');
const bot = new dbd.Bot({
token: process.env.token,
prefix: "$getServerVar[prefix]",
mobile: true,
fetchInvites: true
})

bot.onMessage()
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./komutlar/${file}`)
  bot.command({
    name: command.name,
    aliases: command.aliases,
    bkz: command.bkz,
    code: command.code
  });
} 

//BOT KOMUTLARI
bot.command ({
name: "prefix",
code:`
$setServerVar[prefix;$message[1]]
$argsCheck[<1;Lütfen bir önek söyleyin. Örneğin **$getServerVar[prefix]prefix !!**]
Prefix Başarıyla Ayarlandı. Yeni Prefix $message[1] 
$onlyPerms[admin;Bu Komutu Kullanabilmek İçin **Yönetici** Yetkisine sahip olman gerekiyor]
$suppressErrors[Hata, Prefixi Kaydedemedim.]`
})

//BOT DURUMU
bot.status({
  text: ".yardım | Kayıt Botu Altyapısı",
  type: "COMPETING",
  status: "online",
  time: 12
})

bot.status({
  text: ".e | .k | Falsis Kremlin",
  type: "COMPETING",
  status: "online",
  time: 12
})

//BOT DEĞİŞKENLERİ

bot.variables({
kayıtsistemi:"kapalı",
prefix:".",
kayıtyetkilisi:"",
kayıtyapıldıkanal:"",
tag:"",
ayraç:"|",
kayıtkanal:"",
erkek:"",
kız:"",
kayıtlıüye:"0",
kayıtlıerkek:"0",
kayıtlıkız:"0",
otorol:"",
kayıtsayısı:"0"
  })