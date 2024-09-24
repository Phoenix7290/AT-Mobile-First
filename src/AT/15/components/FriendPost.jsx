import PropTypes from "prop-types";
import { Card, CardMedia, Box, Typography, Avatar } from "@mui/material";

export default function FriendPost({ image, title, subtitle, author, date, imageOfAuthor, description, likes, shares, comments }) {
  return (
    <Card sx={{ mb: 4 }}>
      <CardMedia component="img" height="250" image={image} alt="post" />
      <Box p={2}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
        <Typography variant="body1" paragraph>{description}</Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar src={imageOfAuthor} alt={author} sx={{ mr: 1 }} />
          <Typography variant="body2">{author} - {date}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="body2">{likes} curtidas</Typography>
          <Typography variant="body2">{shares} compartilhamentos</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">Comentários:</Typography>
          {comments.map((comment, index) => (
            <Typography key={index} variant="body2">{comment}</Typography>
          ))}
        </Box>
      </Box>
    </Card>
  );
}

FriendPost.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imageOfAuthor: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  shares: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
};
