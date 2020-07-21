// console.log("Arrays!")

// SPLIT
// const bestFriend = "Sally,Frodo,Panda";
// const bestFriendArray = bestFriend.split(",");

// console.log("My best friend in array format", bestFriendArray)

// JOIN
// const array2 = ["cow", "dog", "cat"];
// const string = array2.join(", ")

// console.log(string.split(", "))

//POP
const animals = ["dog", "cat"];

// const lastAnimal = animals.pop();
// console.log("animals", animals);
// console.log ("last animal", lastAnimal)

// console.log (typeof lastAnimal)

// const first = animals.shift()
// console.log(first)
// console.log("animals", animals)

// animals.unshift("bear");
// console.log(animals)
// animals.push("cow")
// console.log(animals)

// const animals = ["dog", "cat"];

// const arrayAndIndex = (array, index) => {
//     return array[index];
// }
// console.log(arrayAndIndex(animals, 1))

const findGreg = (arr) => {
    return arr.indexOf("Greg") >= 0 ? true : false;
}

console.log(findGreg(['a', 'b', 'Greg']))