function chiaMangThanhMangCon(mangGoc, n) {
    let ketQua = [];

    for (let i = 0; i < mangGoc.length; i += n) {
        let mangCon = [];
        for (let j = i; j < i + n && j < mangGoc.length; j++) {
            mangCon.push(mangGoc[j]);
        }
        ketQua.push(mangCon);
    }

    return ketQua;
}

let mang = [1, 2, 3, 4, 5, 6, 7, 8];
let n = 3;

let ketQua = chiaMangThanhMangCon(mang, n);
console.log(ketQua);