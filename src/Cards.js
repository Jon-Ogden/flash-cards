import Card from "./Card";
import arrayOfQuestions from "./Array";

const RenderCards = (props) => {
  return arrayOfQuestions.map((current) => {
    return (
      <Card
        props={props}
        key={current.id}
        id={current.id}
        question={current.question}
        answer={current.answer}
      />
    );
  });
};

export default RenderCards;
