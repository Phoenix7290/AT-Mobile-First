import PropTypes from "prop-types";
import { Box, Typography, Avatar } from "@mui/material";

export default function SuggestionsList({ suggestions }) {
  return (
    <Box component="aside" sx={{ p: 2 }}>
      <Typography variant="h6">Sugestões de amizade</Typography>
      {suggestions.map((suggestion) => (
        <Box key={suggestion.id} display="flex" alignItems="center" mb={2}>
          <Avatar src={suggestion.image} alt={suggestion.name} sx={{ mr: 2 }} />
          <Box>
            <Typography variant="subtitle1">{suggestion.name}</Typography>
            <Typography variant="body2">1 amigo em comum: {suggestion.mutualFriend}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
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
