import Node from './Node.mjs';

const Append = (value, list) => {
    if (list.value == null) {
        list.value = value
    } else if (list.nextNode == null) {
        list.nextNode = Node(value)
    } else Append(value, list.nextNode)
}

export default Append