import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Cadastro from './pages/Cadastro/Cadastro'
import Login from './pages/Login/Login'
import Timeline from './pages/Timeline/Timeline'

function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/timeline" element={<Timeline />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas