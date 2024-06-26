const At = (index, currentNode) => {
    if (index == 1) {
        return currentNode.value
    } else return At(index - 1, currentNode.nextNode)
}

export default At