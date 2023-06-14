function func(a) {
    return a + 2;
}

//Example: myEach(strArr, console.log);


function double(a) {
    return a * 2;
}

//let doubleNumArr = myMap(numArr, double);
//console.log(doubleNumArr);



function isEven(a) { return a % 2 === 0; }

let isEvenArr = myFilter(numArr, isEven);
console.log(isEvenArr);



function isZero(a) { if (a === 0) {return true;} }

console.log(mySome(numArr, isZero));



function myFunc(total, num) {
    return total - num;
}

function mySum(a, b) {
    return a + b;
}

console.log(myReduce(numArr, mySum, 0));


console.log(myIncludes(numArr, 18));


console.log(myIndexOf(numArr, 2));


console.log(strArr)
console.log(strArr.length)
console.log(myPush(strArr, 'f'))
console.log(strArr)


console.log(myUnshift(numArr, 50));



var objArr = [];
var i = 0;

for(var key in obj) {
    objArr[i] = key;
    i++;
}

console.log()
