const ToString = (currentNode, theString) => {
    if (currentNode.nextNode == null) {
        theString = currentNode.value
        return `${theString}`
    } else {
        return `(${currentNode.value}) -> ${ToString(currentNode.nextNode, currentNode.value)}`
    }
}

export default ToString