import { get } from 'lodash';
import type { QueryFields, QueryFieldsType } from '@schamane/graphql-defs';

export const translateField = (key: string, Translations: QueryFieldsType): QueryFields => get(Translations, key, key);
