import Append from "./methods/Append.mjs";

const node = (newValue = null, next = null) => {
    const value = newValue;
    const nextNode = next;
    return { value, nextNode }
}


const linkedList = (firstValue) => {
    let start = node(firstValue)
    const toConsole = (list = start) => {
        console.log(list);
    }
    // const append = (value, list = start) => {
    //     if (list.value == null) {
    //         list.value = value
    //     } else if (list.nextNode == null) {
    //         list.nextNode = node(value)
    //     } else append(value, list.nextNode)
    // }
    const append = (value, list = start) => {
        Append(value, list)
    }

    const prePend = (value) => {
        if (start.value == null) {
            start.value = value;
        } else {
            start.nextNode = node(start.value, start.nextNode)
            start.value = value
        }
    }

    const size = (node = start) => {
        let count = 1
        if (node.nextNode == null) {
            return 1
        } else
            return count += size(node.nextNode)
    }

    const head = () => {
        return start.value
    }

    const tail = (currentNode = start) => {
        if (currentNode.nextNode == null) {
            return currentNode.value
        } else {
            return tail(currentNode.nextNode)
        }
    }
    const pop = (currentNode = start) => {
        if (currentNode.nextNode.nextNode == null) {
            return currentNode.nextNode = null
        } else {
            console.log(`Current selected node ${currentNode.nextNode.value}`);
            return pop(currentNode.nextNode)
        }
    }

    const at = (index, currentNode = start) => {
        if (index == 1) {
            return currentNode.value
        } else return at(index - 1, currentNode.nextNode)
    }

    const contains = (searchTerm, currentNode = start) => {
        if (currentNode.value == searchTerm) {
            return true
        } else if (currentNode.nextNode == null) {
            return false
        } else return contains(searchTerm, currentNode.nextNode)
    }

    const find = (searchTerm, currentNode = start, index = 0) => {
        if (!contains(searchTerm)) {
            return 'Not present in list'
        } else if (currentNode.value == searchTerm) {
            return index
        } else {
            return find(searchTerm, currentNode.nextNode, index + 1)
        }
    }
    const toString = (currentNode = start, theString = '') => {
        if (currentNode.nextNode == null) {
            theString = currentNode.value
            return `${theString}`
        } else {
            return `(${currentNode.value}) -> ${toString(currentNode.nextNode, currentNode.value)}`
        }
    }
    return { start, append, prePend, size, head, toConsole, tail, at, pop, contains, find, toString }
}




const newList = linkedList('first')
newList.append('Happy Place')
newList.append('Trees')
newList.append('Seven')

newList.toConsole()

// Prepend Check
newList.prePend('New Beginnings')

newList.toConsole()
console.log(`First item is now ${newList.head()}`);
console.log(`Last item is now ${newList.tail()}`);
console.log(`Size of list is ${newList.size()}`);

console.log(newList.at(3));
newList.pop()
console.log(`Last item is now ${newList.tail()}`);
console.log(`Trees is contained in list = ${newList.contains('Trees')}`);
console.log(`Toop is contained in list = ${newList.contains('Toop')}`);
console.log(`Search function, should return false = ${newList.find('limes')}`);
console.log(`Happy Place is contained in list = ${newList.contains('Happy Place')}`);
console.log(`Search function, should return 2 = ${newList.find('Happy Place')}`);
console.log(newList.toString());