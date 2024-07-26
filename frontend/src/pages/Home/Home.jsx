import ImgMana from '../../assets/mana.png'
import Logo from '../../assets/logo.svg'
import ProfilePicture from '../../assets/profile-pic.jpg'
import ImgManas from '../../assets/manas2.png'

import { FiLinkedin, FiGithub, FiMail, FiArrowUp, FiArrowDown, FiMessageCircle } from 'react-icons/fi'

import './styles.css'

const Home = () => {
  return (
    <div>
        <header className='home-header'>
            <img src={Logo} alt="Mana" className='logo'/>
            <button className='header-button'>Login</button>
        </header>

        <section className='home-section-1'>
            <div className='home-section-div1'>
                <h1>Descubra amizades, compartilhe momentos</h1>
                <p><span className='span-bold'>Mana</span> é a sua nova rede social, criada para conectar pessoas de maneira autêntica e significativa. Aqui, você pode compartilhar suas histórias e se inspirar com conteúdos que realmente importam. Faça parte de uma comunidade vibrante e acolhedora!</p>
                <button>Criar conta</button>
            </div>
            
            <img src={ImgMana} alt="Boneca Mana" className='img-mana'/>
        </section>

        <section className='home-section-2'>
            <header className='home-header-2'>
                <h1 className='h1-section-2'>Saiba o que está acontecendo</h1>
                <button className='header-button-2'>Criar conta</button>
            </header>

            <div className='cards-container'>
                <article className='card'>
                    <div className='profile-container'>
                        <img src={ProfilePicture} alt="Foto de perfil do usuário" className='profile-pic'/>

                        <div className='profile-text'>
                            <span>/ notícias</span>
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

                <article className='card'>
                    <div className='profile-container'>
                        <img src={ProfilePicture} alt="Foto de perfil do usuário" className='profile-pic'/>

                        <div className='profile-text'>
                            <span>/ notícias</span>
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

                <article className='card'>
                    <div className='profile-container'>
                        <img src={ProfilePicture} alt="Foto de perfil do usuário" className='profile-pic'/>

                        <div className='profile-text'>
                            <span>/ notícias</span>
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

                <article className='card'>
                    <div className='profile-container'>
                        <img src={ProfilePicture} alt="Foto de perfil do usuário" className='profile-pic'/>

                        <div className='profile-text'>
                            <span>/ notícias</span>
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

                <article className='card'>
                    <div className='profile-container'>
                        <img src={ProfilePicture} alt="Foto de perfil do usuário" className='profile-pic'/>

                        <div className='profile-text'>
                            <span>/ notícias</span>
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

                <article className='card'>
                    <div className='profile-container'>
                        <img src={ProfilePicture} alt="Foto de perfil do usuário" className='profile-pic'/>

                        <div className='profile-text'>
                            <span>/ notícias</span>
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
        </section>

        <section className="home-section-3">
            <h1>Nosso time</h1>
            <div className="time-container">
                <img src={ImgManas} alt="Bonequinhos Mana" className='img-manas'/>

                <div className="time-content">
                    <div className='infos'>
                        <h2>Lumah Pereira</h2>
                        <h3>Designer, Front-End Developer, <br />Back-End Developer</h3>
                        <div className="info-buttons">
                            <button className='button-social'><FiLinkedin size={40} color="FFFFFFF"/></button>
                            <button className='button-social'><FiGithub size={40} color="FFFFFFF"/></button>
                            <button className='button-social'><FiMail size={40} color="FFFFFFF"/></button>
                        </div>
                    </div>

                    <div className='infos'>
                        <img src={Logo} alt="Mana" className='logo-bosta'/>
                        <p>2024 Feito por Lumah Pereira. Todos os direitos reservados.</p>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Home