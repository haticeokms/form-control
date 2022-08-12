function formControl(){
    if(document.getElementById("isim").value==""){
        alert("İsim Alanı Boş Bırakılamaz!");
        document.uyelikformu.isim.focus();
        return;
        
    }
    if(document.getElementById("isim").value!=""){
        if(document.getElementById("isim").value.length<4 || document.getElementById("isim").value.length>20){
            alert("İsim En Az 4 Karakter ,En Fazla 20 Karakter İçermelidir!");
            document.uyelikformu.isim.value = "";
            document.uyelikformu.isim.focus();
            return;    
        } 
        else if(isim.value.search(/[0-9]/)> 0 ){
            alert("İsim Alanında Sayı Kullanmayınız!");
            document.uyelikformu.isim.focus();
           return;
          }  
    }
    // SOYİSİM KUTUSU
    if(document.getElementById("sisim").value==""){
        alert("Soyisim Alanı Boş Bırakılamaz!");
        document.uyelikformu.sisim.focus();
        return;
    }
    if(document.getElementById("sisim").value!=""){
        if(document.getElementById("sisim").value.length<4 || document.getElementById("sisim").value.length>20){
            alert("Soyisim En Az 4 Karakter ,En Fazla 20 Karakter İçermelidir!");
            document.uyelikformu.sisim.value = "";
            document.uyelikformu.sisim.focus();
            return;    
        } 
        else if(sisim.value.search(/[0-9]/)> 0 ){
            alert("Soyisim Alanında Sayı Kullanmayınız!");
            document.uyelikformu.sisim.focus();
           return;
          }  
    }
    // E-MAİL KUTUSU
    if(document.getElementById("email").value==""){
        alert("E-mail Alanı Boş Bırakılamaz!");
        document.uyelikformu.email.focus();
        return;
    }

    if(document.getElementById("email").value!=""){
        if(document.getElementById("email").value.indexOf("@",0)== -1 || document.getElementById("email").value.indexOf(".",0) == -1){
            alert("E-mail Adresi Uygun Değildir '@' ve '.' Kullanınız!");
            document.uyelikformu.email.value = "";
            document.uyelikformu.email.focus();
            return;
        }  
    }
     // CİNSİYET ALANI
      if(document.getElementsByName("cinsiyet")[0].checked==false && document.getElementsByName("cinsiyet")[1].checked==false){
          alert(" Lütfen Cinsiyet Alanı Seçiniz!");
          return;
       }


    // TELEFON NUMARASI KUTUSU

    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;

    if(document.getElementById("telefon").value==""){
        alert("Telefon Numarası Alanı Boş Bırakılamaz!");
        document.uyelikformu.telefon.focus();
        return;
    }
       if(document.getElementById("telefon").value != ""){
         if(document.getElementById("telefon").value.length<10){
            alert("Telefon Numaranızı 'xxx xxx-xxxx' Şeklinde ve 0 Kullanmadan Giriniz!");
            document.uyelikformu.telefon .value = "";
            document.uyelikformu.telefon.focus();
            return;

         }else if(document.getElementById("telefon").value.search(/[a-z]/) > -1){
            alert("Telefon Numarası Kısmında Harf Kullanmayınız!");
            document.uyelikformu.telefon .value = "";
            document.uyelikformu.telefon.focus();
            return;
         }else if(!telefon.value.match(regex)){
            alert("Telefon Numaranızı 'xxx xxx-xxxx' Şeklinde ve 0 Kullanmadan Giriniz!");  
            document.uyelikformu.telefon .value = "";
            document.uyelikformu.telefon.focus();
            return;
            }
       }


    // ŞİFRE KUTUSU
    if(document.getElementById("sifre").value==""){
        alert("Şifre Alanı Boş Bırakılamaz!");
        document.uyelikformu.sifre.focus();
        return;
    }

    if(document.getElementById("sifre").value!=""){
        if(document.getElementById("sifre").value.length<6 || sifre.value.search(/[A-Z]/)< 0 || sifre.value.search(/[0-9]/)<0){
            alert("Şifre En Az 6 Karakter Olmalıdır, Büyük Harf ve Sayı Karakterleri İçermelidir!");
            document.uyelikformu.sifre.value = "";
            document.uyelikformu.sifre.focus();
            return;    
        }
    }

    // TARİH KUTUSU
    if(document.getElementById("tarih").value==""){
        alert("Lütfen Tarih Seçiniz!");
        document.uyelikformu.tarif.focus();
        return;
    }


    document.uyelikformu.submit();
}