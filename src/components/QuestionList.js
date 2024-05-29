import React from "react";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {
  function handleCorrectAnswerChange(event, id) {
    const newCorrectIndex = parseInt(event.target.value, 10);
    onUpdateQuestion(id, newCorrectIndex);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
          <li key={question.id}>
            <p>{question.prompt}</p>
            <label>
              Correct Answer:
              <select
                value={question.correctIndex}
                onChange={(event) => handleCorrectAnswerChange(event, question.id)}
              >
                {question.answers.map((answer, index) => (
                  <option key={index} value={index}>
                    {answer}
                  </option>
                ))}
              </select>
            </label>
            <button onClick={() => onDeleteQuestion(question.id)}>Delete</button>
            </li>
        ))}
        </ul>
    </section>
  );
}

export default QuestionList;
