@param price 가격
@param tax 세율

function calcFunction(price, tax = 0.8) {
    const result = price + price * tax;
    return result;
}

const result1 = calcFunction(100);
console.log(result1);

const result2 = calcFunction(100, 0.1);
console.log(result2);