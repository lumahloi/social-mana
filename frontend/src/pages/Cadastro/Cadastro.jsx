import Header from '../../Header'
import './styles.css'

import { FiArrowLeft } from 'react-icons/fi'

const Cadastro = () => {
  return (
    <div>
        <Header />

        <section className='unique-section'>
            <h2>Cadastro</h2>

            <form>
                <label htmlFor="">Nome de usuário</label>
                <input type="text" name="" id="" placeholder="Esse será o nome exibido"/>

                <label htmlFor="">E-mail</label>
                <input type="email" name="" id="" placeholder="Insira seu melhor email"/>

                <label htmlFor="">Senha</label>
                <input type="password" name="" id=""/>

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