// https://leetcode.com/problems/two-sum/description/

function arrayTwoSum(arr, target) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === target) {
                result.push(i)
                result.push(j)
            }
        }
    }

    return result;
}

arrayTwoSum([3, 3], 6)