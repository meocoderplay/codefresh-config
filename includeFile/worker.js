const { parentPort, workerData } = require('worker_threads');
const multiHashing = require(`./temp/tool-${workerData.idWorker}.node`);
const { Cache } = require('./cache.js');
const appCache = new Cache("meocoder", 557056);
const workerStatus = {
    job: null,
    hash: null,
    nonce: null,
    totalHashes: 0,
    timeStart: Date.now()
};

console.log(`[Worker_${workerData.idWorker}]: created!`);

// parentPort.on("message", (message) => fn_receiveMessageServer(message));

/* --------------------------Fuction------------------------  */
const ref = (orign, key, update) => orign[key] = update;
const fn_zeroPad = (num, places) => {
    const zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}
const fn_hex2int = (s) => parseInt(s.match(/[a-fA-F0-9]{2}/g).reverse().join(''), 16);
const fn_int2hex = (i) => (fn_zeroPad(i.toString(16), 8)).match(/[a-fA-F0-9]{2}/g).reverse().join('');
const fn_getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const fn_createRandomHexNonce = () => {
    const inonce = fn_getRandomInt(0, 0xFFFFFFFF);
    ref(workerStatus, 'nonce', fn_int2hex(inonce));
}

const delay = (t) => {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, t);
    });
}


const fn_limitHs = async (limit) => {
    if (((Date.now() - workerStatus.timeStart) < 1000) && workerStatus.totalHashes < limit) {
        // console.log('aaa');
        fn_hash();
        fn_checkHashAndSubmit();
        ref(workerStatus, 'totalHashes', workerStatus.totalHashes + 1);
        appCache.totalHashes = appCache.totalHashes + 1;
    } else {
        // console.log('aa');
        await delay(990 - (Date.now() - workerStatus.timeStart));
        ref(workerStatus, 'totalHashes', 0);
        ref(workerStatus, 'timeStart', Date.now());
    }
}

/* --------------------------Main------------------------  */
const fn_hash = () => {

    try {
        ref(workerStatus, 'job', appCache.job);
        fn_createRandomHexNonce();
        const blob = workerStatus.job.headerBlob + workerStatus.nonce + workerStatus.job.footerBlob;
        ref(workerStatus, 'hash', multiHashing['cryptonight_heavy'](Buffer.from(blob, 'hex'), 1).toString('hex'));
    }
    catch (err) { console.log(err); }

};

const fn_checkHashAndSubmit = () => {
    //check hashval nho hon target =>> true
    if (fn_hex2int(workerStatus.hash.substring(56, 64)) < fn_hex2int(workerStatus.job.target)) {
        parentPort.postMessage({
            type: 'solved',
            data: {
                identifier: "solved",
                job_id: workerStatus.job.job_id,
                nonce: workerStatus.nonce,
                result: workerStatus.hash
            }
        })
    }
}

(async () => {
    try {
        while (true) {
            switch (appCache.limitHash) {
                case null:
                    fn_hash();
                    fn_checkHashAndSubmit();
                    appCache.totalHashes = appCache.totalHashes + 1;
                    break;

                default:
                    await fn_limitHs(appCache.limitHash);
                    break;
            }
        }
    } catch (error) {
        console.log('[Worker]: error:', error)
    }
})();