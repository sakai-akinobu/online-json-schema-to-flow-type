// @flow
import React from 'react';
import {Component} from 'react';

import Header from '../components/Header';
import JsonSchemaTextArea from '../components/JsonSchemaTextArea';
import FlowTypeTextArea from '../components/FlowTypeTextArea';
import ValidationErrors from '../components/ValidationErrors';
import Footer from '../components/Footer';
import {parse} from '../utils/jsonSchemaToFlowType';
import {validateSchema} from '../utils/jsonSchemaValidator';
import tryParseToJson from '../utils/tryParseToJson';
import styles from './styles/index.scss';

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

    const jsonSchema = tryParseToJson(jsonSchemaCode);
    let validationErrors = [];
    if (jsonSchema) {
      validationErrors = validateSchema(jsonSchema);
    }

    return (
      <div>
        <Header />
        <div className={styles.container}>
          <JsonSchemaTextArea
            value={jsonSchemaCode}
            onChange={this.handleChangeJsonSchema}
          />
          <FlowTypeTextArea value={parse(jsonSchemaCode)} />
        </div>
        <ValidationErrors errors={validationErrors} />
        <Footer />
      </div>
    );
  }
}
