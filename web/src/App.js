import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Preloading from './components/pages/preLoading/preLoading'
import Login from './components/pages/login/login'
import Cadastro from './components/pages/cadastro/cadastro'
// import Sakura from '../src/components/pages/sakura/sakura'
import './App.css'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulação de carregamento de dados
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simula um carregamento de 3 segundos
  }, [])

  const handleSwitchPage = () => {
    // Lógica para alternar entre páginas
  }

  return (
    <div className="App">

     {/* {loading ? <Preloading /> : <Sakura />}  */}
      
      {loading ? (
        <Preloading />
      ) : (
        <Router>
          <Routes>
            <Route path="/Login" element={<Login onSwitchPage={handleSwitchPage} />} />
            <Route path="/cadastro" element={<Cadastro />} />
            {/* Outras rotas aqui */}
          </Routes>
        </Router>
      )}
    </div>
  )
}

export default App;
