// Number => 1, 0, 0.5, -0.5
const num = 2;
console.log('num:', num + 10, typeof num);

// String => 'x', 'Wutchara'
const str = 'GG';
console.log('str:', str, typeof str);

// Boolean => true, false
const boo = true;
console.log('boo:', !boo, typeof boo);

// Null
const n = null;
console.log('n:', n, typeof n);

// Undefinded
const u = undefined;
console.log('u:', u, typeof u);

let uu;
console.log('uu:', uu, typeof uu);

// Object && Symbol
const obj = {
    name: 'ham',
    age: 17,
    o: {
        a: 1,
    }
};
console.log('obj:', obj, typeof obj);
console.log(obj.name);
console.log(obj.name2);
console.log(obj.o.a);

const sy = Symbol('a');
console.log('sy:', sy, typeof sy);
obj[sy] = 0;
console.log('obj[sy]:', obj[sy], typeof obj[sy]);
console.log('obj:', obj, typeof obj);
console.log(obj['name']);
console.log(obj['Symbol(a)']);

// Array
const arr = [2, 'HAM', false, -5, [5]];
console.log('arr:', arr, typeof arr);
console.log(arr[1], arr.length, arr[4][0]);

// Function
const sum = function(a, b) {
    console.log('---- SUM ----');
    return a + b;
};
const result = sum(1, 5);
console.log('result', result);

function sum2(a, b) {
    console.log('---- SUM2 ----');
    return a + b;
}

const sum3 = (a, b) => {
    console.log('---- SUM 3 ----');
    return a + b;
};