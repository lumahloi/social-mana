import ImgMana from '../../assets/mana.png'
import ImgManas from '../../assets/manas2.png'
import Logo from '../../assets/logo.svg'
import img_7 from '../../assets/7.png'

import { Link } from 'react-router-dom'

import { FiLinkedin, FiGithub, FiMail, FiArrowUp, FiArrowDown, FiMessageCircle } from 'react-icons/fi'

import './styles.css'

const Home = () => {
    const profilePic = img_7
    return (
        <div>
            <header className='home-header'>
                <Link to="/">
                    <img src={Logo} alt="Mana" className='logo' />
                </Link>

                <Link to="/login">
                    <button className='header-button'>Login</button>
                </Link>
            </header>

            <section className='home-section-1'>
                <div className='home-section-div1'>
                    <h1>Descubra amizades, compartilhe momentos</h1>
                    <p><span className='span-bold'>Mana</span> é a sua nova rede social, criada para conectar pessoas de maneira autêntica e significativa. Aqui, você pode compartilhar suas histórias e se inspirar com conteúdos que realmente importam. Faça parte de uma comunidade vibrante e acolhedora!</p>
                    <Link to="/cadastro">
                        <button>Criar conta</button>
                    </Link>
                </div>

                <img src={ImgMana} alt="Boneca Mana" className='img-mana' />
            </section>

            <section className='home-section-2'>
                <header className='home-header-2'>
                    <h1 className='h1-section-2'>Saiba o que está acontecendo</h1>
                    <Link to="/cadastro">
                        <button className='header-button-2'>Criar conta</button>
                    </Link>
                </header>

                <div className='cards-container'>
                    <article className='card'>
                        <div className='profile-container'>
                            <img src={profilePic} alt="Foto de perfil do usuário" className='profile-pic' />

                            <div className='profile-text'>
                                <span>/ notícias</span>
                                <span className='span-bold'>@freestyle</span>
                            </div>
                        </div>

                        <div className="post-content">
                            <br />
                            <p>Aproveitando o dia ensolarado no parque! 🌞 #Natureza #Relax</p>
                        </div>

                        <hr />

                        <div className="postinfo-container">
                            <div className='info-div'><FiArrowUp size={25} color="FFFFFFF" /><div className='span-bold'> 10 K</div></div>
                            <div className='info-div'><FiArrowDown size={25} color="FFFFFFF" /><div className='span-bold'>10 K</div></div>
                            <div className='info-div'><FiMessageCircle size={25} color="FFFFFFF" /><div className='span-bold'>10 K</div></div>
                        </div>
                    </article>

                    <article className='card'>
                        <div className='profile-container'>
                            <img src={profilePic} alt="Foto de perfil do usuário" className='profile-pic' />

                            <div className='profile-text'>
                                <span>/ notícias</span>
                                <span className='span-bold'>@bookworm</span>
                            </div>
                        </div>

                        <div className="post-content">
                            <br />
                            <p>Acabei de terminar um livro incrível! Alguém tem recomendações para o próximo? 📚</p>
                        </div>

                        <hr />

                        <div className="postinfo-container">
                            <div className='info-div'><FiArrowUp size={25} color="FFFFFFF" /><div className='span-bold'> 10 K</div></div>
                            <div className='info-div'><FiArrowDown size={25} color="FFFFFFF" /><div className='span-bold'>10 K</div></div>
                            <div className='info-div'><FiMessageCircle size={25} color="FFFFFFF" /><div className='span-bold'>10 K</div></div>
                        </div>
                    </article>

                    <article className='card'>
                        <div className='profile-container'>
                            <img src={profilePic} alt="Foto de perfil do usuário" className='profile-pic' />

                            <div className='profile-text'>
                                <span>/ notícias</span>
                                <span className='span-bold'>@chocaholic</span>
                            </div>
                        </div>

                        <div className="post-content">
                            <br />
                            <p>Treino pesado hoje na academia! 💪 #Fitness #Saúde</p>
                        </div>

                        <hr />

                        <div className="postinfo-container">
                            <div className='info-div'><FiArrowUp size={25} color="FFFFFFF" /><div className='span-bold'> 10 K</div></div>
                            <div className='info-div'><FiArrowDown size={25} color="FFFFFFF" /><div className='span-bold'>10 K</div></div>
                            <div className='info-div'><FiMessageCircle size={25} color="FFFFFFF" /><div className='span-bold'>10 K</div></div>
                        </div>
                    </article>

                    <article className='card'>
                        <div className='profile-container'>
                            <img src={profilePic} alt="Foto de perfil do usuário" className='profile-pic' />

                            <div className='profile-text'>
                                <span>/ notícias</span>
                                <span className='span-bold'>@moooovie</span>
                            </div>
                        </div>

                        <div className="post-content">
                            <br />
                            <p>Experimentando uma nova receita de bolo de chocolate. Alguém quer um pedaço? 🍫🍰</p>
                        </div>

                        <hr />

                        <div className="postinfo-container">
                            <div className='info-div'><FiArrowUp size={25} color="FFFFFFF" /><div className='span-bold'> 10 K</div></div>
                            <div className='info-div'><FiArrowDown size={25} color="FFFFFFF" /><div className='span-bold'>10 K</div></div>
                            <div className='info-div'><FiMessageCircle size={25} color="FFFFFFF" /><div className='span-bold'>10 K</div></div>
                        </div>
                    </article>

                    <article className='card'>
                        <div className='profile-container'>
                            <img src={profilePic} alt="Foto de perfil do usuário" className='profile-pic' />

                            <div className='profile-text'>
                                <span>/ notícias</span>
                                <span className='span-bold'>@coffeeee</span>
                            </div>
                        </div>

                        <div className="post-content">
                            <br />
                            <p>Assistindo a um filme clássico pela primeira vez. Que obra-prima! 🎬 #Cinema</p>
                        </div>

                        <hr />

                        <div className="postinfo-container">
                            <div className='info-div'><FiArrowUp size={25} color="FFFFFFF" /><div className='span-bold'> 10 K</div></div>
                            <div className='info-div'><FiArrowDown size={25} color="FFFFFFF" /><div className='span-bold'>10 K</div></div>
                            <div className='info-div'><FiMessageCircle size={25} color="FFFFFFF" /><div className='span-bold'>10 K</div></div>
                        </div>
                    </article>

                    <article className='card'>
                        <div className='profile-container'>
                            <img src={profilePic} alt="Foto de perfil do usuário" className='profile-pic' />

                            <div className='profile-text'>
                                <span>/ notícias</span>
                                <span className='span-bold'>@happyfrog</span>
                            </div>
                        </div>

                        <div className="post-content">
                            <br />
                            <p>Passeio de fim de semana com a família. Amo esses momentos! ❤️ #Família</p>
                        </div>

                        <hr />

                        <div className="postinfo-container">
                            <div className='info-div'><FiArrowUp size={25} color="FFFFFFF" /><div className='span-bold'> 10 K</div></div>
                            <div className='info-div'><FiArrowDown size={25} color="FFFFFFF" /><div className='span-bold'>10 K</div></div>
                            <div className='info-div'><FiMessageCircle size={25} color="FFFFFFF" /><div className='span-bold'>10 K</div></div>
                        </div>
                    </article>
                </div>
            </section>

            <section className="home-section-3">
                <h1>Nosso time</h1>
                <div className="time-container">
                    <img src={ImgManas} alt="Bonequinhos Mana" className='img-manas' />

                    <div className="time-content">
                        <div className='infos'>
                            <h2>lumahloi</h2>
                            <h3>Design, Front-End Development, <br />Back-End Development</h3>
                        </div>

                        <div className='infos'>
                            <img src={Logo} alt="Mana" className='logo-bosta' />
                            <p>2024 Feito por lumahloi. Alguns direitos reservados.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Home