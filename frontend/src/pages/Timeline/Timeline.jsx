import Logo from '../../assets/logo.svg'
import ProfilePicture from '../../assets/profile-pic.jpg'

import { FiLogOut, FiSend, FiArrowUp, FiArrowDown, FiMessageCircle, FiTrash2 } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import api from '../../services/api'

import './styles.css'

const Timeline = () => {
  const username = localStorage.getItem('username')
  const pfp = localStorage.getItem('picture')
  const userid = localStorage.getItem('userid')
  const navigate = useNavigate()

  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.get('/posts', {}).then(response => {
      setPosts(response.data)
  })}, [])

  async function handleDeletePost(id){
    try {
      await api.delete(`posts/${id}`, {
        headers: { 
          Authorization: userid
        },
      })

      setPosts(posts.filter(post => post.id != id))
    } catch (err) {
      alert('Não foi possível deletar o post')
    }
  }

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
        {posts.map(post => (
          <article className='card' key={post.id}>
              <div className='profile-container'>
                <img src={post.picture ? post.data.picture : ProfilePicture} alt="" className='profile-pic'/>

                  <div className='profile-text'>
                      <span>/ notícias</span>
                      {post.userid === userid && ( <FiTrash2 size={20} color="#FFFFFF" className='trash-icon' onClick={() => handleDeletePost(post.id)} />)}
                      <span className='span-bold'>@{post.name}</span>
                  </div>
              </div>

              <div className="post-content">
                  <br />
                  <p>{post.description}</p>
              </div>

              <hr />

              <div className="postinfo-container">
                  <div className='info-div'><FiArrowUp size={25} color="FFFFFFF"/><div className='span-bold'>{post.likes ? post.likes : '10 K'}</div></div>
                  <div className='info-div'><FiArrowDown size={25} color="FFFFFFF"/><div className='span-bold'>{post.dislikes ? post.dislikes : '10 K'}</div></div>
                  <div className='info-div'><FiMessageCircle size={25} color="FFFFFFF"/><div className='span-bold'>10 k</div></div>
              </div>
          </article>
        ))}
        </div>
    </div>
  )
}

export default Timeline