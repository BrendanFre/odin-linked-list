const node = (newValue = null, next = null) => {
    const value = newValue;
    const nextNode = next;
    return { value, nextNode }
}

export default node