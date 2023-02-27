

const first = { a: 2, b: 3, c: 4 };
const second = { a: 2, b: 3, c: 4 };
const third = second;

if (first === second) {
    // console.log("both are same");
}
else {
    // console.log('DIfferent');
}


// !!!!!!!! do not use this method to compare OBJECTS or ARRAYS (fokira solution xD)!!!!!!!
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
if (firstString === secondString) {
    console.log('Same');
}
else {
    console.log('different');
};


