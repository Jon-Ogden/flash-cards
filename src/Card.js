import { useState } from "react"
const Card = (props) => {
    const [show, setShow] = useState(true)
    function flipCard(){
        setShow(!show)
    }
    return(
        <div className="card" onClick={flipCard}>
            {show ? <h3>{props.question}</h3> :
            <p>{props.answer}</p>}
        </div>
    )
}
    export default Card