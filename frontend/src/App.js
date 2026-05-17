import { useState } from "react"
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import "./App.css";

function LoginEkrani() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  console.log("Username:",username)
  console.log("Password:",password)

 const handleLogin = async () => {

  if (username === '') {
    alert("kullanıcı adı boş bırakılamaz")
    return
  }

  if (password === '') {
    alert("şifre boş bırakılamaz")
    return
  }

  console.log("fetch öncesi")

  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  })

  console.log("fetch sonrası")

  const data = await response.json()
  console.log(data)

  if (data.success) {
    localStorage.setItem("isLoggedIn", "true")
    navigate("/dashboard")
  } else {
    alert(data.message)
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

<button type="button" onClick={handleLogout}>
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