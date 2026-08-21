import styles from "./Register.module.css"

import {useState,useEffect} from "react"

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const[email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [erro,setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password
    }
  }
  
  return (
    <div>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e crie suas histórias</p>
        <form onSubmit={handleSubmit}>
          <label>
           <span>Nome:</span>
            <input 
            type="text" 
            name="displayName" 
            required 
            placeholder="Nome do usuário" 
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
           />
           </label>        
            <label>
              <span>E-mail:</span>
              <input 
              type="email" 
              name="email" 
              required 
              placeholder="E-mail do usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            </label>
            <label>
              <span>Senha:</span>
              <input 
              type="password" 
              name="password" 
              required 
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
            </label>
            <label>
              <span>Confirmação de senha:</span>
              <input 
              type="password" 
              name="confrimPassword" 
              required 
              placeholder="Confirme a sua senha" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>       
            <button className="btn">Cadastrar</button>
        </form>
    </div>
  )
}

export default Register