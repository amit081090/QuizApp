import React,{useState,useContext,useRef} from 'react';
import {Questions} from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Contexts';


const Quiz = () => {
  const{score,setScore,setGameState}=useContext(QuizContext)
  const[currQuestion,setCurrQuestion]=useState(0);
  const[optionChosen,setOptionChosen]=useState("");
  const selectedOptionRef= useRef(null);

  const nextQuestion=()=>{

    if(Questions[currQuestion].answer===optionChosen){
      setScore(score + 1);
    }
    
    setCurrQuestion(currQuestion + 1);
    selectedOptionRef.current.style.backgroundColor = '';

  };

  const finishQuiz=()=>{
    if(Questions[currQuestion].answer===optionChosen){
      setScore(score + 1);
}
setGameState("EndScreen")
  };

  const handleOptionClick = (option) => {
    setOptionChosen(option);

    // Reset the style for the previously selected option
    if (selectedOptionRef.current) {
      selectedOptionRef.current.style.backgroundColor = '';
    }

    // Set the style for the newly selected option
    selectedOptionRef.current = document.getElementById(option);
    if (selectedOptionRef.current) {
      selectedOptionRef.current.style.backgroundColor = 'royalblue'; // Change this to the desired color
    }
  };
  return (
//     <div className='Quiz'>
//       <h1>{Questions[currQuestion].prompt}</h1>
//       <div className='options'>

//         <button id="A"onClick={()=>setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
//         <button id="B"onClick={()=>setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
//         <button id="C"onClick={()=>setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
//         <button id="D" onClick={()=>setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
//       </div>
//       {currQuestion === Questions.length - 1 ? 
//       (<button onClick={finishQuiz}>Finish QUIZ</button>)
//       :<button onClick={nextQuestion}>Next Question</button>}
    

//     </div>
//   )
// }




<div className='Quiz'>
<h1>{Questions[currQuestion].prompt}</h1>
<div className='options'>
  <button id="A" onClick={() => handleOptionClick("A")}>
    {Questions[currQuestion].optionA}
  </button>
  <button id="B" onClick={() => handleOptionClick("B")}>
    {Questions[currQuestion].optionB}
  </button>
  <button id="C" onClick={() => handleOptionClick("C")}>
    {Questions[currQuestion].optionC}
  </button>
  <button id="D" onClick={() => handleOptionClick("D")}>
    {Questions[currQuestion].optionD}
  </button>
</div>
{currQuestion === Questions.length - 1 ? (
  <button onClick={finishQuiz}>Finish QUIZ</button>
) : (
  <button onClick={nextQuestion}>Next Question</button>
)}
</div>
);
};

export default Quiz;