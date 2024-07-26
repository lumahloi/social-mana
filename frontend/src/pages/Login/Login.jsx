import Header from '../../Header'
import './styles.css'

import { FiArrowLeft } from 'react-icons/fi'

const Cadastro = () => {
  return (
    <div>
        <Header />

        <section className='unique-section'>
            <h2>Login</h2>

            <form>
                <label htmlFor="">E-mail</label>
                <input type="email" name="" id=""/>

                <label htmlFor="">Senha</label>
                <input type="password" name="" id=""/>
                <p>Esqueci minha senha</p>

                <button>Continuar</button>

                <div className='section-link'>
                    <FiArrowLeft size={25} color="#505F93"/>
                    <span>Quero me cadastrar</span>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Cadastro