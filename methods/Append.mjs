import node from './Node.mjs';

const Append = (value, list) => {
    if (list.value == null) {
        list.value = value
    } else if (list.nextNode == null) {
        list.nextNode = node(value)
    } else Append(value, list.nextNode)
}

export default Append