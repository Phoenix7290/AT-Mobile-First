import styles from './ContributionsList.module.css';
import PropTypes from 'prop-types';

function ContributionsList ({contributions}) {
  return (
    <div className={styles.contributions}>
      {contributions.map((item, index) => (
        <div key={index} className={styles.contribution}>
          <p>{item.content}</p>
          <div className={styles.details}>
            <span>Autor: {item.author}</span>
            <span>Data: {item.date}</span>
            <span>Curtidas: {item.likes}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

ContributionsList.propTypes = {
  contributions: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  })).isRequired,
};

export default ContributionsList;
