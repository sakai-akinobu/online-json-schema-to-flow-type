// @flow
import React from 'react';

type Props = {
  value: string,
};

export default function FlowTypeTextArea(props: Props) {
  const {value} = props;
  return <textarea value={value} readOnly={true} />;
}
