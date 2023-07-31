import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={styles[`${props.className}`]} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
