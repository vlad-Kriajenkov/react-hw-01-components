import PropTypes from "prop-types";
import { IsOnline } from "components/IsOnline/IsOnline";

import css from "./FriendList.module.css";
export const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <>
      <IsOnline isOnline={isOnline} />

      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
