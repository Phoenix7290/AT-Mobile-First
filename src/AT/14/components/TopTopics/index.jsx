import styles from './TopTopics.module.css';
import PropTypes from 'prop-types';

const TopTopics = ({recentTopics, mostReplied, mostLiked}) => {

  return (
    <div className={styles.topics}>
      <div>
        <h4>Mais Recentes</h4>
        <ul>{recentTopics.map((topic, index) => <li key={index}>{topic}</li>)}</ul>
      </div>
      <div>
        <h4>Mais Respondidos</h4>
        <ul className={styles.list}>{mostReplied.map((topic, index) => <li key={index}>{topic}</li>)}</ul>
      </div>
      <div>
        <h4>Mais Curtidos</h4>
        <ul>{mostLiked.map((topic, index) => <li key={index}>{topic}</li>)}</ul>
      </div>
    </div>
  );
};

TopTopics.propTypes = {
  recentTopics: PropTypes.array.isRequired,
  mostReplied: PropTypes.array.isRequired,
  mostLiked: PropTypes.array.isRequired,
};

export default TopTopics;
