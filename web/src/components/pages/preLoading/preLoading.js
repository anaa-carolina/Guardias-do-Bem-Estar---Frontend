import './preLoading.css'
import logoGif from '../../../img/logo/GifEscudo.gif'
import logoNome from '../../../img/logo/LogoNome.png'

const Preloader = () => {
    return (

    <div className="loading">
        <img className="logoGif" src={logoGif} />
        <img className="logoNome" src={logoNome}/>
    </div>
    )
}

export default Preloader