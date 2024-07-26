import Logo from './assets/logo.svg'

const Header = () => {
  return (
    <header className='home-header'>
        <img src={Logo} alt="Mana" className='logo'/>
    </header>
  )
}

export default Header