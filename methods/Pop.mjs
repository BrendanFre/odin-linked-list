const Pop = (currentNode) => {
    if (currentNode.nextNode.nextNode == null) {
        return currentNode.nextNode = null
    } else {
        return Pop(currentNode.nextNode)
    }
}

export default Pop