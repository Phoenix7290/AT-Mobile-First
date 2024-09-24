import PropTypes from "prop-types";

function Result({ score, total }) {
  return (
    <div className="result-container">
      <h2>Quiz Terminado!</h2>
      <p>Sua pontuação é {score} de {total}</p>
    </div>
  );
}

Result.propTypes = {
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Result;
