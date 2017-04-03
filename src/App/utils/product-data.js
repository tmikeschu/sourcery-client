export const coffeeLocations = [
  { lat: 79, lng: 10, name: 'Coffee Grower', type: 'origin' },
  { lat: 7, lng: 19, name: 'Delivery Service', type: 'transport' },
  { lat: 8, lng: 52, name: 'Cafe', type: 'restaurant' } 
];

export const grapesLocations = [
  { lat: 79, lng: 10, name: 'Vinyard', type: 'origin' },
  { lat: 8, lng: 52, name: 'Winery', type: 'business' } 
];

export const goods = [ 
  { name: 'coffee', locations: coffeeLocations },
  { name: 'grapes', locations: grapesLocations },
];
