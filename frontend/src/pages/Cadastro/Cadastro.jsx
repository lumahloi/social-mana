import Header from '../../Header'
import './styles.css'
import api from '../../services/api'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'

const Cadastro = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleRegister(e){
    e.preventDefault()

    const data = {
      name,
      email,
      password
    }

    try {
      const response = await api.post('users', data)
      alert('Cadastro realizado')
      navigate('/login')
    } catch (err) {
      alert('Erro no cadastro')
    }
  }

  return (
    <div>
        <Header />

        <section className='unique-section'>
            <h2 className='same-h2'>Cadastro</h2>

            <form onSubmit={handleRegister}>
                <label htmlFor="username">Nome de usuário</label>
                <input type="text" name="username" id="username" placeholder="Esse será o nome exibido" value={name} onChange={e => setName(e.target.value)}/>

                <label htmlFor="useremail">E-mail</label>
                <input type="email" name="useremail" id="useremail" placeholder="Insira seu melhor email" value={email} onChange={e => setEmail(e.target.value)}/>

                <label htmlFor="userpass">Senha</label>
                <input type="password" name="userpass" id="userpass" value={password} onChange={e => setPassword(e.target.value)}/>

                
                <button>Continuar</button>

                <div className='section-link'>
                  <Link to="/login">
                    <FiArrowLeft size={25} color="#505F93"/>
                    <span>Já tenho uma conta</span>
                  </Link>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Cadastro