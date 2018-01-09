import React from "react";

import styles from "./Input.css";

const Input = props => (
  <div className={styles.group}>
    <input className={styles.input} {...props} />
    <span className={styles.highlight} />
    <span className={styles.bar} />
    <label className={styles.label}>Name</label>
  </div>
);

export default Input;
