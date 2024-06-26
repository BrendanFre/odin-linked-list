import Append from "./Append.mjs";
import At from "./At.mjs";
import Contains from "./Contains.mjs";
import Find from "./Find.mjs";
import { InsertAt } from "./InsertAt.mjs";
import Node from "./Node.mjs";
import Pop from "./Pop.mjs";
import Prepend from "./Prepend.mjs";
import Size from "./Size.mjs";
import Tail from "./Tail.mjs";
import ToString from "./ToString.mjs";
import { RemoveAt } from "./RemoveAt.mjs";

const LinkedList = (firstValue) => {
    let start = Node(firstValue)

    const toConsole = (list = start) => {
        console.log(list);
    }

    const append = (value, list = start) => {
        Append(value, list)
    }

    const prepend = (value, list = start) => {
        Prepend(value, list)
    }

    const size = (node = start) => {
        return Size(node)
    }

    const head = () => {
        return start.value
    }

    const tail = (currentNode = start) => {
        return Tail(currentNode)
    }
    const pop = (currentNode = start) => {
        Pop(currentNode)
    }

    const at = (index, currentNode = start) => {
        return At(index, currentNode)
    }

    const contains = (searchTerm, currentNode = start) => {
        return Contains(searchTerm, currentNode)
    }

    const find = (searchTerm, currentNode = start, index = 0) => {
        return Find(searchTerm, currentNode, index)
    }
    const toString = (currentNode = start, theString = '') => {
        return ToString(currentNode, theString)
    }

    const insertAt = (value, index, list = start) => {
        InsertAt(value, index, list)
    }

    const removeAt = (index, list = start) => {
        RemoveAt(index, list)
    }
    return { start, removeAt, insertAt, append, prepend, size, head, toConsole, tail, at, pop, contains, find, toString }
}

export default LinkedList