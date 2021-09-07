import type { Document } from 'mongoose';
import type { DefaultGraphqlContext } from '../grapqhl/defaultGraphqlContext';
import { BasicMongoDataSourceExtension } from '../extensions/basicMongoDataSourceExtension';

export abstract class MutationMongoDataSourceExtension<T extends Document, TContext extends DefaultGraphqlContext> extends BasicMongoDataSourceExtension<T, TContext> {
  public abstract entityPreSave(entity: Partial<T>): Partial<T>;

  public abstract entityPreUpdate(entity: Partial<T>): Partial<T>;
}
