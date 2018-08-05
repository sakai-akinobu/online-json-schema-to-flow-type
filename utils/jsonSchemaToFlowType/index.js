// @flow
import tryParseToJson from '../tryParseToJson';

const toFlowType = require('json-schema-to-flow-type');

export function parse(value: string): string {
  let flowTypeCode = '';
  const json = tryParseToJson(value);
  if (json) {
    flowTypeCode = toFlowType.parseSchema(json);
  }
  return flowTypeCode;
}
