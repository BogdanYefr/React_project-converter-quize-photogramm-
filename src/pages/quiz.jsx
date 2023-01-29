import image from "../img/1.jpg";

const questions = [
  {
    title: 'Яка тварина подобається Костянтину?',
    variants: ['Пацюк', 'Копібара', 'Бобер'],
    correct: 1,
  },
  {
    title: 'Яку посаду займає Ангеліна?',
    variants: ['HR менеджер', 'Фронтенд розробник', 'Тестувальник ПЗ'],
    correct: 0,
  },
  {
    title: 'Що таке JSX?',
    variants: [
      'Це звичайний HTML',
      'Це назва голактики',
      'Це той же HTML, але з властивістю виконати JS-код',
    ],
    correct: 2,
  },
  {
    title: 'Яка назва компанії, від якої ми навчаємося?',
    variants: [
      'FIX',
      'BonePrix',
      'NIX',
    ],
    correct: 2,
  },
  {
    title: 'Який салат усі готують на Новорічний стіл (хочаб заради традиції)?',
    variants: [
      'Цезар',
      "Олів`є",
      'Черчілль',
    ],
    correct: 1,
  },
];

function Result({ correct, step, setStep }) {
  return (
    <div className="result">
      <img src={image} />
      <h2>Ви відгадали {correct} відповідей із {questions.length}</h2>
      
      <button onClick={() => {setStep(step = 0)}}>Спробувати ще</button>
      
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round(step / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
        <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
        ))}
      </ul>
    </>
  );
}


function QuizPage () {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];
  
  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className='quiz-contant'>
      <div className="QuizApp">
        {
          step != questions.length ? (<Game step={step} question={question} onClickVariant={onClickVariant}/>
          ) : (
          <Result correct={correct} step={step} setStep={setStep} />)
        }
      </div>
    </div>
  );
}

export default QuizPage;