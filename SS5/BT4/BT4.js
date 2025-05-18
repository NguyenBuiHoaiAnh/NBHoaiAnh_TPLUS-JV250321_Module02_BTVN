let num = prompt("Nhập vào dãy số bất kỳ");

let arr = num.split("");

console.log(arr);

let max = arr[0];

for (i = 0; i < arr.length; i++) {
    if (max < arr[i]){
        max = num[i];
    }
}

console.log(max);