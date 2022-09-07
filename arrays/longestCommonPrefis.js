function longestCommonPrefix(arr) {
    let initialStr = arr[0];
    
    for(let i=0;i<arr.length;i++) {
        // for(let j=1;j<arr[i.length];j++) {
        //     console.log(arr[i][j])
        // }
        console.log(arr[i])
    }

    return initialStr
}

longestCommonPrefix(["flower","flow","flight"]) // fl