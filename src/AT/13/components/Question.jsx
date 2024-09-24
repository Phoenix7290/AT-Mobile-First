import PropTypes from "prop-types";

function Question({ question, handleAnswer }) {
  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  handleAnswer: PropTypes.func.isRequired,
};

export default Question;
