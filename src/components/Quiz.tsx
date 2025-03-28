import { useState } from "react";
import "./Quiz.css";

type Question = {
  question: string;
  options: string[];
  correctIndex: number;
};

const questions: Question[] = [
  {
    question: "Koliki je približno godišnji budžet Srbije (2024)?",
    options: [
      "3 milijarde €",
      "15 milijardi €",
      "27 milijardi €",
      "40 milijardi €",
    ],
    correctIndex: 2,
  },
  {
    question: "Koja afera je povezana sa prodajom oružja?",
    options: ["Jovanjica", "Krušik", "Rio Tinto", "EPS"],
    correctIndex: 1,
  },
  {
    question: "Šta znači pojam 'subvencija'?",
    options: [
      "Kazna za nepoštovanje zakona",
      "Porez na luksuz",
      "Državna pomoć ili olakšica",
      "Zabranjena trgovina",
    ],
    correctIndex: 2,
  },
  {
    question: "Koji je medij bio meta preuzimanja od strane Telekoma?",
    options: ["Blic", "Kurir", "K1", "N1"],
    correctIndex: 2,
  },
  {
    question: "Koji političar je imao aferu sa plagijatom doktorata?",
    options: ["Ana Brnabić", "Aleksandar Vučić", "Siniša Mali", "Ivica Dačić"],
    correctIndex: 2,
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index: number) => {
    setSelected(index);
    if (index === questions[current].correctIndex) {
      setScore((prev) => prev + 1);
    }
    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent((prev) => prev + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 800);
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <section className="quiz-section">
      <h2>🧠 Kviz znanja o budžetu i aferama</h2>

      {finished ? (
        <div className="quiz-result">
          <p>
            Tvoj rezultat:{" "}
            <strong>
              {score}/{questions.length}
            </strong>
          </p>
          <p>
            {score === questions.length
              ? "Brutalno, znaš sve!"
              : score >= 3
              ? "Znaš više od proseka!"
              : "Ima još da se uči... 😉"}
          </p>
          <button onClick={restart}>Ponovi kviz</button>
        </div>
      ) : (
        <div className="quiz-card">
          <p className="question">{questions[current].question}</p>
          <ul className="options">
            {questions[current].options.map((opt, i) => (
              <li
                key={i}
                className={`option ${
                  selected !== null
                    ? i === questions[current].correctIndex
                      ? "correct"
                      : i === selected
                      ? "wrong"
                      : ""
                    : ""
                }`}
                onClick={() => selected === null && handleAnswer(i)}
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Quiz;
