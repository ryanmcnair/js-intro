// console.log("functions")

const nuggetizer = (animal) => {
    return `processed ${animal}`;
}

console.log(nuggetizer('pig'))
console.log(nuggetizer('cheeze'))
console.log(nuggetizer('tofu'))
console.log(nuggetizer('student'))

const myFunction = (number) => {
    return number + 42;
}

console.log(myFunction(12))

function oldAge (yearBorn) {
    return 2099 - yearBorn;
}

console.log (oldAge(1979))