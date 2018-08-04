// @flow
import React from 'react';

type Props = {
  value: string,
  onChange: (e: SyntheticEvent<HTMLTextAreaElement>) => void,
};

export default function JsonSchemaTextArea(props: Props) {
  const {value, onChange} = props;
  return <textarea value={value} onChange={onChange} />;
}
