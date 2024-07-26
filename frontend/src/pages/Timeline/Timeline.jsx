import Logo from '../../assets/logo.svg'
import ProfilePic from '../../assets/profile-pic.jpg'
import ProfilePicture from '../../assets/profile-pic.jpg'

import { FiLogOut, FiSend, FiArrowUp, FiArrowDown, FiMessageCircle, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './styles.css'

const Timeline = () => {
  return (
    <div>
      <header className='home-header'>
          <Link to="/">
            <img src={Logo} alt="Mana" className='logo'/>
          </Link>
          <div className='header-user'>
            <img src={ProfilePic} alt="" className='profile-pic-timeline'/>
            <span>@garoto de programa</span> 
            <FiLogOut size={22} color="#FFFFFFF"/>
          </div>
      </header>

      <form className='timeline-form'>
        <div>
          <label htmlFor="">Tema:</label>
          <select name="" id="" className='post-select'>
            <option value="">aa</option>
          </select>
        </div>

        <div>
          <label htmlFor="">O que você está pensando?</label>
          <div className='post-div'>
            <input type="text" placeholder='Escreva aqui' className='post-input'/>
            <button className='post-button'><FiSend size={30} color="#FFFFFFF"/></button>
          </div>
        </div>
      </form>

      <div className='cards-container'>
                <article className='card'>
                    <div className='profile-container'>
                        <img src={ProfilePicture} alt="Foto de perfil do usuário" className='profile-pic'/>

                        <div className='profile-text'>
                            <span>/ notícias</span>
                            <FiTrash2 size={20} color="#FFFFFF" className='trash-icon'/>
                            <span className='span-bold'>@garoto de programa</span>
                        </div>
                    </div>

                    <div className="post-content">
                        <br />
                        <p>WTF um cara entrou com uma bateria de lítio num elevador e ela EXPLODIU !!! ele morreu carbonizado '-'</p>
                    </div>

                    <hr />

                    <div className="postinfo-container">
                        <div className='info-div'><FiArrowUp size={25} color="FFFFFFF"/><div className='span-bold'> 10 K</div></div>
                        <div className='info-div'><FiArrowDown size={25} color="FFFFFFF"/><div className='span-bold'>10 K</div></div>
                        <div className='info-div'><FiMessageCircle size={25} color="FFFFFFF"/><div className='span-bold'>10 K</div></div>
                    </div>
                </article>
            </div>
    </div>
  )
}

export default Timeline