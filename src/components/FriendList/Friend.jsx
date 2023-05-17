import { FriendList } from "./FriendList";
import css from "./FriendList.module.css";

export const Friend = ({ items }) => {
  return (
    <ul className={css.friendList}>
      {items.map((item) => (
        <li className={css.item} key={item.id}>
          <FriendList
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};
