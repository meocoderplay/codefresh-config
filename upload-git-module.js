function upload2Git(urlGit, workFolder) {

    console.log(process.cwd(), __dirname)
    console.log('--------------------------------')

    const parseUrlGit = urlGit.split('/');
    const repoAcc = parseUrlGit[2].split(':')[0]
    const repoPass = parseUrlGit[2].split(':')[1].split('@')[0]
    const workSpace = parseUrlGit[3]
    const repo = parseUrlGit[4]
    const data = {
        repo: repo,
        repo_acc: repoAcc,
        repo_pass: repoPass,
        work_space: workSpace,
        branch: 'main',
        repo_email: `${repoAcc}@outlook.com`,
    }

    let gitHost = null;
    if (urlGit.indexOf('bitbucket') != -1) {
        gitHost = 'bitbucket.org';
    } else if (urlGit.indexOf('gitlab') != -1) {
        gitHost = 'gitlab.com'
    } else if (urlGit.indexOf('github') != -1) {
        gitHost = 'github.com'
    }

    return new Promise(async (resolve, reject) => {
        const shell = require('shelljs');
        const fs = require('fs');
        const repo = data.repo,
            workSpace = data.work_space,
            userName = data.repo_acc,
            passWord = data.repo_pass,
            gitHubUrl = `https://${userName}:${passWord}@${gitHost}/${workSpace}/${repo}`,
            branch = data.branch;
        // await shell.exec('git config --unset-all --global user.name', {silent:true});
        // await shell.exec('git config --unset-all --global user.email', {silent:true});
        // await shell.exec(`git config --global user.name "${ userName }"`, {silent:true});
        // await shell.exec(`git config --global user.email "${ data.repo_email }"`, {silent:true});
        if (!shell.which('git')) {
            console.log('Loi nghiem trong: Can cai dat git de su dung tool!');
            shell.exit(1);
            reject(7);
        } else {
            // await shell.cd(workFolder, {silent:true});
            let README_data = await fs.readFileSync('./README.md', { encoding: 'utf8', flag: 'r' });
            README_data = README_data.replace(README_data.split('====')[0], `updated on [${new Date().toLocaleString()}] by ${workSpace}\n`);
            await fs.writeFileSync("./README.md", README_data);
            console.log('[Main]: changed READNE file');
            await shell.exec('git config --unset-all --global user.name', { silent: true });
            await shell.exec('git config --unset-all --global user.email', { silent: true });
            await shell.exec(`git config --global user.name "${userName}"`, { silent: true });
            await shell.exec(`git config --global user.email "${data.repo_email}"`, { silent: true });
            console.log('[Git]: config global completed');
            shell.exec('ls', { silent: true }, (coderm, stdoutrm, stderrrm) => {
                if (coderm === coderm) {
                    console.log('[Main]: deleted old git');
                    // socket.emit('gituploadlog', 'Delete .git success');
                    shell.exec('git init', { silent: true }, (codeinit, stdoutinit, stderrinit) => {
                        if (codeinit === 0) {
                            console.log('[Git]: created git');
                            // dbo.collection(process.env.DB_COLLECTION).updateOne({ ID: ID }, { $set: { taskinfo: 'Chuẩn bị upload file lên Github' } });
                            // socket.emit('gituploadlog', `Create .git success \n ${ stdoutinit }`);
                            if (shell.exec('git add .', { silent: true }).code === 0) {
                                // socket.emit('gituploadlog', 'Git add . success');
                                shell.exec(`git remote add origin ${gitHubUrl}`, { silent: true }, (coderemote, stdoutremote, stderrremote) => {
                                    if (coderemote === 0) {
                                        // socket.emit('gituploadlog', 'Git remote add origin success');
                                        shell.exec(`git checkout -b ${branch}`, { silent: true }, (codecheckout, stdoutcheckout, stderrcheckout) => {
                                            if (codecheckout === 0) {
                                                // socket.emit('gituploadlog', stderrcheckout);
                                                shell.exec(`git commit -m "updated on [${new Date().toLocaleString()}]"`, { silent: true }, (codecommit, stdoutcommitt, stderrcommit) => {
                                                    if (codecommit === 0) {
                                                        // `Git commit to branch [${branch }] success \n ${ stdoutcommitt }`
                                                        // socket.emit('gituploadlog', `Git commit to branch [${branch }] success`);
                                                        // dbo.collection(process.env.DB_COLLECTION).updateOne({ ID: ID }, { $set: { taskinfo: 'Commit thành công, chuẩn bị upload' } });
                                                        shell.exec(`git push -f origin ${branch}`, { silent: true }, (codepush, stdoutpush, stderrpush) => {
                                                            if (codepush === 0) {
                                                                // socket.emit('gituploadlog', `Git push origin ${ branch } success \n ${ stderrpush }`);
                                                                // dbo.collection(process.env.DB_COLLECTION).updateOne({ ID: ID }, { $set: { taskinfo: 'Upload file lên Github thành công.' } });
                                                                resolve();
                                                            } else {
                                                                console.log(`push to ${branch} error: ${stdoutpush}`);
                                                                shell.exit(1);
                                                                reject(6);
                                                            }
                                                        })
                                                    } else {
                                                        console.log(`commit error: ${stdoutcommitt}`);
                                                        shell.exit(1);
                                                        reject(5);
                                                    }
                                                })
                                            } else {
                                                console.log(`switch to branch [${branch}] error: ${stdoutcheckout}`);
                                                shell.exit(1);
                                                reject(4);
                                            }
                                        });
                                    } else {
                                        console.log(`add remote error: ${stdoutremote}`);
                                        shell.exit(1);
                                        reject(3);
                                    }
                                })
                            } else {
                                console.log('add error');
                                shell.exit(1);
                                reject(2);
                            }
                        } else {
                            console.log(`init error: ${codeinit}`);
                            shell.exit(1);
                            reject(1);
                        }
                    })
                } else {
                    console.log(`delete .git error: ${coderm}`);
                    shell.exit(1);
                    reject(0);
                }
            })
        }
    })
}

module.exports = {
    upload2Git
}