const dbd = require("dbd.js");
var fs = require("fs");
const bot = new dbd.Bot({
  token: process.env.token,
  prefix: "$getServerVar[prefix]",
  mobile: true,
  fetchInvites: true
});

bot.onMessage();
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"));
for (const file of reader) {
  const command = require(`./komutlar/${file}`);
  bot.command({
    name: command.name,
    aliases: command.aliases,
    bkz: command.bkz,
    code: command.code
  });
}

//BOT KOMUTLARI

bot.joinCommand({
channel:"$getServerVar[kayıtkanal]",
code:`
$title[Sunucuya Biri Katıldı]
$description[Sunucuya Hoşgeldin $username!
$if[$sub[$datestamp;$creationdate[$mentioned[1;yes];ms]]<$multi[$multi[$multi[$multi[30;24];60];60];1000]]
Kullanıcı Riskli
Hesap $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$mentioned[1;yes];time];years;yıl;-1];month;ay;-1];weeks;hafta;-1];days;gün;-1];hours;saat;-1];minutes;dakika;-1];seconds;saniye;-1] Önce Kurulmuş
$else
Kullanıcı Güvenli
Hesap $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$mentioned[1;yes];time];years;yıl;-1];month;ay;-1];weeks;hafta;-1];days;gün;-1];hours;saat;-1];minutes;dakika;-1];seconds;saniye;-1] Önce Kurulmuş
$endif
\`\`\`     \`\`\`
Lütfen İsim ve yaşını yazarak Yetkililerin Seni Kaydetmesini Bekle]
$thumbnail[$authorAvatar]
$color[303136]
$giveRoles[$authorID;$getServerVar[otorol]]
$suppressErrors[Sunucuya $username katıldı ancak otorol ayarlanmamış, Lütfen otorolü ayarlayın.]
$onlyIf[$getServerVar[kayıtsistemi]==açık;]
  `
})
bot.onJoined()

bot.command({
name: "eval",
code: `$eval[$message]
$onlyForIDs[539843855567028227; Geliştiricim Değilsin]`
})

bot.command({
  name: "prefix",
  code: `
$setServerVar[prefix;$message[1]]
$argsCheck[<1;Lütfen bir önek söyleyin. Örneğin **$getServerVar[prefix]prefix !!**]
Prefix Başarıyla Ayarlandı. Yeni Prefix $message[1] 
$onlyPerms[admin;Bu Komutu Kullanabilmek İçin **Yönetici** Yetkisine sahip olman gerekiyor]
$suppressErrors[Hata, Prefixi Kaydedemedim.]
$argsCheck[>1;Lütfen prefix yaz]`
});

//BOT DURUMU
bot.status({
  text: ".yardım | Kayıt Botu Altyapısı",
  type: "COMPETING",
  status: "online",
  time: 12
});

bot.status({
  text: ".e | .k | Falsis Kremlin",
  type: "COMPETING",
  status: "online",
  time: 12
});

//BOT DEĞİŞKENLERİ

bot.variables({
  kayıtsistemi: "kapalı",
  prefix: ".",
  kayıtyetkilisi: "",
  kayıtyapıldıkanal: "",
  tag: "",
  ayraç: "|",
  kayıtkanal: "",
  erkek: "",
  kız: "",
  kayıtlıüye: "0",
  kayıtlıerkek: "0",
  kayıtlıkız: "0",
  otorol: "",
  kayıtsayısı: "0"
});
