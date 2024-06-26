const Tail = (currentNode) => {
    if (currentNode.nextNode == null) {
        return currentNode.value
    } else {
        return Tail(currentNode.nextNode)
    }
}

export default Tail