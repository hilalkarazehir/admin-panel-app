import { useState } from "react"
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import "./App.css";

function LoginEkrani() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  console.log("Username:",username)
  console.log("Password:",password)

  const handleLogin = () => {
    if (username === '') {
      alert("kullanıcı adı boş bırakılamaz")
    } else if (password === '') {
      alert("şifre boş bırakılamaz")
    } else {
      localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");;
    }
  }

  return (
    <div>
      <h1>Admin Paneli</h1>

      <input 
        type="text" 
        placeholder="Kullanıcı Adı" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <br />

      <input 
        type="password" 
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <br />

      <button onClick={handleLogin}>
        Giriş Yap
      </button>
    </div>
  )
}
function Dashboard() {
   const navigate = useNavigate()
   const handleLogout = () => {
   localStorage.removeItem("isLoggedIn");
   navigate("/");
} 
  return(

    <div>
      <h1>Admin Dashboard</h1>
      <p>Giriş başarılı! Hoş geldiniz </p>

<button onClick={handleLogout}>
  Çıkış Yap
</button>
<hr />
<div >
        <button className="btn-style" onClick={() => alert("Loglar listelenecek (Backend API bekleniyor)")}>📜 Loglar</button>
        <button className="btn-style" onClick={() => alert("Roller listelenecek (Backend API bekleniyor)")}>📜 Roller</button>
        <button className="btn-style" onClick={() => alert("Kullanıcılar listelenecek (Backend API bekleniyor)")}>📜 Kullanıcılar</button>
   </ div>
    </div>
  )
}

fetch('https://ornekuygulama.com')
  .then(response => response.json())
  .then(veri => {
    console.log(veri); // Gelen veriyi konsola yazdır
    // Veriyi arayüzde gösterme işlemleri burada yapılır
  })
  .catch(hata => console.error('Bağlantı hatası:', hata));

function App(){
return (
  <BrowserRouter>
       <Routes>
  <Route path="/" element={<LoginEkrani />} />
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>
       </BrowserRouter>
)
}

export default App