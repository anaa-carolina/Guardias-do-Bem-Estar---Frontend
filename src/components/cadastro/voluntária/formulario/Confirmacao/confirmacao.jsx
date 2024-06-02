import "./Confirmacao.css"

import { useNavigate } from "react-router-dom"

function Confirmacao () {
    const navigate = useNavigate()

    const redirectToCredit = () => {
        navigate("/creditUser")
    }

    return (
        <div className="confirmacao">
            <h1>Hey, voluntaria</h1>

            <div className="confirmacao-box">
                <img  />

                <div className="confirmacao-textbox">
                    <p>Encaminharemos nos próximos dias, por e-mail a documentação necessária para a conclusão da sua candidatura. A partir disso, faremos a análise e liberação do seu perfil. </p>
                </div>

            </div>

            <p>Obrigada por se voluntáriar!</p>
            <p>você poderá acompanhar o status do cadastro logando em sua conta.</p>
            <hr />

            <button className='btnSubmit' type="submit" onClick={redirectToCredit}>Seguir</button>

        </div>
    )
}

export default Confirmacao
