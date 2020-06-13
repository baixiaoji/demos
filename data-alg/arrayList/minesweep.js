function minesweep(m, n, p) {
    // create gridArray
    const gridArray = []
    for(let i = 0; i < m + 2; i++) {
        const row = new Array(n + 2);
        gridArray.push(row);
    }
    // set mine 
    for(let i = 1; i < m + 1; i++) {
        for(let j = 1; j < n + 1; j++) {
            const random = Math.random();
            const currentValue = random < p ? -1 : 0;

            gridArray[i][j] = currentValue;
        }
    }
    
    // log mine map 
    // * mark is mine
    // . mark is safe
    for(let i = 1; i< m +1; i++) {
        let str = '';
        for(let j = 1; j < n + 1; j++) {
            str += gridArray[i][j] === -1 ? '*' : '.'
        }
        console.log(str);
    }
    // set safe around mine number
    for(let i = 1; i < m + 1; i++) {
        for(let j = 1; j < n +1; j++) {
            if (gridArray[i][j] !== -1) {
                for(let ii = i - 1; ii < i + 2; ii++) {
                    for(let jj = j - 1; jj < j + 2; jj++) {
                        if (gridArray[ii][jj] === -1) {
                            gridArray[i][j] += 1;
                        }
                    }
                }
            }
        }
    }

    // log finally mine map
    // for(let i = 1; i < m + 1; i++) {
    //     let str = '';
    //     for(let j = 1; j < n + 1; j++) {
    //         str += gridArray[i][j]
    //     }
    //     console.log(str);
    // }
    
    // get finall mine map
    const finalMineArray = gridArray.filter(arr => arr.some(item => /\d/.test(item)))
                                    .map(arr => arr.filter((item, index) => index >= 1 && index <= n));
    console.log(finalMineArray);
}

minesweep(5,4, 0.3);