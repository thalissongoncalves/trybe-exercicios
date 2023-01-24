const techList = (arrayTech, name) => {
    const order = arrayTech.sort();
    const techList = [];
    if(arrayTech.length === 0) {
        return 'Vazio!';
    }
    for(let index = 0; index < order.length; index += 1) {
        techList.push({
            tech: order[index],
            name,
        })
    }
    
    return techList;
}

module.exports = techList;