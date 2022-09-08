function matrixRotation(matrix) {
    for (let i = 0; i < Math.round(matrix.length / 2); i++) {
        let first = i;
        let last = matrix.length - 1 - i;
        for (let j = first; j < last; j++) {
            let offset = j - first;
            let top = matrix[first][j]
            matrix[first][j] = matrix[last - offset][first]
            matrix[last - offset][first] = matrix[last][last - offset]
            matrix[last][last - offset] = matrix[j][last]
            matrix[j][last] = top
        }
        // for(let j=0;j<matrix[i].length;j++) {
        //     console.log(j)
        //     matrix[i][j] = matrixCopy[i+1][j]
        //     console.log(j)
        // }
    }

    return matrix
}

matrixRotation([[0, 1], [2, 3]])