module.exports = ({
  name:"ayraç",
  aliases:['ayraç-ayarla','ayraçayarla'],
  code:`$setServerVar[tag;$message[1]]
  $argsCheck[>1;Lütfen bir ayraç belirleyin. Örneğin: *$getServerVar[prefix]ayraç -**. Eğer belirlemezsen ayraç otomatik olarak **|** olarak kaydedilecek.]
  $title[Ayraç Kaydedildi]
  $description[Tag Başarıyla **$message[1]** olarak kaydedildi.
  
  Tagi Değiştirmek için aynı komutu yeni tag için uygulayın.
  Kaydeden Yetkili : $username[$authorID]
  Tag : $message[1]]
  $footer[$username;$authorAvatar]
  $addTimeStamp
  $color[303136]
  $onlyPerms[admin;Tagi Kaydetmek İçin **Yönetici** Yetkisine Sahip Olmanız Gerekmektedir.]
  $onlyIf[$getServerVar[kayıtsistemi]==açık;Bu komutu kullanmak için kayıt sistemini açmanız gerekiyor. Açmak için **$getServerVar[prefix]kayıtsistemi aç** yazmalısınız.]
  $deletecommand
  $deleteIn[10s]`
})

//Bu komutu tamamen Falsis Kremlin Yazmıştır. Çalınması Kesinlikle Yasaktır.