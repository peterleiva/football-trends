import { Rating } from './rating.schema';

declare module 'mongoose' {
  namespace Schema {
    namespace Types {
      export { Rating as Rating };
    }
  }
}
