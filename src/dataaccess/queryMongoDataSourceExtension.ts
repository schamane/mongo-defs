import type { FilterQuery, Document } from 'mongoose';
import type { DefaultGraphqlContext } from '../grapqhl/defaultGraphqlContext';
import { BasicMongoDataSourceExtension } from '../extensions/basicMongoDataSourceExtension';

export abstract class QueryMongoDataSourceExtension<T extends Document, TContext extends DefaultGraphqlContext> extends BasicMongoDataSourceExtension<T, TContext> {
  public abstract entityPreQuery(query: FilterQuery<T>): Promise<FilterQuery<T>>;
}
