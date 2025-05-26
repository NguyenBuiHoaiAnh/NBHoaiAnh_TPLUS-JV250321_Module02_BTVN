function funcPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
let i = +prompt("Nhập đối số:")
if (funcPrime(i)) {
    console.log(i + " là số nguyên tố");
} else {
    console.log(i + " không phải là số nguyên tố");
}
