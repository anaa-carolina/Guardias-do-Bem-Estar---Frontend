import React, { useContext } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
// import Home from './homepage'
// import Perfil from '../Perfil/index.jsx'
// import { AuthContext } from '../autenticacao/AuthProvider'
import './homepage.css'
import logo from '../../assets/img/logo/Escudo.png'

function Homepage() {

//   const { logout } = useContext(AuthContext)

  return (
      <div>
        <div className='header'>
          <img className='headerLogo' src={logo} alt='Logo' />
          <div className='toolsBar'>
            <nav>
              <ul>
                <li>
                  <Link to="/">
                    <img alt="Home Icon" />
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/perfil">
                    <img alt="Perfil Icon" />
                    Perfil
                  </Link>
                </li>

              </ul>
            </nav>
          </div>
          {/* <img className='headerSair' alt='Sair' onClick={logout} /> */}
        </div>
        <div className='feed'>
          <div className='newPost'>
            <div className='addPost'></div>
            <div className='addFiles'></div>
          </div>
        </div>
      </div>
  )
}

export default Homepage
