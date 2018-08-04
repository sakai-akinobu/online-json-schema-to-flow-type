// @flow
import React from 'react';

import styles from './styles/index.scss';

type Props = {
  value: string,
};

export default function FlowTypeTextArea(props: Props) {
  const {value} = props;
  return (
    <textarea
      value={value}
      readOnly={true}
      className={styles.textarea}
    />
  );
}
