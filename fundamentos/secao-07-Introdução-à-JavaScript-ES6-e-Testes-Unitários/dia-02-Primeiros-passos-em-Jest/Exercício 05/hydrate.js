const hydrate = (string) => {
    const numString = string.replace(/([^\d])+/gim, '');
    const transformArray = numString;
    const array = [];
    for (let index = 0; index < transformArray.length; index += 1) {
        array.push(parseInt(transformArray[index]));
    }
    let sum = 0;
    for (let index = 0; index < array.length; index += 1) {
        sum += array[index];
    }
    if (sum === 1) {
        return `${sum} copo de água`;
    }
    return `${sum} copos de água`
}

module.exports = hydrate;