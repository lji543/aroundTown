
import ramenSalad from '../styles/assets/ramenSalad.png';
import spamMusubi from '../styles/assets/spamMusubi.png';

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

export const baseRecipes = {
  '8345gbaae': {
    id: '8345gbaae',
    name: 'Coleslaw',
    categories: ['Side Dish'],
    servings: 8,
    prepTime: ['10', 'minutes'],
    cookTime: [],
    totalTime: ['10', 'minutes'],
    recipeSections: ['dressing', 'slaw'],
    isFavorite: true,
    ingredients: [
      {section: 'dressing', ingredient: 'rice vinegar', amt: '1/3', measurement: 'cup'},
      {section: 'dressing', ingredient: 'oil', amt: '2/3', measurement: 'cup'},
      {section: 'dressing', ingredient: 'sesame oil', amt: '1', measurement: 'tablespoon'},
      {section: 'dressing', ingredient: 'soy sauce or tamari', amt: '1', measurement: 'tablespoon'},
      {section: 'dressing', ingredient: 'honey', amt: '2', measurement: 'tablespoons'},
      {section: 'slaw', ingredient: 'coleslaw mix', amt: '16', measurement: 'oz', notes: 'one bag'},
      {section: 'slaw', ingredient: 'ramen noodles, uncooked', amt: '6', measurement: 'oz', notes: '2 packs'},
      {section: 'slaw', ingredient: 'green onions', amt: '4', measurement: 'stalks'},
      {section: 'slaw', ingredient: 'soy sauce or tamari', amt: '1', measurement: 'cup'},
      {section: 'slaw', ingredient: 'thin sliced almonds', amt: '1', measurement: 'cup'},
    ],
    directions: [
      {
        section: 'dressing',
        direction: 'Measure out the rice vinegar, avocado oil, sesame oil, soy sauce and honey into a jar with a tight-fitting lid',
        step: 1,
      },
      {
        section: 'dressing',
        direction: 'Place the lid on, and shake to combine; set aside.',
        step: 2,
      },
      {
        section: 'slaw',
        direction: 'Crush the ramen within the unopened pack, using the end of a wooden spoon.',
        step: 1,
      },
      {
        section: 'slaw',
        direction: 'Add the slaw mix (discard the dressing if it came with any - mine did not) to a large mixing bowl.',
        step: 2,
      },
      {
        section: 'slaw',
        direction: 'Add the almonds, broken ramen (discard seasoning mix) and green onions to the bowl.',
        step: 3,
      },
      {
        section: 'slaw',
        direction: 'Add the dressing, and toss to combine.',
        step: 4,
      },
      {
        section: 'slaw',
        direction: 'Optional: sprinkle with sesame seeds for garnish, if desired.',
        step: 5,
      },
    ],
    photos: {
      // featured: '../styles/assets/ramenSalad.png',
      featured: ramenSalad,
      all: [ramenSalad, ramenSalad, ramenSalad, ramenSalad, ramenSalad, ramenSalad, ramenSalad, ramenSalad],
    },
    tags: {
      all: [],
      cuisine: ['asian'],
      ingredient: [],
      meal: ['salad', 'side dish'],
      time: [],
    },
    notes: [],
    url: 'https://www.apinchofhealthy.com/asian-ramen-slaw-easy-10-minute-recipe/',
  },
  '39sdefndve': {
    id: '39sdefndve',
    name: 'Spam Musubi',
    categories: ['Breakfast', 'Snack'],
    servings: 8,
    prepTime: ['25', 'minutes'],
    cookTime: ['5', 'minutes'],
    totalTime: ['30', 'minutes'],
    recipeSections: null,
    ingredients: [
      {ingredient: 'spam', amt: '12', measurement: 'oz'},
      {ingredient: 'oyster sauce', amt: '1/4', measurement: 'cup'},
      {ingredient: 'soy sauce', amt: '1/4', measurement: 'cup'},
      {ingredient: 'sugar', amt: '1/2', measurement: 'cup'},
      {ingredient: 'cooked sushi rice, without vinegar', amt: '6', measurement: 'cups'},
    ],
    directions: [
      {
        direction: 'Slice the SPAM into about 8-10 slices (depending on how thick you like it) and put in a Ziplock bag. Mix oyster sauce, soy sauce, and sugar until sugar is dissolved and add to the bag with the SPAM. Marinate for about 15 minutes.',
        step: 1,
      },
      {
        direction: 'Drain off marinade and fry SPAM on each side over medium heat until slightly crispy or until desired doneness. Some people like to glaze the SPAM with the marinade/sauce AFTER frying, either way tastes great!',
        step: 2,
      },
      {
        direction: 'Place a strip of nori on a cutting board or clean surface (shiny side down). Place your Musubi mold across the middle of the nori. Add Sushi Rice to the mold, pressing down firmly and evenly so there is about 1-1 ½ inches of rice. Dip the mold and your fingers in water as you go to prevent sticking.',
        step: 3,
      },
      {
        direction: 'Next, remove the mold from the rice. Now you will have a nice little block of rice right on the nori. Add some of the cooked SPAM to the top. Wrap up one side of the nori and stick it to the top of the SPAM, then wrap up the other side. Just like you are wrapping a nice little package. Use a little water on your finger to seal if needed. Serve warm.',
        step: 4,
      },
      {
        direction: 'Some like it dipped in soy sauce, some like it with ketchup, and some like it as is.',
        step: 5,
      },
    ],
    photos: {
      featured: spamMusubi,
      all: [spamMusubi, spamMusubi, spamMusubi, spamMusubi],
    },
    tags: {
      all: [],
      cuisine: ['hawaiian'],
      ingredient: [],
      meal: ['appetizer', 'lunch'],
      time: [],
    },
    notes: ['If you are making a lot and saving it. Wrap individually in some plastic wrap and keep it in the fridge for up to a week. When you are ready to eat it, unwrap and place in the microwave for 15-20 seconds.'],
    url: 'https://www.favfamilyrecipes.com/musubi/spam',
  },
}

export const baseRecipeObject = {
  id: '',
  name: '',
  categories: [],
  servings: 0,
  prepTime: [],
  cookTime: [],
  totalTime: [],
  recipeSections: null,
  ingredients: [
    {ingredient: '', amt: '', measurement: 'cup'},
  ],
  directions: [
    {
      direction: '',
      step: 1,
    },
  ],
  photos: {
    featured: null,
    all: [],
  },
  tags: {
    all: [],
    cuisine: [],
    ingredient: [],
    meal: [],
    time: [],
  },
  notes: [''],
  url: '',
}