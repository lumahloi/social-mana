import Logo from '../../assets/logo.svg'

import { FiLogOut, FiSend, FiArrowUp, FiArrowDown, FiMessageCircle, FiTrash2 } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import api from '../../services/api'
import './styles.css'

import img_1 from '../../assets/1.png'
import img_2 from '../../assets/2.png'
import img_3 from '../../assets/3.png'
import img_4 from '../../assets/4.png'
import img_5 from '../../assets/5.png'
import img_6 from '../../assets/6.png'
import img_7 from '../../assets/7.png'

const CardController = ({loggeduser, post}) => {
  const { id, description, userid, name, picture, comment_count } = post
  const profilePic = picture ? `img_${picture}` : img_7

  const [likeHover, SetLikeHover] = useState(false)
  const [dislikeHover, SetDislikeHover] = useState(false)
  const [comHover, SetComHover] = useState(false)

  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)

  const [likes, setLikes] = useState([])
  const [dislikes, setDislikes] = useState([])

  const [trashHover, setTrashHover] = useState(false)

  useEffect(() => {
    api.get(`likes/${id}`, { headers: { Authorization: loggeduser }}).then(response => {
      setLikes(response.data.count)
      setLiked(response.data.liked)
    })

    api.get(`dislikes/${id}`, { headers: { Authorization: loggeduser }}).then(response => {
      setDislikes(response.data.count)
      setDisliked(response.data.disliked)
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

  async function handleNewDislike(id){
    try {
      await api.post(`/dislikes/${id}`, {}, { headers: { Authorization: loggeduser }})
      setDislikes(prevDislikes => prevDislikes + 1)
      setDisliked(true)

    } catch (e) {
      alert('Não foi possível dar dislike.')
      console.log(e)
    }
  }

  async function handleDeleteDislike(id){
    try {
      await api.delete(`dislikes/${id}`, { headers: { Authorization: loggeduser }, })
      setDislikes(prevDislikes => prevDislikes - 1)
      setDisliked(false)

    } catch (e) {
      alert('Não foi possível tirar seu like.')
      console.log(e)
    }
  }

  return (
    <article className='card' key={id}>
      <div className='profile-container'>
        <img src={profilePic} alt="" className='profile-pic'/>

        <div className='profile-text'>
          <span style={{cursor: 'pointer'}}>/ notícias</span>
            {userid === loggeduser && ( 
              <FiTrash2 
                size={20} 
                color={trashHover ? "#989898" : "#FFFFFF"}
                onMouseEnter={() => setTrashHover(true)}
                onMouseLeave={() => setTrashHover(false)} 
                className='trash-icon' 
                onClick={() => handleDeletePost(id)} />
            )}
          <span className='span-bold' style={{cursor: 'pointer'}}>@{name}</span>
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
            color={liked ? '#000000' : likeHover ? "#989898" : "#FFFFFF"}
            onMouseEnter={() => SetLikeHover(true)}
            onMouseLeave={() => SetLikeHover(false)}
            onClick={liked ? () => handleDeleteLike(id) : () => handleNewLike(id) }
            style={{cursor: 'pointer'}}
          />
          <div className='span-bold'>{likes}</div>
        </div>

        <div className='info-div'>
          <FiArrowDown 
            size={25} 
            color={disliked ? '#000000' : dislikeHover ? "#989898" : "#FFFFFF"}
            onMouseEnter={() => SetDislikeHover(true)}
            onMouseLeave={() => SetDislikeHover(false)}
            onClick={disliked ? () => handleDeleteDislike(id) : () => handleNewDislike(id) }
            style={{cursor: 'pointer'}}/>
          <div className='span-bold'>{dislikes}</div>
        </div>
        <div className='info-div'>
          <FiMessageCircle 
            size={25} 
            color={comHover ? "#989898" : "#FFFFFF"}
            onMouseEnter={() => SetComHover(true)}
            onMouseLeave={() => SetComHover(false)}
            //onClick={}
            style={{cursor: 'pointer'}}
          />
          <div className='span-bold'>{post.comment_count}</div>
        </div>
      </div>
    </article>
  )
}

const Timeline = () => {
  const username = localStorage.getItem('username')
  const userpic = localStorage.getItem('userpic')
  const loggeduser = localStorage.getItem('userid')
  const profilePic = userpic ? img_7 : `img_${userpic}`
  const navigate = useNavigate()

  const [posts, setPosts] = useState([])
  const [description, setDescription] = useState('')
  const [logoutHover, setLogoutHover] = useState(false)

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
    api.get('/posts', {
      headers: {
        Authorization: loggeduser
      }
    }).then(response => {
      setPosts(response.data)})
  }, [])

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
            <img src={profilePic} alt="" className='profile-pic-timeline'/>
            <span style={{cursor: 'pointer'}}>@{username}</span> 
            <FiLogOut size={22} color={logoutHover ? "#989898" : "#FFFFFF"}
                onMouseEnter={() => setLogoutHover(true)}
                onMouseLeave={() => setLogoutHover(false)}  onClick={handleLogout} style={{cursor: 'pointer'}}/>
          </div>
      </header>

      <form className='timeline-form' onSubmit={handlePostCreation}>
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
            key={posts.id} 
            loggeduser={loggeduser} 
            post={post}
            />
        ))}
      </div>
    </div>
  )
}

export default Timeline