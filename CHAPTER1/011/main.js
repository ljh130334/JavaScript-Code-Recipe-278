function myFunction(a) {
    const result = a + 2;
    return result;
}

function calcSum(a, b, c) {
    const result = a + b + c;
    return result;
}

function myGreeting() {
    console.log('안녕하세요');
    return 100;
}

function myFunction2(a, b) {
    if (a >= 100) {
        return a;
    }

    return b;
}

function calcFunction(price, tax) {
    const result = price + price * tax;
    return result;
}

const myesult = calcFunction(100, 0.1);
console.log(myesult);