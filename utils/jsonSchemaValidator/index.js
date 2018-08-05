// @flow
import Ajv from 'ajv';
import metaSchema from 'ajv/lib/refs/json-schema-draft-04';

// json-schema-to-flow-type が draft-04 までしか対応していないため、draft-04 前提でバリデーションする
// see also:
//   https://github.com/epoberezkin/ajv#using-version-6
//   https://github.com/epoberezkin/ajv#options
const ajv = new Ajv({
  meta: false, // draft-06 以降のメタスキーマの追加を抑止する。
  schemaId: 'id', // draft-06 以降では $id にリネームされているキーワードを draft-04 互換にする。
});

ajv.addMetaSchema(metaSchema);
ajv._opts.defaultMeta = metaSchema.id;

export type ValidationError = {|
  keyword: string,
  dataPath: string,
  schemaPath: string,
  params: Object,
  message: string,
  schema: string,
  parentSchema: string,
  data: Object,
|};

export function validateSchema(schema: Object): ValidationError[] {
  ajv.validateSchema(schema);
  return ajv.errors || [];
}
