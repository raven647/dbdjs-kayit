module.exports = ({
  name:"kayıtyetkili",
  aliases:['kayıt-yetkili'],
  code:`$setServerVar[kayıtyetkilisi;$mentionedRoles[1]]
  $argsCheck[>1;Lütfen bir rol etiketleyin. Örneğin: *$getServerVar[prefix]kayıtyetkili @kayıt yetkilisi*]
  $title[Rol Kaydedildi]
  $description[Kayıt Yetkilisi Rolü Başarıyla **$roleName[$mentionedRoles[1]]** olarak kaydedildi.
  
  Rolü Değiştirmek için aynı komutu yeni rol için uygulayın.
  Kaydeden Yetkili : $username[$authorID]
  Kaydedilen Rol ID'si : $mentionedRoles[1]]
  $footer[$username;$authorAvatar]
  $addTimeStamp
  $color[303136]
  $onlyPerms[admin;Bu Rolü Kaydetmek İçin **Yönetici** Yetkisine Sahip Olmanız Gerekmektedir.]
  $deletecommand
  $deleteIn[10s]`
})

//Bu komutu tamamen Falsis Kremlin Yazmıştır. Çalınması Kesinlikle Yasaktır.