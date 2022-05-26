import {useState} from "react"
import arrayOfQuestions from "./Array"


const Form = (props) =>{
const [question, setQuestion] = useState('')
const [answer, setAnswer] = useState('')

function submit(e){
    e.preventDefault()
    arrayOfQuestions.push({id:arrayOfQuestions.length+ 1, question:question, answer:answer, correct:false})
    console.log(arrayOfQuestions)
    props.setState(!props.state)

}
    return(
        <form>
            <title>Add Card</title>
            <label>Question</label>
            <input type="text" id="question" name="question" size={50} value={question} onChange={(e)=>{setQuestion(e.target.value)}}></input><br/>
            <label>Answer</label>
            <input type="text" id="answer" name="answer"value={answer} onChange={(e)=>{setAnswer(e.target.value)}}></input><br/>
            <button onClick={submit}>Submit</button>
        </form>
    )
}

export default Form