export const RemoveAt = (index, currentNode, previousNode = '') => {
    if (index == 0) {
        previousNode.nextNode = currentNode.nextNode
    } else RemoveAt(index - 1, currentNode.nextNode, currentNode)
};
