import React from 'react';
import styles from './Button.module.scss';

function Button(): React.ReactElement {
  return (
    <button type="button" className={styles.button}>
      Button 2232323
      <div className={styles.button__div}>2223</div>
    </button>
  );
}

export default Button;
