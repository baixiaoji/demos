function _fetchWithTimeout(fetchPromise, time) {
    let reject_fn = null;

    const abortPromise = new Promise((x ,reject) => {
        reject_fn = () => { reject(`request was time out`) };
    })

    const racePromise = Promise.race([fetchPromise, abortPromise]);

    setTimeout(() => {
        reject_fn()
    }, time);


    return racePromise;
}