import LinkedList from "./methods/LinkedList.mjs";
import FamousCats from "./data/FamousCats.mjs";
const catList = LinkedList('Tom')

console.log(catList.toString());

FamousCats.forEach(cat => {
    catList.append(cat)

});

catList.append('Felix')

console.log(catList.toString());

catList.prepend('Salem')

console.log(catList.toString());

console.log(`Size of list: ${catList.size()}`);

console.log(catList.head());

console.log(catList.tail());

catList.pop()

console.log(catList.toString());

console.log(`${catList.at(5)} is the fifth item in the linked list.`);
console.log(`Does Goofy exist in this list? ${catList.contains('Goofy')}`);
console.log(`Does Tom exist in this list? ${catList.contains('Tom')}`);

console.log(`If Tom exists in the list, which position? ${catList.find('Tom')}`);
console.log(catList.toString());

catList.insertAt('The Cat in a Hat', 2)

console.log(catList.toString());

catList.insertAt('Sylvester', 0)

console.log(catList.toString());

catList.removeAt(3)

console.log(catList.toString());
