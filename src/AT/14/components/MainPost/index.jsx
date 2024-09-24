import styles from './MainPost.module.css';
import PropTypes from 'prop-types';

function MainPost ({title, subtitle, content, author, date, likes, repost}) {
  return (
    <div className={styles.post}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{content}</p>
      <div className={styles.details}>
        <span>Autor: {author}</span>
        <span>Data: {date}</span>
        <span>Curtidas: {likes}</span>
        <span>Respostas: {repost}</span>
      </div>
    </div>
  );
}

MainPost.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  likes: PropTypes.number,
  repost: PropTypes.number
};

export default MainPost;
