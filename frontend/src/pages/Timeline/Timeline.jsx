import Logo from '../../assets/logo.svg'
import ProfilePicture from '../../assets/profile-pic.jpg'

import { FiLogOut, FiSend, FiArrowUp, FiArrowDown, FiMessageCircle, FiTrash2 } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import api from '../../services/api'

import './styles.css'

const CardController = ({loggeduser, post}) => {
  const { id, description, dislikes, userid, name, picture } = post

  const [hover, setHover] = useState(false)
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState([])

  useEffect(() => {
    api.get(`likes/${id}`, { headers: { Authorization: loggeduser }}).then(response => {
      setLikes(response.data.count)
      setLiked(response.data.liked)
    })
  }, [id, loggeduser])

  async function handleDeletePost(id){
    try {
      await api.delete(`posts/${id}`, { headers: {  Authorization: loggeduser }, })

      //ajustar isso mais tarde
      window.location.reload()

    } catch (e) {
      alert('Não foi possível deletar o post')
      console.log(e)
    }
  }

  async function handleDeleteLike(id){
    try {
      await api.delete(`likes/${id}`, { headers: { Authorization: loggeduser }, })
      setLikes(prevLikes => prevLikes - 1)
      setLiked(false)

    } catch (e) {
      alert('Não foi possível tirar seu like.')
      console.log(e)
    }
  }

  async function handleNewLike(id){
    try {
      await api.post(`/likes/${id}`, {}, { headers: { Authorization: loggeduser }})
      setLikes(prevLikes => prevLikes + 1)
      setLiked(true)

    } catch (e) {
      alert('Não foi possível dar like.')
      console.log(e)
    }
  }

  return (
    <article className='card' key={id}>
      <div className='profile-container'>
        <img src={picture ? picture : ProfilePicture} alt="" className='profile-pic'/>

        <div className='profile-text'>
          <span>/ notícias</span>
            {userid === loggeduser && ( <FiTrash2 size={20} color="#FFFFFF" className='trash-icon' onClick={() => handleDeletePost(id)} />)}
          <span className='span-bold'>@{name}</span>
        </div>
      </div>

      <div className="post-content">
        <br />
        <p>{description}</p>
      </div>

      <hr />

      <div className="postinfo-container">
        <div className='info-div'>
          <FiArrowUp
            size={25}
            color={liked ? '#000000' : hover ? "#989898" : "#FFFFFF"}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={liked ? () => handleDeleteLike(id) : () => handleNewLike(id) }
            style={{cursor: 'pointer'}}
          />

          <div className='span-bold'>{likes}</div>
        </div>

        <div className='info-div'>
          <FiArrowDown size={25} color="FFFFFFF" style={{cursor: 'pointer'}}/>
          <div className='span-bold'>{dislikes ? dislikes : '10 K'}</div>
        </div>

        <div className='info-div'>
          <FiMessageCircle size={25} color="FFFFFFF" style={{cursor: 'pointer'}}/>
          <div className='span-bold'>10 k</div>
        </div>
      </div>
    </article>
  )
}

const Timeline = () => {
  const username = localStorage.getItem('username')
  const pfp = localStorage.getItem('picture')
  const loggeduser = localStorage.getItem('userid')
  const navigate = useNavigate()

  const [posts, setPosts] = useState([])
  const [description, setDescription] = useState('')

  async function handlePostCreation(e){
    e.preventDefault()
    const data = { description }

    try {
      await api.post('posts', data, {
        headers: {
          Authorization: loggeduser
        }
      })

      window.location.reload();
    } catch (err) {
      alert('Falha ao criar post! Tente novamente')
    }
  }

  useEffect(() => {
    api.get('/posts', {}).then(response => {
      setPosts(response.data)
  })}, [])

  function handleLogout(){
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div>
      <header className='home-header'>
          <Link to="/">
            <img src={Logo} alt="Mana" className='logo'/>
          </Link>
          <div className='header-user'>
            <img src={pfp ? pfp : ProfilePicture} alt="" className='profile-pic-timeline'/>
            <span>@{username}</span> 
            <FiLogOut size={22} color="#FFFFFFF" onClick={handleLogout} style={{cursor: 'pointer'}}/>
          </div>
      </header>

      <form className='timeline-form' onSubmit={handlePostCreation}>
        <div>
          <label htmlFor="">Tema:</label>
          <select name="" id="" className='post-select'>
            <option value="">notícias</option>
            <option value="">política</option>
            <option value="">entretenimento</option>
            <option value="">conversa</option>
            <option value="">desabafo</option>
          </select>
        </div>

        <div>
          <label htmlFor="">O que você está pensando?</label>
          <div className='post-div'>
            <input type="text" placeholder='Escreva aqui' className='post-input' value={description} onChange={e => setDescription(e.target.value)} maxLength={125}/>
            <button className='post-button' type='submit'><FiSend size={30} color="#FFFFFFF"/></button>
          </div>
        </div>
      </form>

      <div className='cards-container'>
        {posts.map(post => (
          <CardController 
            loggeduser={loggeduser} 
            post={post}/>
        ))}
      </div>
    </div>
  )
}

export default Timeline