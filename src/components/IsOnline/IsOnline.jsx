import css from "./IsOnline.module.css";

export const IsOnline = ({ isOnline }) => {
  return <span className={isOnline === true ? css.online : css.oflaine}></span>;
};
