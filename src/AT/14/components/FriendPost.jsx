import PropTypes from "prop-types";

export default function FriendPost({
  image,
  title,
  subtitle,
  author,
  date,
  imageOfAuthor,
  description,
  likes,
  shares,
  comments,
}) {
  return (
    <div className="friend-post">
      <img src={image} alt="post" />
      <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        <p>
          <img src={imageOfAuthor} alt="avatar do autor" /> {author} - {date}
        </p>
        <div className="post-info">
          <span>{likes} curtidas</span> |{" "}
          <span>{shares} compartilhamentos</span>
        </div>
        <div className="comments">
          <h4>Comentários:</h4>
          {comments.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))}
        </div>
      </div>
    </div>
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
