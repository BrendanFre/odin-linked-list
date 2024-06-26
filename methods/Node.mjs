const Node = (newValue = null, next = null) => {
    const value = newValue;
    const nextNode = next;
    return { value, nextNode }
}

export default Node