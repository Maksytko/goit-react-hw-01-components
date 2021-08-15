import style from "./Friend-list.module.css";
import propTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <li className={style.item} key={friend.id}>
            <span
              className={style.status}
              style={{ color: friend.isOnline ? "green" : "red" }}
            >
              {friend.isOnline ? "Online" : "Offline"}
            </span>
            <img
              className="avatar"
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
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
