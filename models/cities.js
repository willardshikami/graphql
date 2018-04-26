import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    county: {
      type: String,
      required: true
    },
    type: {
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
    links: {
      page_url: {
        type: String,
        required: true
      },
      img_one: {
        type: String,
        required: true
      },
      img_two: {
        type: String,
        required: true
      },
      img_three: {
        type: String,
        required: true
      },
      img_four: {
        type: String,
        required: true
      },
      img_five: {
        type: String,
        required: true
      }
    }
}, {collection: city, timestamps: true});

export default mongoose.model('city', citySchema);