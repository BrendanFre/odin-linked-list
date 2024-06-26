import Node from "./Node.mjs";

const Prepend = (value, start) => {
    if (start.value == null) {
        start.value = value;
    } else {
        start.nextNode = Node(start.value, start.nextNode)
        start.value = value
    }
}

export default Prepend