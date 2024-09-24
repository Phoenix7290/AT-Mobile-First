const Comments = () => {
  const comments = [
    { name: 'John Doe', date: '2024-08-30', comment: 'Great product!' },
    { name: 'Jane Smith', date: '2024-08-29', comment: 'Good value for money.' },
  ];

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

export default Comments;
