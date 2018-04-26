import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const foodieSchema = new Schema({
  category_title: {
    type: String,
    required: true,
    unique: true
  },
  category_subtitle: {
    type: String,
    required: true,
    unique: true
  },
  category_description: {
    type: String,
    required: true,
    unique: true
  },
  category_links: {
    category_img_one: {
      type: Schema.Types.Mixed
    },
    category_img_two: {
      type: Schema.Types.Mixed
    },
    category_img_three: {
      type: Schema.Types.Mixed
    }
  },
  local_dishes: {
    name: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    cuisine: {
      type: String,
      required: true
    },
    restaurant_name: {
      type: String,
      required: true
    },
    restaurant_location: {
      type: Schema.Types.Mixed,
      required: true
    },
    img_one: {
      type: String,
      required: true
    },
    img_two: {
      type: Schema.Types.Mixed,
      required: true
    },
    img_three: {
      type: Schema.Types.Mixed,
      required: true
    }
  },
  dining_out: {
    name: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    about: {
      type: String,
      required: true
    },
    img: {
      type: Schema.Types.Mixed,
      required: true
    },
    restaurant_location: {
      type: Schema.Types.Mixed,
      required: true
    },
    visit: {
      type: Schema.Types.Mixed,
      required: true
    }
  },
  night_life: {
    name: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    about: {
      type: String,
      required: true
    },
    img: {
      type: Schema.Types.Mixed,
      required: true
    },
    club_location: {
      type: Schema.Types.Mixed,
      required: true
    },
    visit: {
      type: Schema.Types.Mixed,
      required: true
    }
  }
}, {collection: 'foodie', timestamps: true});

export default mongoose.model('foodie', foodieSchema);

