// @flow
import React from 'react';
import {Component} from 'react';

import JsonSchemaTextArea from '../components/JsonSchemaTextArea';
import FlowTypeTextArea from '../components/FlowTypeTextArea';
import {parse} from '../utils/jsonSchemaToFlowType';

type State = {
  jsonSchemaCode: string,
};

export default class Index extends Component<void, State> {

  constructor(props: void) {
    super(props);

    this.state = {
      jsonSchemaCode: '',
    };
  }

  handleChangeJsonSchema = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    this.setState({jsonSchemaCode: e.currentTarget.value});
  }

  render() {
    const {jsonSchemaCode} = this.state;

    return (
      <div>
        <JsonSchemaTextArea
          value={jsonSchemaCode}
          onChange={this.handleChangeJsonSchema}
        />
        <FlowTypeTextArea value={parse(jsonSchemaCode)} />
      </div>
    );
  }
}
