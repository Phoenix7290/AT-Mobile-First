import PropTypes from 'prop-types';

const Comments = ({comments}) => {

  return (
    <div className="comments">
      <h2>User Comments</h2>
      <div className="comment-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p><strong>{comment.name}</strong> - {comment.date}</p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Comments;
