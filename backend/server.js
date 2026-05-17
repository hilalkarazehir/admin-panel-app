
const express = require("express")
const cors = require("cors")
const pool = require("./db")

const app = express()
console.log("🔥 BACKEND DOSYASI AKTİF")

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log("➡️ REQUEST GELDİ:", req.method, req.url)
    next()
})

app.get("/", (req, res) => {
    res.send("Backend çalışıyor")
})

app.post("/login", async (req, res) => {

    console.log("LOGIN GELDİ")
    console.log(req.body)

    const { username, password } = req.body

    try {
        const result = await pool.query(
            "SELECT * FROM users WHERE username = $1 AND password = $2",
            [username, password]
        )

        if (result.rows.length > 0) {
            console.log("✔ DOĞRU GİRİŞ")
            res.json({
                success: true,
                message: "Giriş başarılı"
            })
        } else {
            console.log("❌ HATALI GİRİŞ")
            res.json({
                success: false,
                message: "Hatalı giriş"
            })
        }

    } catch (err) {
        console.error("DB HATA:", err)
        res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
})

app.listen(5000, () => {
    console.log("Server çalıştı")
})