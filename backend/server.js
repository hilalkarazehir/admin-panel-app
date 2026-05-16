const express = require('express');
const cors = require('cors'); // Frontend ile backend arasındaki port farkını çözer
const { Client } = require('pg'); // Veritabanına bağlanma aracını ekledik

const app = express();
const PORT = 5000; // React ile çakışmaması için portu 5000 yaptık

// Middleware (Veri işleme ve güvenlik)
app.use(cors());
app.use(express.json()); // JSON formatındaki istekleri okumayı sağlar

// 1. VERİTABANI BAĞLANTI AYARI
const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'smartspirit_db',
  password: 'hilal1234', 
  port: 5432,
});
db.connect()
  .then(() => console.log("PostgreSQL veritabanına başarıyla bağlandık!"))
  .catch(err => console.error("Veritabanı bağlantı hatası:", err));


// 2. API UÇ NOKTASI (Frontend'in giriş yapmak için bağlanacağı yer)
app.post('/api/login', async (req, res) => {
    // Frontend formundan gelen kullanıcı adı ve şifreyi alıyoruz
    const { username, password } = req.body;

    try {
        // Veritabanına soruyoruz: "Users tablosunda bu isim ve şifrede biri var mı?"
        // Yanına da roller tablosundan o kişinin rolünün adını (Admin mi, NormalUser mı) çekiyoruz
        const sonuc = await db.query(
          'SELECT u.*, r.name as role_name FROM "Users" u JOIN "Roles" r ON u.role_id = r.id WHERE u.username = $1 AND u.password = $2',
          [username, password]
        );

        if (sonuc.rows.length > 0) {
            // Kullanıcı veritabanında bulunduysa (Giriş Başarılı)
            const user = sonuc.rows[0];
            res.json({ 
                success: true, 
                message: "Giriş başarılı!", 
                user: { username: user.username, role: user.role_name } 
            });
        } else {
            // Kullanıcı adı veya şifre yanlışsa (Giriş Başarısız)
            res.json({ success: false, message: "Kullanıcı adı veya şifre hatalı!" });
        }
    } catch (hata) {
        console.error(hata);
        res.status(500).json({ success: false, message: "Sunucu hatası oluştu." });
    }
});

// Sunucuyu Başlatma
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});