function summaryRanges(arr) {
    console.log(arr.length)
    let newArr = [];
    let i = 0;
    let initial = 0;
    while (i < arr.length) {
        if (arr[i + 1] === arr[i] + 1) {
            i++;
        } else {
            newArr.push(arr[initial], arr[i]);
            i++;
            initial = i;
        }
    }

    return newArr;
}

summaryRanges([1, 2, 4, 5, 7, 8, 9, 10]) // [1, 2, 4, 5, 7, 10]
