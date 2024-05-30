import './preLoading.css'
import Logo from '../../assets/img/logo/Escudo.png'

const PreLoader = () => {
    return (
        <div className="loading-box">
            <div className="loading">
                <img className="logo" src= {Logo} alt="Logo" />
            </div>
        </div>
    );
};

export default PreLoader
