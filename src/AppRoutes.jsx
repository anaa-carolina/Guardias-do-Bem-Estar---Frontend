import { Route, Routes } from 'react-router-dom'

import Login from './components/Login/Login'
import Cadastro from './components/cadastro/Cadastro'
import Voluntaria from "./components/cadastro/voluntária/Voluntaria"
import CreditUser from "./components/cadastro/agradecimento/CreditUser/CreditUser"
import CreditVolunteer from "./components/cadastro/agradecimento/CreditVolunteer/CreditVolunteer"
import Formulario from "./components/cadastro/voluntária/formulario/Formulario"
import Confirmacao from "./components/cadastro/voluntária/formulario/Confirmacao/Confirmacao"
import Homepage from './components/Home/homepage'
import Perfil from './components/Perfil/Perfil'
import Post from './components/UserPost/Post'
const AppRoutes = () => {
  return (
    // Rotas da aplicação
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/voluntaria" element={<Voluntaria />} />
      <Route path="/credituser" element={<CreditUser />} />
      <Route path="/creditvolunteer" element={<CreditVolunteer />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/confirmacao" element={<Confirmacao />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/post" element={<Post />} />
      {/* Outras rotas aqui*/}
    </Routes>
  )
}

export default AppRoutes
