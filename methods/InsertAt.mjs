import Node from "./Node.mjs";

export const InsertAt = (value, index, selectedNode, previousNode) => {
    const newNode = Node(value, { value: selectedNode.value, nextNode: selectedNode.nextNode })
    if (index == 0 && previousNode == null) {
        console.log(newNode.nextNode);
        // selectedNode.nextNode = 
        selectedNode.value = value
    } else if (index == 0) {
        newNode.nextNode = Node(selectedNode.value, selectedNode.nextNode)
        previousNode.nextNode = newNode
    } else { InsertAt(value, index - 1, selectedNode.nextNode, selectedNode) }
};
