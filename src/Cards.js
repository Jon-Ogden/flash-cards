import Card from "./Card";
import arrayOfQuestions from "./Array";

const RenderCards = () => {
    return( arrayOfQuestions.map((current) => {
        console.log(current.answer)
        return <Card
        key={current.id}
        id={current.id}
        question={current.question}
        answer={current.answer}
        />
    })
)}

export default RenderCards;