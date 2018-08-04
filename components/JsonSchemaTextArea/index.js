// @flow
import React from 'react';

import styles from './styles/index.scss';

type Props = {
  value: string,
  onChange: (e: SyntheticEvent<HTMLTextAreaElement>) => void,
};

export default function JsonSchemaTextArea(props: Props) {
  const {value, onChange} = props;
  return (
    <textarea
      value={value}
      onChange={onChange}
      className={styles.textarea}
    />
  );
}
