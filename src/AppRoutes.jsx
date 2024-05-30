import { Route, Routes } from 'react-router-dom'

import Login from './components/Login/login'
import Cadastro from './components/cadastro/cadastro';
import Voluntaria from "./components/cadastro/voluntária/voluntaria";
import CreditUser from "./components/cadastro/agradecimento/CreditUser/creditUser";
import CreditVolunteer from "./components/cadastro/agradecimento/CreditVolunteer/creditVolunteer";
import Formulario from "./components/cadastro/voluntária/formulario/formulario";
import Confirmacao from "./components/cadastro/voluntária/formulario/Confirmacao/confirmacao";
import Homepage from "./components/Home/homepage";
import Perfil from './components/Perfil/perfil';

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
      {/* Outras rotas aqui*/}
    </Routes>
  );
}

export default AppRoutes;
