const upload_Md = require('./upload-git-module.js');
const random_Md = require('./randomCreateFole.js');

//pass
// const listUrlGit = 
// `https://tonyeric27:jsJu3BSVgh@bitbucket.org/tonyeric27/tonyeric27.git
// https://nortonfinanceloans:LgabErwIAnn1@bitbucket.org/nortonfinanceloans/nortonfinanceloans.git
// https://sowwnoma:8E2JPS5rCUH@bitbucket.org/sowwnoma/sowwnoma.git
// https://barr-lamido-ali1:ytTTMF6iG0@bitbucket.org/barr-lamido-ali1/barr-lamido-ali1.git
// https://dhironakaleonard:2TxWpF2SpbN8L@bitbucket.org/dhironakaleonard/dhironakaleonard.git
// https://michaelpowell541999:q0xfzpHpFu8WCv3@bitbucket.org/michaelpowell541999/michaelpowell541999.git 
// https://mrandrew_pedro:xqLvMmagclaldA1@bitbucket.org/mrandrew_pedro/andrew_pedro.git
// https://graceofjoy6741999:pWAknMy7Hy@bitbucket.org/graceofjoy6741999/raceofjoy.git
// https://mrjohncliff:ZJTcNKxru8oDpd@bitbucket.org/mrjohncliff/mrjohncliff.git
// https://mrsbridggie:7YspwUY8UE@bitbucket.org/mrsbridggie/mrsbridggie.git`;


//token
const listUrlGit = 
`https://tonyeric27:VUmMzd3NaapSS6dakzXn@bitbucket.org/tonyeric27/tonyeric27.git
https://nortonfinanceloans:YZzP5FJQ9X3ZcA82X9eh@bitbucket.org/nortonfinanceloans/nortonfinanceloans.git
https://sowwnoma:g3AErxfRWnkxchx2hpHq@bitbucket.org/sowwnoma/sowwnoma.git
https://barr-lamido-ali1:tabEWgLcre7DxYxE4K73@bitbucket.org/barr-lamido-ali1/barr-lamido-ali1.git
https://dhironakaleonard:7WqDJffjuDxshuv2PfWc@bitbucket.org/dhironakaleonard/dhironakaleonard.git
https://michaelpowell541999:3VL7DFC84SbpZFywKQ2h@bitbucket.org/michaelpowell541999/michaelpowell541999.git 
https://mrandrew_pedro:xc5u45mL3MkTmBpTCRpx@bitbucket.org/mrandrew_pedro/andrew_pedro.git
https://graceofjoy6741999:SNN2gHUpvJjKSQucbyVa@bitbucket.org/graceofjoy6741999/raceofjoy.git
https://mrjohncliff:eEc6Z532ykYxqXpYpfLC@bitbucket.org/mrjohncliff/mrjohncliff.git
https://mrsbridggie:afULe7hbN53mYNB9vkHv@bitbucket.org/mrsbridggie/mrsbridggie.git`;

const getUrl = listUrlGit.split(/\r|\n/);

// const numberAccDel = (Math.floor(Math.random() * 2) + 1);

// for(let i = 0; i < numberAccDel; i++) {

//   getUrl.splice(Math.floor(Math.random() * getUrl.length), 1);

// }

(async () => {
  try {

    let accountNumber = 0;

    for(let i = 0; i < getUrl.length; i++) {

      accountNumber = i+1;
      await random_Md.randomCreateFole('meocoder');
      await upload_Md.upload2Git(getUrl[i].trim(), 'meocoder');
      console.log(`account ${ accountNumber } upload success ^_^`);

    }
    
  } catch(err) {
    console.log(`error: ${ err }`)
  }
})();
