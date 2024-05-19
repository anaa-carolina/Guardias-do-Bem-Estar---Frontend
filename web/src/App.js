import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Preloading from './components/pages/preLoading/preLoading'
import Login from './components/pages/login/login'
import Cadastro from './components/pages/cadastro/cadastro'
import Voluntaria from "./components/pages/cadastro/voluntária/voluntaria"
import CreditUser from "./components/pages/cadastro/agradecimento/creditUser/creditUser"
import CreditVolunteer from "./components/pages/cadastro/agradecimento/creditVolunteer/creditVolunteer"
import Formulario from "./components/pages/cadastro/voluntária/formulario/formulario"
import Confirmacao from "./components/pages/cadastro/voluntária/formulario/confirmacao/confirmacao"

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulação de carregamento de dados
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 4000) // Simula um carregamento de 4 segundos

    // Limpe o timeout quando o componente for desmontado
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="App">
      <Router>
        {loading ? (
          <Preloading />
        ) : (
          <AppRoutes />
        )}
      </Router>
    </div>
  )
}

const AppRoutes = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirecionar para a tela de login após o carregamento inicial
    if (window.location.pathname === '/') {
      navigate('/Login');
    }
  }, [navigate])

  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path='/Voluntaria' element={<Voluntaria />} />
      <Route path='/CreditUser' element={<CreditUser />} />
      <Route path='/CreditVolunteer' element={<CreditVolunteer />} />
      <Route path='/Formulario' element={<Formulario />} />
      <Route path='/Confirmacao' element={<Confirmacao />} />
      {/* Outras rotas aqui */}
    </Routes>
  )
}

export default App
