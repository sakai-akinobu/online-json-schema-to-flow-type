// @flow
export default function tryParseToJson(value: string): ?Object {
  let json = null;
  try {
    json = JSON.parse(value);
  } catch (e) {} // eslint-disable-line no-empty
  return json;
}
