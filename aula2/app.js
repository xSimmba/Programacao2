

const resultMultiple = (a, b) => {
    return [a, b];
}

let a = resultMultiple(1,2)[0];
let b = resultMultiple(1,2)[1];

console.log(a);
console.log(b);

let obj = {
    a: 1,
    b: 2,
    c: ()=>{
        return 2;
        },
    d: [813, "ee"],
    f: {
        d: "22"
    }
}


class test {
    a = 1;
    b = 2;
    constructor() {

    }
}