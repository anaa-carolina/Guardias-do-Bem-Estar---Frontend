import './header.css'

import logo from '../../assets/img/logo/Escudo.png'
import homeIcon from '../../assets/img/icones/feed/home.svg'
import perfil from '../../assets/img/icones/feed/meu_perfil.svg'
import sairIcon from '../../assets/img/icones/menu_sair/sair.svg'

import { Link } from 'react-router-dom';

const Header = () => {

    //   const { logout } = useContext(AuthContext)

    return (
        <div className='headerLine'>
            <div className='headerContent'>


                <div className='headerLogo'>
                    <img src={logo} alt='Logo' />
                </div>


                <div className='toolsBar'>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/homepage">
                                    <img alt="Home Icon" src={homeIcon} />
                                </Link>
                            </li>

                            <li>
                                <Link to="/perfil">
                                    <img alt="Perfil Icon" src={perfil} />
                                </Link>
                            </li>

                        </ul>
                    </nav>
                </div>

                <div className='logout'>
                    <img alt='Sair' src={sairIcon} />
                </div>

            </div>
        </div>
    )
}  

export default Header