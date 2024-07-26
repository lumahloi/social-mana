import Header from '../../Header'
import './styles.css'

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

                <button>Continuar</button>

                <div className='section-link'>
                    <FiArrowLeft size={25} color="#505F93"/>
                    <span>Já tenho uma conta</span>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Cadastro