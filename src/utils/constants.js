
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
export const meal = [
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

export const baseRecipes = [
  {
    name: 'Coleslaw',
    servings: 8,
    prepTime: ['10', 'minutes'],
    cookTime: [],
    TotalTime: ['10', 'minutes'],
    ingredients: {
      dressing: [
        ['rice vinegar', '1/3', 'cup'],
        ['oil', '2/3', 'cup'],
        ['sesame oil', '1', 'tablespoon'],
        ['soy sauce or tamari', '1', 'tablespoon'],
        ['honey', '2', 'tablespoons'],
      ],
      slaw: [
        ['coleslaw mix', '16', 'oz', 'one bag'],
        ['ramen noodles, uncooked', '6', 'oz', '2 packs'],
        ['green onions', '4', 'stalks'],
        ['soy sauce or tamari', '1', 'cup'],
        ['thin sliced almonds', '1', 'cup'],
      ],
    },
    directions: {
      dressing: [
        // 1: 'Measure out the rice vinegar, avocado oil, sesame oil, soy sauce and honey into a jar with a tight-fitting lid',
        // 2: 'Place the lid on, and shake to combine; set aside.'
        ['Measure out the rice vinegar, avocado oil, sesame oil, soy sauce and honey into a jar with a tight-fitting lid'],
        ['Place the lid on, and shake to combine; set aside.']
      ],
      slaw: [
        // 1: 'Crush the ramen within the unopened pack, using the end of a wooden spoon.',
        // 2: 'Add the slaw mix (discard the dressing if it came with any - mine did not) to a large mixing bowl.',
        // 3: 'Add the almonds, broken ramen (discard seasoning mix) and green onions to the bowl.',
        // 4: 'Add the dressing, and toss to combine.',
        // 5: 'Optional: sprinkle with sesame seeds for garnish, if desired.',
        ['Crush the ramen within the unopened pack, using the end of a wooden spoon.'],
        ['Add the slaw mix (discard the dressing if it came with any - mine did not) to a large mixing bowl.'],
        ['Add the almonds, broken ramen (discard seasoning mix) and green onions to the bowl.'],
        ['Add the dressing, and toss to combine.'],
        ['Optional: sprinkle with sesame seeds for garnish, if desired.'],
      ],
    }, // include notes here too?
    photos: {
      // featured: '../styles/assets/ramenSalad.png',
      featured: ramenSalad,
      all: [],
    },
    tags: {
      all: [],
      cuisine: ['asian'],
      ingredient: '',
      meal: ['salad', 'side dish'],
      time: [''],
    },
    notes: [],
    url: 'https://www.apinchofhealthy.com/asian-ramen-slaw-easy-10-minute-recipe/',
  },
  {
    name: 'Spam Musubi',
    servings: 8,
    prepTime: ['25', 'minutes'],
    cookTime: ['5', 'minutes'],
    TotalTime: ['30', 'minutes'],
    ingredients: [
      ['spam', '12', 'oz'],
      ['oyster sauce', '1/4', 'cup'],
      ['soy sauce', '1/4', 'cup'],
      ['sugar', '1/2', 'cup'],
      ['cooked sushi rice, without vinegar', '6', 'cups'],
    ],
    directions: [
      // 1: 'Slice the SPAM into about 8-10 slices (depending on how thick you like it) and put in a Ziplock bag. Mix oyster sauce, soy sauce, and sugar until sugar is dissolved and add to the bag with the SPAM. Marinate for about 15 minutes.',
      // 2: 'Drain off marinade and fry SPAM on each side over medium heat until slightly crispy or until desired doneness. Some people like to glaze the SPAM with the marinade/sauce AFTER frying, either way tastes great!',
      // 3: 'Place a strip of nori on a cutting board or clean surface (shiny side down). Place your Musubi mold across the middle of the nori. Add Sushi Rice to the mold, pressing down firmly and evenly so there is about 1-1 ½ inches of rice. Dip the mold and your fingers in water as you go to prevent sticking.',
      // 4: 'Next, remove the mold from the rice. Now you will have a nice little block of rice right on the nori. Add some of the cooked SPAM to the top. Wrap up one side of the nori and stick it to the top of the SPAM, then wrap up the other side. Just like you are wrapping a nice little package. Use a little water on your finger to seal if needed. Serve warm.',
      // 5: 'Some like it dipped in soy sauce, some like it with ketchup, and some like it as is.',
      ['Slice the SPAM into about 8-10 slices (depending on how thick you like it) and put in a Ziplock bag. Mix oyster sauce, soy sauce, and sugar until sugar is dissolved and add to the bag with the SPAM. Marinate for about 15 minutes.'],
      ['Drain off marinade and fry SPAM on each side over medium heat until slightly crispy or until desired doneness. Some people like to glaze the SPAM with the marinade/sauce AFTER frying, either way tastes great!'],
      ['Place a strip of nori on a cutting board or clean surface (shiny side down). Place your Musubi mold across the middle of the nori. Add Sushi Rice to the mold, pressing down firmly and evenly so there is about 1-1 ½ inches of rice. Dip the mold and your fingers in water as you go to prevent sticking.'],
      ['Next, remove the mold from the rice. Now you will have a nice little block of rice right on the nori. Add some of the cooked SPAM to the top. Wrap up one side of the nori and stick it to the top of the SPAM, then wrap up the other side. Just like you are wrapping a nice little package. Use a little water on your finger to seal if needed. Serve warm.'],
      ['Some like it dipped in soy sauce, some like it with ketchup, and some like it as is.'],
    ], // include notes here too?
    photos: {
      featured: spamMusubi,
      all: [],
    },
    tags: {
      all: [],
      cuisine: ['hawaiian'],
      ingredient: '',
      meal: ['appetizer', 'lunch'],
      time: [''],
    },
    notes: ['If you are making a lot and saving it. Wrap individually in some plastic wrap and keep it in the fridge for up to a week. When you are ready to eat it, unwrap and place in the microwave for 15-20 seconds.'],
    url: 'https://www.favfamilyrecipes.com/musubi/spam',
  },
]