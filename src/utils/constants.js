
export const googleMapsAPIKey = 'AIzaSyDLb40V4v0CBLKKFaxjZRrev3cg_AZv5rU';

export const statusMessages = {
  add: {
    success: 'Your expense has been added to ', // TODO: pass variables into these strings
    error: 'Your expense was not added. Please try again and report bug to Laura.'
  },
  delete: {
    success: 'Your expense has been deleted.',
    error: 'Your expense was not deleted. Please try again and report bug to Laura.'
  },
  update: {
    success: 'Your expense has been updated.',
    error: 'Your expense was not updated. Please try again and report bug to Laura.'
  },
  form: {
    requiredError: 'All fields are required.'
  },
  addowed: {
    success: 'Your item has been added to ',
    error: 'Your item was not added. Please try again and report bug to Laura.'
  },
  deleteowed: {
    success: 'Your item has been deleted.',
    error: 'Your item was not deleted. Please try again and report bug to Laura.'
  },
  updateowed: {
    success: 'Your item has been updated.',
    error: 'Your item was not updated. Please try again and report bug to Laura.'
  },
  // expenseList: {
  //   noExpenses: 'There are no expenses for '
  // },
}

// TAG TYPES
export const cuisine = [
  'asian',
  'korean',
  'chinese',
  'thai',
  'moroccan',
  'argentinian',
  'southern',
]
export const ingredient = [
  'carrot',
  'ground beef',
  'cashews',
  'pineapple',
  'mozzarella',
  'panko',
  'hawaiian rolls',
]
export const recipeCategories = [
  'breakfast',
  'lunch',
  'dinner',
  'snack',
  'appetizer',
  'salad',
  'side dish',
]
export const time = [
  'quick',
  'plan ahead',
]

export const measurements = [
  'cup',
  'oz',
  'package',
  'piece',
  'quart',
  'tablespoon',
  'teaspoon',
]

export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const userTags = {
  all: [],
  cuisine: ['hawaiian', 'asian', 'italian', 'pizza', 'thai', 'southern'],
  ingredient: [
    'carrot',
    'ground beef',
    'cashews',
    'pineapple',
    'mozzarella',
    'panko',
    'hawaiian rolls',
  ],
  meal: ['appetizer', 'lunch', 'dinner'],
  time: ['quick', 'slowcook'],
}