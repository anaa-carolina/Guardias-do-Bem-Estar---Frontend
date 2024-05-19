import "../credit.css"
import { useNavigate } from "react-router-dom"
import creditImg from "../../../../../img/icones/voluntario/creditIcon.png"


function CreditVolunteer () {
    const navigate = useNavigate()

    const handleContinue = () => {
        navigate("/homepage")
    }


    return (
        <div className="credit-success">
            <p>Agora você faz parte das nossas voluntárias!</p>
            <h1>BEM VINDA!</h1>
            <img src={creditImg} alt="Credit  Icon" />
            <button type="button" onClick={handleContinue}>Pronta?!</button>
        </div>
    )
}

export default CreditVolunteer