import { useState } from "react"

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  console.log("Username:",username)
  console.log("Password:",password)
  
  const handleLogin = () => {
    if (username === '') {
      alert("kullanıcı adı boş bırakılamaz")
    } else if (password === '') {
      alert("şifre boş bırakılamaz")
    } else {
      alert("giriş başarılı")
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

export default App