import PropTypes from "prop-types";

export default function FriendList({ friends }) {
  return (
    <aside className="friend-list">
      <h2>Amigos</h2>
      {friends.map((friend) => (
        <div key={friend.id} className="friend">
          <img src={friend.image} alt={friend.name} />
          <div>
            <h3>{friend.name}</h3>
            <p>{friend.mutualFriends} amigos em comum</p>
          </div>
        </div>
      ))}
    </aside>
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
