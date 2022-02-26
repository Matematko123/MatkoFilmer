import styles from './Container.module.css';

function Container(props) {
  return (
    <div className={`${props.className} ${styles.container} `}>
      {props.children}
    </div>
  );
}

export default Container;
