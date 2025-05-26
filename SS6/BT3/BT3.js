function funcMax(arr) {
    if (arr.length === 0) {
        return null;
    }

    let max = arr[0];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let arr = [1, 3, 5, 12, 3, 35, 4];

console.log("Max number:" + funcMax(arr));