import classNames from "classnames";
import "./Main.css";

const Main = ({ children }) => {
  const classes = classNames({
    appBody: true,
  });
  return <div className={classes}>{children}</div>;
};

export default Main;
