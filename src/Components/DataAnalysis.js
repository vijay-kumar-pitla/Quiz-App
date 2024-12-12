import React, { useRef, useState } from 'react';
import { data } from './questions/dataAnalasysis';
import './Quiz.css';


const Java = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  const getEmoji = () => {
    if (score === data.length) {
      return "🎉 Excellent! Perfect Score!";
    } else if (score >= data.length * 0.7) {
      return "😊 Great Job! You're almost there!";
    } else if (score >= data.length * 0.4) {
      return "😐 Good try! You can do better!";
    } else {
      return "😞 Better luck next time!";
    }
  };

  return (
    <div className="quiz-container">
      <h1>Data Analysis Quiz</h1>
      {result ? (
        <>
          <h2>You Scored {score} out of {data.length}</h2>
          <p>{getEmoji()}</p>
          <button onClick={reset} className="reset-btn">
            Try Again
          </button>
        </>
      ) : (
        <>
          <h2>{index + 1}. {question.question}</h2>
          <ul className="options-list">
            <li ref={Option1} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
            <li ref={Option2} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
            <li ref={Option3} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
            <li ref={Option4} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
          </ul>
          <button onClick={next} className="next-btn">
            Next
          </button>
          <div className="index">{index + 1} of {data.length} questions</div>
        </>
      )}
    </div>
  );
};

export default Java;
