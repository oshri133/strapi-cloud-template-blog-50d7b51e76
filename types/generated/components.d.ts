import type { Schema, Attribute } from '@strapi/strapi';

export interface HowToMakeHowToMake extends Schema.Component {
  collectionName: 'components_how_to_make_how_to_makes';
  info: {
    displayName: 'How-to-make';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    full_text: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface IngredientsAndqUantityIngredientsAndQuantity
  extends Schema.Component {
  collectionName: 'components_ingredients_andq_uantity_ingredients_and_quantities';
  info: {
    displayName: 'Ingredients and quantity';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    Ingredients: Attribute.String;
    quantity: Attribute.String;
  };
}

export interface NutritionalValuesNutritionalValues extends Schema.Component {
  collectionName: 'components_nutritional_values_nutritional_values';
  info: {
    displayName: 'nutritional_values';
    description: '';
  };
  attributes: {
    value: Attribute.Float;
    unit: Attribute.String;
    select: Attribute.Enumeration<
      [
        'Calories: \u05E7\u05DC\u05D5\u05E8\u05D9\u05D5\u05EA',
        'Fat: \u05E9\u05D5\u05DE\u05DF',
        'Saturated Fat: \u05E9\u05D5\u05DE\u05DF \u05E8\u05D5\u05D5\u05D9',
        'Trans Fat: \u05D8\u05E8\u05E0\u05E1',
        'Omega-3 Fatty Acids: \u05D0\u05D5\u05DE\u05D2\u05D4 3',
        'Cholesterol: \u05DB\u05D5\u05DC\u05E1\u05D8\u05E8\u05D5\u05DC',
        'Sodium: \u05E0\u05EA\u05E8\u05DF',
        'Potassium: \u05E4\u05D5\u05D8\u05E1\u05D9\u05D5\u05DD',
        'Carbohydrates: \u05E4\u05D7\u05DE\u05D9\u05DE\u05D5\u05EA',
        'Sugars: \u05E1\u05D5\u05DB\u05E8\u05D9\u05DD',
        'Added Sugars: \u05E1\u05D5\u05DB\u05E8\u05D9\u05DD \u05DE\u05D5\u05E1\u05E4\u05D9\u05DD',
        'Dietary Fiber: \u05E1\u05D9\u05D1\u05D9\u05DD \u05EA\u05D6\u05D5\u05E0\u05EA\u05D9\u05D9\u05DD',
        'Protein: \u05D7\u05DC\u05D1\u05D5\u05E0\u05D9\u05DD',
        'Vitamin A: \u05D5\u05D9\u05D8\u05DE\u05D9\u05DF A',
        'Vitamin C: \u05D5\u05D9\u05D8\u05DE\u05D9\u05DF C',
        'Calcium: \u05E1\u05D9\u05D3\u05DF',
        'Iron: \u05D1\u05E8\u05D6\u05DC',
        'Vitamin D: \u05D5\u05D9\u05D8\u05DE\u05D9\u05DF D',
        'Magnesium: \u05DE\u05D2\u05E0\u05D6\u05D9\u05D5\u05DD'
      ]
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'how-to-make.how-to-make': HowToMakeHowToMake;
      'ingredients-andq-uantity.ingredients-and-quantity': IngredientsAndqUantityIngredientsAndQuantity;
      'nutritional-values.nutritional-values': NutritionalValuesNutritionalValues;
    }
  }
}
