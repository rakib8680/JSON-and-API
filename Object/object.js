
// 1 (important) 

const student = {
    name: 'rakib',
    lastName: 'khan',
    profession: 'student',
    salary: 343553,
    studying: function () {
        console.log('he study all the day');
    },
    hobby: 'watching football'
};

// console.log(student);
// student.studying();


//2 Object Construtor  (optional)
const person = new Object();
// console.log(person)


// 3 Object create method (optional)
const rohossho = Object.create(student);
//  console.log(rohossho.profession);


// class  (important)
class details {
    name = 'batman';
    age = '';
    roll = 5335;
    address = 'feni chicago';
    constructor(age) {
        this.age = age
    };
};

const person1 = new details(44);
console.log(person1)