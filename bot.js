const dbd = require("dbd.js")
var fs = require('fs');
const bot = new dbd.Bot({
token: process.env.token,
prefix: ".",
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
kayıtyetkilisi:"",
kayıtyapıldıkanal:"",
tag:"",
ayraç:"|",
kayıtkanal:"",
erkek:"",
kız:"",
otorol:"",
kayıtsayısı:"0"
  })
