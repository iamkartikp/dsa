function zeroMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                return returnZeroMatrix(matrix)
            }
        }
    }

    return matrix;
}

function returnZeroMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = 0
        }
    }
    return matrix;
}

zeroMatrix([[1, 2, 3], [2, 0, 4]])