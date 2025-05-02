let n = +prompt("Nhập vào một số nguyên bất kỳ");

let isPrime = true;

if (n === 1){
    console.log("1 không phải số ng tố");
} else if (n > 1){
    for (let i = 2; i <= n/2;i++){
        if (n % i === 0){
            isPrime = false;
            break;
        }
    }
}

if (isPrime){
    console.log(`${n} là số ng tố`);
} else {
    console.log(`${n} không phải là số ng tố`);
}