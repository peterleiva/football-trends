import mongoose, { AnyObject, SchemaType } from 'mongoose';

export class Rating extends SchemaType {
  constructor(path: string, options?: AnyObject) {
    super(path, options, 'Rating');
  }

  cast(val: unknown) {
    if (val == null) {
      return val;
    }

    const rating = Number(val);

    if (isNaN(rating)) {
      throw new Error(`Rating: value must be a number got ${val}`);
    }

    if (rating < 1 || rating > 5) {
      throw new Error('Rating: value must be between 1 and 5');
    }

    return rating;
  }
}

mongoose.Schema.Types.Rating = Rating;
