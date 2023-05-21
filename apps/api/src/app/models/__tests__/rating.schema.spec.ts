import mongoose, { HydratedDocument, Model, Schema } from 'mongoose';
import { Rating } from '../rating.schema';

describe('RatingSchema', () => {
  let RatingModel: Model<{ rating: number }>;
  let doc: HydratedDocument<{ rating: number }>;

  beforeAll(() => {
    const schema = new Schema({
      rating: Rating,
    });

    RatingModel = mongoose.model<{ rating: number }>('Rating', schema);
  });

  beforeEach(() => {
    doc = new RatingModel();
  });

  it('should be valid when rating is 1', async () => {
    doc.rating = 1;
    await expect(doc.validate()).resolves.toBeUndefined();
  });

  it('should be valid when rating is 5', async () => {
    doc.rating = 5;

    await expect(doc.validate()).resolves.toBeUndefined();
  });

  it('invalid when rating is 0', async () => {
    doc.rating = 0;

    await expect(doc.validate()).rejects.toMatchInlineSnapshot(
      `[ValidationError: Rating validation failed: rating: Cast to Rating failed for value "0" (type number) at path "rating"]`
    );
  });

  it('invalid when rating is 6', async () => {
    doc.rating = 6;

    await expect(doc.validate()).rejects.toMatchInlineSnapshot(
      `[ValidationError: Rating validation failed: rating: Cast to Rating failed for value "6" (type number) at path "rating"]`
    );
  });

  it('invalid when not a number', async () => {
    doc.rating = 'invalid' as any;

    await expect(() => doc.validate()).rejects.toMatchInlineSnapshot(
      `[ValidationError: Rating validation failed: rating: Cast to Rating failed for value "invalid" (type string) at path "rating"]`
    );
  });

  it('valid when nullish', async () => {
    doc.rating = null;
    await expect(doc.validate()).resolves.toBeUndefined();
  });
});
