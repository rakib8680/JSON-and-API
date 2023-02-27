


// console.log(this)

const bruce = {
    name: 'Bruce Wayne',
    salary: 50000,
    study: 'CSE',
    subjects: ['operating system', 'Data Structure', 'Math for Computing'],
    exam: function () {
        console.log(this)
        return this.name + 'is participating in an exam';
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDey: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }

};

bruce.exam();