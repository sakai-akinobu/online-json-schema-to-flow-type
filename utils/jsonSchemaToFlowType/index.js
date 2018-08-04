// @flow
const toFlowType = require('json-schema-to-flow-type');

export function parse(json: string): string {
  let flowTypeCode = '';
  try {
    flowTypeCode = toFlowType.parseSchema(JSON.parse(json));
  } catch (e) {} // eslint-disable-line no-empty
  return flowTypeCode;
}
