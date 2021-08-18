exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let findMin = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < findMin) {
            findMin = array[i];
        }
    }
    return findMin;
}


exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let findMax = array[0];
    for (let i = 0; i < array.length; i++) {
        if (findMax < array[i]) {
            findMax = array[i];
        }
    }
    return findMax;
}

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let avg = sum / array.length;
    return avg;
}