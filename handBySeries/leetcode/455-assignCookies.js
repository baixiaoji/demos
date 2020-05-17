function assgin_cookies(wantArr, cookieArr) {
    const sort = function (a,b) {
        return a - b;
    }
    wantArr.sort(sort);
    cookieArr.sort(sort);

    let i = 0;
    for (let j = 0; i < array.length && j < cookieArr.length; j++) {
        if (wantArr[i] <= cookieArr[j]) {
            i++;
        }
    }

    return i;
}