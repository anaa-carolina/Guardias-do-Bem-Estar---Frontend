import "../credit.css"
import { useNavigate } from "react-router-dom"


function CreditUser () {
    const navigate = useNavigate()

    const handleContinue = () => {
        navigate("/homepage")
    }


    return (
        <div className="credit-success">
            <p>Agora você faz parte da nossa comunidade!</p>
            <h1>BEM VINDA!</h1>
            <img alt="Credit Icon" />
            <button type="button" onClick={handleContinue}>Pronta?!</button>
        </div>
    )
}

export default CreditUser
