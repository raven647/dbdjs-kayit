module.exports = {
  name: "k",
  aliases: ['kız'],
  code: `
  $suppressErrors[Kayıt edilemedi, kayıt rolleri ve kanalları tam olarak doğru ayarlanmamış olabilir]
  $channelSendMessage[$setServerVar[kayıtyapıldıkanal];<@$mentioned[1]>{title:Kayıt Yapıldı!}{description:<@$mentioned[1]> aramıza <@$getServerVar[kız]> rolü ile katıldı.
  
  Kaydı Gerçekleştiren yetkili: <@$authorID> 
  
  Aramıza Hoşgeldin $noMentionMessage[1]!}{color:303136}]
  $title[Kayıt Yapıldı!]
  $description[**Kayıt Bilgileri**
  
  **Kayıt Edilen Kullanıcı : <@$mentioned[1]>**
  **Verilen Rol : <@$getServerVar[kız]>**
  **Yeni İsim : $getServerVar[tag] $noMentionMessage[1] $getServerVar[ayraç] $noMentionMessage[2]**
  **Kayıt eden Yetkli : <@$authorID>**
  **Yetkilinin Kayıt Sayısı : $sum[$getUserVar[kayıtsayısı];1]**
  ]
  $footer[$username[$mentioned[1]];$userAvatar[$mentioned[1]]]
  $color[303136]
  $thumbnail[$userAvatar[$mentioned[1]]]
  $setServerVar[kayıtlıüye;$sum[$getServerVar[kayıtlıüye];1]]
  $setServerVar[kayıtlıkız;$sum[$getServerVar[kayıtlıkız];1]]
  $setUserVar[kayıtsayısı;$sum[$getUserVar[kayıtsayısı];1];$authorID]
  $changeNickName[$mentioned[1];$getServerVar[tag] $noMentionMessage[1] $getServerVar[ayraç] $noMentionMessage[2]]
  $giveRoles[$mentioned[1];$getServerVar[kız]]
  $takeRole[$mentioned[1];$getServerVar[otorol]]
  $onlyForChannels[$getServerVar[kayıtkanal];Burası Kayıt Etme Kanalı Değil]
  $onlyIf[$hasRole[$authorID;$getServerVar[kayıtyetkilisi]]!=false;Bu komutu kullanmak için **$roleName[$getServerVar[kayıtyetkilisi]]** rolüne sahip olman gerekiyor]
    $onlyIf[$getServerVar[kayıtsistemi]==açık;Bu komutu kullanmak için kayıt sistemini açmanız gerekiyor. Açmak için **$getServerVar[prefix]kayıtsistemi aç** yazmalısınız.]
  `
};

//Bu komutu tamamen Falsis Kremlin Yazmıştır. Çalınması Kesinlikle Yasaktır.