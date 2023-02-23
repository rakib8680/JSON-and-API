

const shop = {
    owner: 'Rakib Khan',
    address: {
        street: 'SSK Road',
        city: 'Feni',
        country: 'Bangladesh'
    },
    products: ['Phone', 'Tablet', 'Laptop', 'Television'],
    revenue: 30000,
    isOpen: true,
    isNew: false
};

// console.log(shop);

// stringify makes a whole object into String 
const newShop = JSON.stringify(shop); 
console.log(newShop);

// parse makes an Json.String to an actual object 
const oldShop = JSON.parse(newShop);
console.log(oldShop);