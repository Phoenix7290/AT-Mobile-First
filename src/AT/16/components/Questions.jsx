import PropTypes from 'prop-types';

const Questions = ({ questions }) => (
  <div className="questions">
    <h2>Perguntas sobre o produto</h2>
    <ul>
      {questions.map((question, index) => (
        <li key={index}>
          <p><strong>{question.user}</strong> - {question.date}</p>
          <p>Pergunta: {question.question}</p>
          <p>Resposta: {question.answer}</p>
        </li>
      ))}
    </ul>
  </div>
);

Questions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  })).isRequired,
};

export default Questions;
