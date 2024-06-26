import Contains from "./Contains.mjs"

const Find = (searchTerm, selectedNode, index) => {
    if (!Contains(searchTerm, selectedNode)) {
        return 'Not present in list'
    } else if (selectedNode.value == searchTerm) {
        return index
    } else {
        return Find(searchTerm, selectedNode.nextNode, index + 1)
    }
}

export default Find