import Header from '../../Header'
import './styles.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../services/api'

import { FiArrowLeft } from 'react-icons/fi'

const Cadastro = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleLogin(e){
    e.preventDefault()

    try {
      const response = await api.post('sessions', { email, password })
      alert('Login com sucesso')
      localStorage.setItem('userid', response.data.id)
      localStorage.setItem('username', response.data.name)
      localStorage.setItem('userpic', response.data.picture)
      navigate('/timeline')

    } catch (err){
      alert('Falha no login')
    }
  }

  return (
    <div>
        <Header />

        <section className='unique-section'>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <label htmlFor="useremail">E-mail</label>
                <input type="email" name="useremail" id="useremail" value={email} onChange={e => setEmail(e.target.value)}/>

                <label htmlFor="userpass">Senha</label>
                <input type="password" name="userpass" id="userpass" value={password} onChange={e => setPassword(e.target.value)}/>
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

export default Cadastro