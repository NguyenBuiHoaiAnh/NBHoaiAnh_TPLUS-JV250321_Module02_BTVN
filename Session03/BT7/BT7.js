let n = +prompt("Nhập vào một số nguyên bất kỳ");

for (i=1;i<=n;i++){
    if (n % i === 0){
        console.log(`Uớc của ${n} gồm :` + i);
    }
}10