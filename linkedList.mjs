const node = (newValue = null, next = null) => {
    const value = newValue;
    const nextNode = next;
    return {value, nextNode}
}


const linkedList = (firstValue) => {
    let start = node(firstValue)
    const toConsole = (list=start) => {
        console.log(list);
    }
    const append = (value, list = start) => {
        if(list.value == null) {
            list.value = value
        } else if (list.nextNode == null) {
            list.nextNode = node(value)
        } else append(value, list.nextNode)
    }

    const prePend = (value)=> {
        if(start.value == null) {
            start.value = value
        } else {
            start.nextNode = node(start.value, start.nextNode)
            start.value = value
        }
    }

    const size = (node=start) => {
        let count = 1
        if(node.nextNode == null) {
            return 1
        } else 
        return count +=size(node.nextNode)
    }

    const head = () => {
        return start.value
    }

    const tail = (currentNode = start) => {
        if(currentNode.nextNode == null){
        return currentNode.value
    } else {
         return tail(currentNode.nextNode)
    }}
    return {start, append, prePend, size, head, toConsole, tail}
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
console.log(`Size of list is ${newList.size()}`)