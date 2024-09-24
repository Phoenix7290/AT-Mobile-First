import PropTypes from "prop-types";

export default function SuggestionsList({ suggestions }) {
  return (
    <aside className="suggestions-list">
      <h2>Sugestões de amizade</h2>
      {suggestions.map((suggestion) => (
        <div key={suggestion.id} className="suggestion">
          <img src={suggestion.image} alt={suggestion.name} />
          <div>
            <h3>{suggestion.name}</h3>
            <p>1 amigo em comum: {suggestion.mutualFriend}</p>
          </div>
        </div>
      ))}
    </aside>
  );
}

SuggestionsList.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      mutualFriend: PropTypes.string.isRequired,
    })
  ).isRequired,
};
