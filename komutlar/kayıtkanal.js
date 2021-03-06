module.exports = {
  name: "kayıtkanal",
  aliases: ["kayıt-kanal"],
  code: `$setServerVar[kayıtkanal;$mentionedChannels[1]]
  $argsCheck[>1;Lütfen bir kanal etiketleyin. Örneğin: *$getServerVar[prefix]kayıtkanal #kayıt-kanalı*]
  $title[Kanal Kaydedildi]
  $description[Kayıt Kanalı Başarıyla <#$mentionedChannels[1]> olarak kaydedildi.
  
  Kanalı Değiştirmek için aynı komutu yeni kanal için uygulayın.
  Kaydeden Yetkili : $username[$authorID]
  Kaydedilen Kanalın ID'si : $mentionedChannels[1]]
  $footer[$username;$authorAvatar]
  $addTimeStamp
  $color[303136]
  $onlyPerms[admin;Bu Kanalı Kaydetmek İçin **Yönetici** Yetkisine Sahip Olmanız Gerekmektedir.]
  $onlyIf[$getServerVar[kayıtsistemi]==açık;Bu komutu kullanmak için kayıt sistemini açmanız gerekiyor. Açmak için **$getServerVar[prefix]kayıtsistemi aç** yazmalısınız.]
  $deletecommand
  $deleteIn[10s]`
};

//Bu komutu tamamen Falsis Kremlin Yazmıştır. Çalınması Kesinlikle Yasaktır.
