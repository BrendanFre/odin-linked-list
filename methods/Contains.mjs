const Contains = (searchTerm, currentNode) => {
    if (currentNode.value == searchTerm) {
        return true
    } else if (currentNode.nextNode == null) {
        return false
    } else return Contains(searchTerm, currentNode.nextNode)
}

export default Contains