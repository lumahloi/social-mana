import Header from '../../Header'
import './styles.css'

import { Link } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'

const Cadastro = () => {
  return (
    <div>
        <Header />

        <section className='unique-section'>
            <h2 className='same-h2'>Cadastro</h2>

            <form>
                <label htmlFor="username">Nome de usuário</label>
                <input type="text" name="username" id="username" placeholder="Esse será o nome exibido"/>

                <label htmlFor="useremail">E-mail</label>
                <input type="email" name="useremail" id="useremail" placeholder="Insira seu melhor email"/>

                <label htmlFor="userpass">Senha</label>
                <input type="password" name="userpass" id="userpass"/>

                <Link to="/timeline">
                  <button>Continuar</button>
                </Link>

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