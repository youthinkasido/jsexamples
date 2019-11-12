// var students = [
//     { id: 14, studentName: 'Billy' },
//     { id: 22, studentName: 'Jimbo' },
//     { id: 45, studentName: 'Raphael' },
// ]

// function getStudentName(studentId) {
//     for (let student of students) {
//         if (student.id === studentId) return student.studentName;
//     }
// }

// console.log(getStudentName(14))


// var text = 'outside';
// function logIt() {
//     console.log(text);
//     var text = 'inside';
// };
// logIt();



// prototypal inheritance 

let animal = {
    eats: true,
    walks() {
        console.log('animal is walking')
    }
}

let rabit = {
    jumps: true,
    __proto__: animal
}

rabit.walks = function () {
    console.log('rabit is walking')
}

console.log(rabit.walks())