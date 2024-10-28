export const FILTERS = {
  PRODUCT_TYPES: [
    { value: 'vegetables', label: 'Vegetables' },
    { value: 'fruits', label: 'Fruits' },
    { value: 'beef', label: 'Beef' },
    { value: 'pork', label: 'Pork' },
    { value: 'lamb', label: 'Lamb' },
    { value: 'chicken', label: 'Chicken' },
    { value: 'turkey', label: 'Turkey' },
    { value: 'eggs', label: 'Eggs' },
    { value: 'dairy', label: 'Dairy' },
    { value: 'honey', label: 'Honey' },
    { value: 'mushrooms', label: 'Mushrooms' },
    { value: 'herbs', label: 'Herbs' },
  ],

  PRODUCT_ATTRIBUTES: {
    beef: [
      { value: 'grass-fed', label: 'Grass Fed' },
      { value: 'grass-finished', label: 'Grass Finished' },
      { value: 'grain-finished', label: 'Grain Finished' },
      { value: 'non-gmo-feed', label: 'Non-GMO Feed' },
      { value: 'hormone-free', label: 'No Added Hormones' },
      { value: 'antibiotic-free', label: 'No Antibiotics Ever' },
      { value: 'black-angus', label: 'Black Angus' },
      { value: 'wagyu', label: 'American Wagyu' },
    ],
    pork: [
      { value: 'heritage-breed', label: 'Heritage Breed' },
      { value: 'pasture-raised', label: 'Pasture Raised' },
      { value: 'non-gmo-feed', label: 'Non-GMO Feed' },
      { value: 'antibiotic-free', label: 'No Antibiotics Ever' },
    ],
    chicken: [
      { value: 'free-range', label: 'Free Range' },
      { value: 'pasture-raised', label: 'Pasture Raised' },
      { value: 'non-gmo-feed', label: 'Non-GMO Feed' },
      { value: 'antibiotic-free', label: 'No Antibiotics Ever' },
      { value: 'heritage-breed', label: 'Heritage Breed' },
    ],
    vegetables: [
      { value: 'organic', label: 'USDA Certified Organic' },
      { value: 'pesticide-free', label: 'Pesticide Free' },
      { value: 'non-gmo', label: 'Non-GMO' },
      { value: 'heirloom', label: 'Heirloom Varieties' },
      { value: 'hydroponics', label: 'Hydroponic' },
      { value: 'greenhouse', label: 'Greenhouse Grown' },
    ],
    fruits: [
      { value: 'organic', label: 'USDA Certified Organic' },
      { value: 'pesticide-free', label: 'Pesticide Free' },
      { value: 'non-gmo', label: 'Non-GMO' },
      { value: 'heirloom', label: 'Heirloom Varieties' },
    ],
  },

  CERTIFICATIONS: [
    { value: 'usda-organic', label: 'USDA Certified Organic' },
    { value: 'naturally-grown', label: 'Certified Naturally Grown' },
    { value: 'gap', label: 'GAP Certified' },
    { value: 'animal-welfare', label: 'Animal Welfare Approved' },
    { value: 'regenerative', label: 'Regenerative Agriculture' },
    { value: 'family-farm', label: 'Family Owned Farm' },
  ],

  WEIGHT_PRICING: [
    { value: 'hanging', label: 'Hanging Weight' },
    { value: 'finished', label: 'Finished Weight' },
    { value: 'live', label: 'Live Weight' },
    { value: 'retail', label: 'Retail Cuts' },
  ],

  SEASONAL_AVAILABILITY: [
    { value: 'available-now', label: 'Available Now' },
    { value: 'spring', label: 'Spring (Mar-May)' },
    { value: 'summer', label: 'Summer (Jun-Aug)' },
    { value: 'fall', label: 'Fall (Sep-Nov)' },
    { value: 'winter', label: 'Winter (Dec-Feb)' },
    { value: 'pre-order', label: 'Available for Pre-order' },
  ],

  RADIUS_OPTIONS: [
    { value: '10', label: '10 miles' },
    { value: '25', label: '25 miles' },
    { value: '50', label: '50 miles' },
    { value: '100', label: '100 miles' },
    { value: '250', label: '250 miles' },
  ],
} as const;