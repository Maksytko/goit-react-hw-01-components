import propTypes from "prop-types";
import FriendListItem from "../Friend-list-item/Friend-list-item";

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      avatar: propTypes.string,
      name: propTypes.string,
      isOnline: propTypes.bool,
      id: propTypes.number,
    })
  ).isRequired,
};

export default FriendList;
