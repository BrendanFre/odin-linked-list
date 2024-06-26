const Size = (node) => {
    let count = 1
    if (node.nextNode == null) {
        return 1
    } else
        return count += Size(node.nextNode)
}

export default Size