function funcArr(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            count++;
        }
    }
    return count;
}

let arr = [4, 5.4, 6, -2];

console.log(funcArr(arr));