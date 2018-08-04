// @flow
import React from 'react';

import styles from './styles/index.scss';

export default function Header() {
  return (
    <header>
      <h1 className={styles.title}>Online JSON Schema to Flow Type</h1>
    </header>
  );
}
