import Header from '../../Header'
import './styles.css'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../services/api'

import { FiArrowLeft, FiEye, FiEyeOff } from 'react-icons/fi'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userid = localStorage.getItem('userid')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if(userid){
      navigate('/timeline')
    }
  })

  const handlePass = () => {
    setShowPassword(!showPassword)
  }

  async function handleLogin(e){
    e.preventDefault()

    try {
      const response = await api.post('sessions', { email, password })
      localStorage.setItem('userid', response.data.id)
      localStorage.setItem('username', response.data.name)
      localStorage.setItem('userpic', response.data.picture)
      navigate('/timeline')

    } catch (err){
      alert('Falha no login: ' + err)
    }
  }

  return (
    <div>
        <Header />

        <section className='unique-section'>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <label htmlFor="useremail">E-mail</label>
                <input type="email" name="useremail" id="useremail" value={email} onChange={e => setEmail(e.target.value)} maxLength={30} required/>

                <label htmlFor="userpass">Senha</label>
                <div className="input-group" style={{position: 'relative'}}>
                  <input type={showPassword ? 'text' : 'password'} name="userpass" id="userpass" value={password} onChange={e => setPassword(e.target.value)} minLength={8} maxLength={20} required placeholder='Insira sua senha'/>
                  <button type="button" onClick={handlePass}>
                    {showPassword ? <FiEyeOff size={25} color="#505F93" /> : <FiEye size={25} color="#505F93" />}
                  </button>
                </div>
                <p>Esqueci minha senha</p>
                
                <button>Continuar</button>

                <Link to="/cadastro">
                  <div className='section-link'>
                      <FiArrowLeft size={25} color="#505F93"/>
                      <span>Quero me cadastrar</span>
                  </div>
                </Link>
            </form>
        </section>
    </div>
  )
}

export default Login