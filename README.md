Bu proje, React + Node.js + PostgreSQL kullanılarak geliştirilen basit bir admin paneli case çalışmasıdır.

Projede temel olarak:
- Login sistemi
- Frontend - Backend bağlantısı
- PostgreSQL veritabanı entegrasyonu
- Role tabanlı yapı mantığı 
- Basit dashboard yapısı

oluşturulmaya çalışılmıştır.

---

# Kullanılan Teknolojiler

## Frontend
- React
- React Router DOM
- JavaScript
- CSS

## Backend
- Node.js
- Express.js

## Database
- PostgreSQL
- pgAdmin
  
---

# Kurulum

## Frontend
-cd frontend
-npm install
-npm start

## Backend
-cd backend
-npm install
-node server.js

---

## 1.Gün
Proje dökümanı elime ulaştıktan sonra istenenleri ve kullanmam gereken teknolojileri inceleyip nasıl ilerlemem gerektiğiyle ilgili bir yol haritası oluşturdum.
Bu süreçte:
-JWT mantığı
-Token yapısı
-Loglama sisteminin kullanımı
-Frontend-backend mimarisi
gibi çok bilmediğim detaylar üzerine araştırmalar yaptım.
Son olarak projeyi Github'da oluşturup kendi bilgisayarıma çektim.

## 2.Gün
Frontend tarafında temel giriş ekranını oluşturmaya çalıştım.
-Username ve password alanlarını yönetmek için useState kullandım.
-Onchange fonksiyonu ile verilerin anlık olarak güncellenmesini sağladım.
-handleLogin fonksiyonu oluşturarak form boş bırakıldığında alert ile kullanıcıya uyarı mesajı verilmesini sağladım.
-İnput girişlerinin çalışıp çalışmadığını console.log ekleyerek tarayıcı üzerinden kontrol ettim.Çalıştığını anladığımda bunları yorum satırı olarak değiştirdim.
-Birden fazla sayfayı yönetmek için BrowserRouter, Routes, Route yapılarını kurdum.
-useNavigate ile dashboard sayfaları arasında geçiş yapabilmeyi sağladım.
-Dashboard sayfasına logOut ile çıkış butonu ekledim.Butona bastığında veriyi temizleyip giriş ekranına yönlendirilmesini sağladım.

## 3. Gün
Backend ve veritabanı kısmına odaklandım.
-Postgresql kurulumunu yaptım.Bu aşamada çok fazla hata aldım ve çözmem yaklaşık 3 saatimi aldı.
-Postgresql temel tablo oluşturma kısmını(sql komutları ve manuel olarak) kısa videolardan öğrendim ve gerekli Roles,Users,Errors tablolarını oluşturdum.
-Terminalden temel backend server yapısını kurdum.
-Backend ve frontend entegrasyonu için örnek proje kodlarını inceleyerek bağlantının nasıl kurulduğunu anlamaya çalıştım.

---
## 4.Gün
- Veritabanını projeye bağladım ve login API oluşturdum.
- Giriş yapmadan dashboard ekranına erişimin engellenmesini sağladım.
- Giriş ekranını backende bağladım.Doğru bilgide giriş yaparken yanlış bilgide hata mesajı vermesini sağladım.
- Son değişiklikleri Github'da güncelledim.

## Karşılaştığım Zorluklar
- React Router kullanırken sürüm uyuşmazlığından kaynaklı hatalarla karşılaştım. Kod tarafı doğru olmasına rağmen ekranda sürekli “Invalid hook call” ve “useRef null” gibi hatalar alıyordum ve BrowserRouter çalışmıyordu. React Router sürümlerini v7den v6ya geçirmenin çözüm olabilceğini gördüm ama paketler daha çok karıştı.Burda yapay zekadan da yardım alarak paketleri tamamen silip uyumlu versiyonları yeniden yükledim.
- PostgreSQL kurulumunda bağlantı ve servis başlatma sorunları yaşadım. Kurulum tamamlanmış gözüküyor ama arka planda çalışmıyordu. Bu aşamada büyük oranda yapay zekadan yararlandım.Tüm kalıntıları bulup silerek birkaç kez yenidenkurulum yapmama rağmen sorun devam etti. En son CMD üzerinden bazı komutlar girerek postgreSql servislerini manuel olarak çalıştırdım.Bir süre geçtikten sonra otomatik olarak yine durduğu için hatalar devam etti.Her seferinde yeniden manuel olarak başlatarak çözdüm.
- Backend ve frontend entegrasyonu tarafında request-response yapısı ve API mantığını teorik olarak biliyordum ancak kullanmamıştım. Bu nedenle backend kodlarını yazarken yapay zekadan destek aldım, ama aynı zamanda her adımın mantığını anlamaya çalıştım.

## Yapamadıklarım
-Veritabanında istenen tabloları oluşturdum.Ama backend tarafında frontendle bağlantısını kurmaya sürem yetmedi.Bu yüzden arayüzdeki butonlara tıkldığımda şimdilik uyarı verecek şekilde statik bıraktım.
-  Şu an sistem seed data ile manuel kullanıcılar üzerinden gerçek veri tabanıyla çalışmaktadır. Authentication sistemi (JWT, register, token refresh ve password change) henüz ekleyemedim.
- bcrypt ve JWT (JSON Web Token) gibi yapıların ne olduğunu, nasıl çalıştığını teorik olarak araştırdım. Ancak projenin backend tarafında şifre doğrulamalarını ve kontrollerini şimdilik düz metin olarak bıraktım.
- Hataları bulmak için yapay zekadan yararlanarak bir try catch sistemi kurdum ama bunları oluşturduğum tabloya otomatik olarak ekleyen bir sistem kuramadım.Hatalar şimdilik sadece terminalde izlenebiliyor.
- 

