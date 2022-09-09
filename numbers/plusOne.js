// increment array number by 1;

function plusOne(arr) {
    // return [arr[0], arr[1], arr[2]+1]
    // return [1,2,4]
    if (arr[arr.length - 1] === 9) {
        arr[arr.length - 1] = 0;
        arr[arr.length - 2] = arr[arr.length - 2] + 1
    } else {
        arr[arr.length - 1] = arr[arr.length - 1] + 1
    }
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[arr.length-1] === 9) {
    //         newArr.push()
    //     }
    // }
    return arr;
}

plusOne([1, 2, 9])