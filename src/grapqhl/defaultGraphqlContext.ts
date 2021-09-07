import { DataSource } from 'apollo-datasource';

export type DefaultGraphqlContext = {
  id: string;
  groups: string[];
  dataSources: Record<string, DataSource>;
};
