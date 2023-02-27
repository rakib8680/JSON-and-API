

const mobile = { brand: 'huawei', model: 'mate 40 pro', expensive: true, price: 70000 };
// notice : for of cannot be used with  Objects

// first option to loop through an Object  (not important)!
const keys = Object.keys(mobile);
for (const key of keys) {
    // console.log(key, mobile[key]);
};


// we will use this method (important!!)
// for in loop 
for(const key in mobile){
    console.log(key, mobile[key]);
};

