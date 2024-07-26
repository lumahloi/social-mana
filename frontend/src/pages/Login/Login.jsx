import Header from '../../Header'
import './styles.css'

import { Link } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'

const Cadastro = () => {
  return (
    <div>
        <Header />

        <section className='unique-section'>
            <h2>Login</h2>

            <form>
                <label htmlFor="useremail">E-mail</label>
                <input type="email" name="useremail" id="useremail"/>

                <label htmlFor="userpass">Senha</label>
                <input type="password" name="userpass" id="userpass"/>
                <p>Esqueci minha senha</p>

                <Link to="/timeline">
                  <button>Continuar</button>
                </Link>

                <div className='section-link'>
                    <Link to="/cadastro">
                      <FiArrowLeft size={25} color="#505F93"/>
                      <span>Quero me cadastrar</span>
                    </Link>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Cadastro