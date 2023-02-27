

const bruce = {
    name: 'Bruce Wayne',
    salary: 50000,
    study: 'CSE',
    subjects: ['operating system', 'Data Structure', 'Math for Computing'],
    exam: function () {
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


const exam = bruce.exam();
// console.log(exam)

const referredExam = bruce.improveExam('Data Structure');
// console.log(referredExam);

const remainingSalary = bruce.treatDey(10000);
console.log(remainingSalary)