import { useState } from "react";
import Game from "./Game";
import Result from "./Result";

export const questions = [
  {
    title: "Яка тварина подобається Костянтину?",
    variants: ["Пацюк", "Копібара", "Бобер"],
    correct: 1,
  },
  {
    title: "Яку посаду займає Ангеліна?",
    variants: ["HR менеджер", "Фронтенд розробник", "Тестувальник ПЗ"],
    correct: 0,
  },
  {
    title: "Що таке JSX?",
    variants: [
      "Це звичайний HTML",
      "Це назва голактики",
      "Це той же HTML, але з властивістю виконати JS-код",
    ],
    correct: 2,
  },
  {
    title: "Яка назва компанії, від якої ми навчаємося?",
    variants: ["FIX", "BonePrix", "NIX"],
    correct: 2,
  },
  {
    title: "Який салат усі готують на Новорічний стіл (хочаб заради традиції)?",
    variants: ["Цезар", "Олів`є", "Черчілль"],
    correct: 1,
  },
];

function QuizPage() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  function onClickVariant(answer) {
    setStep(step + 1);

    if (answer === question.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <div className="quiz-contant">
      <div className="QuizApp">
        {step !== questions.length ? (
          <Game
            step={step}
            question={question}
            onClickVariant={onClickVariant}
          />
        ) : (
          <Result correct={correct} setStep={setStep} setCorrect={setCorrect} />
        )}
      </div>
    </div>
    
  );
};

export default QuizPage;
