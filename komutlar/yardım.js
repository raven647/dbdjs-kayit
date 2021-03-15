module.exports = ({
  name:"yardım",
  aliases:['help'],
  code:`$title[Kayıt Yardım Menüsü]
  $description[Komutlarım;
  
  **$getServerVar[prefix]kayıtsistemi aç **
  - Bu sistemi açmadan Hiçbir komut kullanamazsınız.
  
  **$getServerVar[prefix]kayıtsistemi kapat**
  - Bu sistem kapanınca kayıt edemez ve komutlarıma erişemezsiniz
  
  **$getServerVar[prefix]kayıtkanal #kanal**
  - Birisi Girince Mesaj Atılacak olan ve Kullanıcının Kayıt edileceği kanal
  
  **$getServerVar[prefix]kayıtyetkilisi @rol**
  - Birisini Kayıt etme yetkisine sahip olan rolü kaydeder
  
  **$getServerVar[prefix]kayıtyapıldı-kanal #kanal**
  - Birisi Kayıt olunca Mesaj Atılacak olan kanal. Genelde Chat (sohbet) kanalı olarak ayarlanır.
  
  **$getServerVar[prefix]tag \`taginiz\`**
  - Birisi Kayıt olunca isminin başına girilecek etiket (zorunlu değil)
  
    **$getServerVar[prefix]ayraç \`ayracınız\`**
  - Birisi Kayıt olunca ismi ve yaşının ortasına girilecek etiket (zorunlu değil ama ayarlanmadığı takdirde **|** olur.) Örneğin : Kerem | 14
  
    **$getServerVar[prefix]otorol-aç @rol**
  - Birisi Sunucuya girince verilecek rol. (zorunlu)
  
    **$getServerVar[prefix]erkekrol @rol**
  - Birisi Kayıt olunca verilecek **erkek** rolü
  
      **$getServerVar[prefix]kızrol @rol**
  - Birisi Kayıt olunca verilecek **kız** rolü
  
      **$getServerVar[prefix]e @kişi \`isim\` \`yaş\`**
  - Birisini kayıt etmek için kullanılır (erkek)
  
        **$getServerVar[prefix]k @kişi \`isim\` \`yaş\`**
  - Birisini kayıt etmek için kullanılır (kız)
  
  **$getServerVar[prefix]kayıtsay @kişi/veya etiketlemenize gerek yok**
  - Kişinin kaydettiği kullanıcı sayısını gösterir]
  $color[303136]`
})