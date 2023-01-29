import image from "../../img/1.jpg";
import { questions } from "./QuizPage";

function Result ({ correct, setStep, setCorrect }) {
  return(
  <div className="result">
    <img src={image} alt="result_img" />
    <h2>
      Ви відгадали {correct} відповідей із {questions.length}
    </h2>

    <button
      onClick={() => {
        setStep(0);
        setCorrect(0);
      }}
    >
      Спробувати ще
    </button>
  </div>
  )
};

export default Result;
