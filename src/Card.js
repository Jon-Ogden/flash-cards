import React, { useState } from "react";
import arrayOfQuestions from "./Array";

const Card = (props) => {
  const [show, setShow] = useState(true);
  function flipCard() {
    setShow(!show);
  }
  function removeCard(id) {
    arrayOfQuestions.splice(parseInt(id) - 1, 1);
    console.log(props.state);
    props.props.setState(!props.props.state);
  }

  return (
    <div>
      <div className="card" onClick={flipCard}>
        {show ? <h3>{props.question}</h3> : <p>{props.answer}</p>}
      </div>
      <button onClick={() => removeCard(props.id)}>Delete</button>
    </div>
  );
};
export default Card;
