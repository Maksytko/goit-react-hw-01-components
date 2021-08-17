import style from "./Friend-list-item.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={style.item}>
      <span
        className={style.status}
        style={{ color: isOnline ? "green" : "red" }}
      >
        {isOnline ? "Online" : "Offline"}
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

export default FriendListItem;
