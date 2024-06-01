import React, { useContext } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
// import { AuthContext } from '../autenticacao/AuthProvider'
import './homepage.css'
import Header from '../Header/header'

function Homepage() {

//   const { logout } = useContext(AuthContext)

  return (
      <div >

        <Header/>

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
