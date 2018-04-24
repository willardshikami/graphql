import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} from 'graphql';

export const foodieType = new GraphQLObjectType({
  name: 'Foodie',
  description: 'Foodie api',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    category_title: {
      type: GraphQLString
    },
    category_subtitle: {
      type: GraphQLString
    },
    category_description: {
      type: GraphQLString
    },
    category_links: {
      category_img_one: {
        type: GraphQLString
      },
      category_img_two: {
        type: GraphQLString
      },
      category_img_three: {
        type: GraphQLString
      }
    },
    local_dishes: {
      name: {
        type: GraphQLString
      },
      subtitle: {
        type: GraphQLString
      },
      description: {
        type: GraphQLString
      },
      cuisine: {
        type: GraphQLString
      },
      restaurant_name: {
        type: GraphQLString
      },
      restaurant_location: {
        type: GraphQLString
      },
      img_one: {
        type: GraphQLString
      },
      img_two: {
        type: GraphQLString
      },
      img_three: {
        type: GraphQLString
      }
    },
    dining_out: {
      name: {
        type: GraphQLString
      },
      subtitle: {
        type: GraphQLString
      },
      about: {
        type: GraphQLString
      },
      img: {
        type: GraphQLString
      },
      restaurant_location: {
        type: GraphQLString
      },
      visit: {
        type: GraphQLString
      }
    },
    night_life: {
      name: {
        type: GraphQLString
      },
      subtitle: {
        type: GraphQLString
      },
      about: {
        type: GraphQLString
      },
      img: {
        type: GraphQLString
      },
      club_location: {
        type: GraphQLString
      },
      visit: {
        type: GraphQLString
      }
    }
  })
});