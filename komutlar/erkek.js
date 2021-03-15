module.exports = ({
  name:"e",
  aliases:['erkek','er','erk'],
  code:`$setServerVar[kayıtlıüye;$sum[$getServerVar[kayıtlıüye];1]]
  $setServerVar[kayıtlıerkek;$sum[$getServerVar[kayıtlıerkek];1]]
  $setUserVar[kayıtsayısı;$sum[$getUserVar[kayıtsayısı];1];$authorID]
  $title[Kayıt Yapıldı!]
  $description[**Kayıt Bilgileri**
  
  **Kayıt Edilen Kullanıcı : <@$mentioned[1]**
  **Verilen Rol : <@$getServerVar[erkek]**
  **Yeni İsim : $getServerVar[tag] $message[1] $getServerVar[ayraç] $message[2]**
  **Kayıt eden Yetkli : <@$authorID>**
  **Yetkilinin Kayıt Sayısı : $sum[$getUserVar[kayıtsays]]
  ]
  `
})