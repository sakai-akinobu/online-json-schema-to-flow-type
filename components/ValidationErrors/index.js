// @flow
import React from 'react';

import type {ValidationError} from '../../utils/jsonSchemaValidator';
import styles from './styles/index.scss';

type Props = {
  errors: ValidationError[],
};

export default function ValidationErrors(props: Props) {
  const {errors} = props;
  return (
    errors.length ?
      <ul className={styles.container}>
        {errors.map((error, index) => (
          <li key={index}>
            <div>{JSON.stringify(error)}</div>
          </li>
        ))}
      </ul>
    : null
  );
}
