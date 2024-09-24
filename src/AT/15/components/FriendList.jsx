import PropTypes from "prop-types";
import { Box, Typography, Avatar } from "@mui/material";

export default function FriendList({ friends }) {
  return (
    <Box component="aside" sx={{ p: 2 }}>
      <Typography variant="h6">Amigos</Typography>
      {friends.map((friend) => (
        <Box key={friend.id} display="flex" alignItems="center" mb={2}>
          <Avatar src={friend.image} alt={friend.name} sx={{ mr: 2 }} />
          <Box>
            <Typography variant="subtitle1">{friend.name}</Typography>
            <Typography variant="body2">{friend.mutualFriends} amigos em comum</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      mutualFriends: PropTypes.number.isRequired,
    })
  ).isRequired,
};
