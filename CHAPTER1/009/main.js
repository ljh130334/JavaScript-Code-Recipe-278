console.log('사과' == '사과'); // true
console.log(10 < 30); // true
console.log(20 >= 30); // false

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
console.log(array1 == array2);  //false - 참조하는 곳이 다르다.

const array3 = [1, 2, 3];
const array4 = array3;
console.log(array3 == array4);  //true - 참조하는 곳이 같다.