import propTypes from "prop-types";
import FriendListItem from "../Friend-list-item/Friend-list-item";

function FriendList({ friends }) {
  return (
    <ul>
      <FriendListItem friends={friends} />
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
