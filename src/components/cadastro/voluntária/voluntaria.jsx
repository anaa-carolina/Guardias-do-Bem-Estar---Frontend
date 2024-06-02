import "./Voluntaria.css"
// import { useNavigate } from 'react-router-dom'


function Voluntaria() {
    // const navigate = useNavigate()

    const redirectToFormulario = () => {
        // navigate("/formulario")
    }

    const redirectToCreditUser = () => {
        // navigate("/creditUser")s
    }


    return (
        <div className="volunteering">
            <div className="volunteering-description">
                <h1>Ei! Você pode fazer parte disso também!</h1>
                <h2>Se você é formada ou está prestes a se formar em advocacia, psicologia ou medicina, você pode se cadastrar como uma voluntária e ajudar a comunidade.</h2>
            </div>

            <div className="volunteering-cards">
                <div className="volunteering-cards-accepted" onClick={redirectToFormulario}>
                    <img alt="Ícone de voluntária" />
                    <a href="/formulario">Quero ser voluntária!</a>
                </div>

                <div className="volunteering-cards-rejected" onClick={redirectToCreditUser}>
                    <img alt="Ícone de usuária" />
                    <a href="/creditUser">Não quero ser voluntária</a>
                </div>
            </div>
        </div>
    )
}

export default Voluntaria
