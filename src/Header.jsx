import Logo from './assets/logo.svg'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='home-header'>
      <Link to="/">
        <img src={Logo} alt="Mana" className='logo'/>
      </Link>
    </header>
  )
}

export default Header