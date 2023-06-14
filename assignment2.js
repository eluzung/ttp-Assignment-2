var numArr = [1, 2, 3, 4, 5, 2, 7, 10, 3]

var strArr = ['a', 'b', 'c', 'd', 'e'];

//forEach

function myEach(arr, callbackFunc) {
    for(var i = 0; i < arr.length; i++) {
        callbackFunc(arr[i]);
    }
}

//map

function myMap(arr, callbackFunc) {
    var moddedArr = [];

    for(var i = 0; i < arr.length; i++) {
        moddedArr[i] = callbackFunc(arr[i]);
    }

    return moddedArr;
}

//filter

function myFilter(arr, callbackFunc) {
    var filteredArr = [];
    var filterIndex = 0;

    for(var i = 0; i < arr.length; i++) {

        if(callbackFunc(arr[i])) {
            filteredArr[filterIndex] = arr[i];
            filterIndex++;
        }
    }

    return filteredArr;
}

//some

function mySome(arr, callbackFunc) {
    for(var i = 0; i < arr.length; i++) {
        if(callbackFunc(arr[i])) {
            return true;
        }
    }

    return false;
}

//every

function myEvery(arr, callbackFunc) {
    for(var i = 0; i < arr.length; i++) {
        if(!callbackFunc(arr[i])) {
            return false;
        }
    }

    return true;
}

//reduce

function myReduce(arr, callbackFunc, initVal) {
    var acc = initVal;

    for(var i = 0; i < arr.length; i++) {
        acc = callbackFunc(acc, arr[i]);
    }

    return acc;
}

//includes

function myIncludes(arr, target) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return true;
        }
    }

    return false;
}

//indexOf

function myIndexOf(arr, target) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }

    return -1;
}

//push

function myPush(arr, elementToAdd) {
    arr[arr.length] = elementToAdd;
    return arr.length;
}

//lastIndexOf

function myUnshift(arr, target) {
    for(var i = arr.length-1; i >= 0; i--) {
        if(arr[i] === target) {
            return i;
        }
    }

    return -1;
}

const student = {
    firstname: 'John',
    lastname: 'Doe',
    age: 22,
    gender: 'male'
  };

//Object.keys

function grabKeys(obj) {
    var objArr = [];
    var index = 0;
    
    for(var key in obj) {
        objArr[index] = key;
        index++;
    }
    
    return objArr;

}

//Object.values

function grabValues(obj) {
    var objArr = [];
    var index = 0;
    
    for(var key in obj) {
        objArr[index] = obj[key];
        index++;
    }
    
    return objArr;
}