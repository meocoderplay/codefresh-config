const upload_Md = require('./upload-git-module.js');
const random_Md = require('./randomCreateFole.js');

//pass
// const listUrlGit = 
// `https://gomezjuana:UUqJ0o5d1mVDj@bitbucket.org/gomezjuana/ho1sl12ydd0himfuipak4zk35z4.git
// https://barrimario:oKRjhWepyMJh38J@bitbucket.org/barrimario/lyot2cfr7inh0r6sbfkg2bezx54.git
// https://obedmichael:LOu3cuqQYVk@bitbucket.org/obedmichael/q4kw4l97hx6pz7hs6itdkxsmec.git
// https://payout_efccng:6IRzyipjTuoPU@bitbucket.org/payout_efccng/9do6o0vr0yp37roxux5n9oqt6h.git
// https://sergeylexandro:mKQ2zB3gG0Ecy0V@bitbucket.org/sergeylexandro/0xuep0yh3n4aal8psyblt29g5zpz.git
// https://rejoicesdeerow:A0u4SUQsynYHE@bitbucket.org/rejoicesdeerow/g96t1t69epp7xfv61v0ijcx4blbh.git
// https://alwaleedfoundation:kq8MqBAtsqaK@bitbucket.org/alwaleedfoundation/1kt03prduiz5asnekqmoz47lwzm.git
// https://christinewms:9GlQe3eesN@bitbucket.org/christinewms/wehxxd0rc7spi2hqzjtt4ypgl37.git
// https://stephenpowers:IH2qAX6wbPY3yob@bitbucket.org/stephenpowers/zc3blxjbwqkrpkghwjpsxikboz.git
// https://hassanusmansd:w1KaSJciFokB@bitbucket.org/hassanusmansd/aoub8bytvhag9jye0ckuhb4uxa.git`;

//token
const listUrlGit = 
`https://gomezjuana:RX6yykrEupV97DcYBhZr@bitbucket.org/gomezjuana/ho1sl12ydd0himfuipak4zk35z4.git
https://barrimario:VjfF6S4JTRuV3jkQRtR8@bitbucket.org/barrimario/lyot2cfr7inh0r6sbfkg2bezx54.git
https://obedmichael:AwHausmauGuH8eKEdwTp@bitbucket.org/obedmichael/q4kw4l97hx6pz7hs6itdkxsmec.git
https://payout_efccng:NeAw46Hk6tsr4NaUq7mU@bitbucket.org/payout_efccng/9do6o0vr0yp37roxux5n9oqt6h.git
https://sergeylexandro:K4gctWChMEsKBv6jhENr@bitbucket.org/sergeylexandro/0xuep0yh3n4aal8psyblt29g5zpz.git
https://rejoicesdeerow:6WvpX3rzKCEjYzwWmbzc@bitbucket.org/rejoicesdeerow/g96t1t69epp7xfv61v0ijcx4blbh.git
https://alwaleedfoundation:3TzJzsQ9M8Ud9Rtt6awD@bitbucket.org/alwaleedfoundation/1kt03prduiz5asnekqmoz47lwzm.git
https://christinewms:dZAQay7mP35JXjFDq7wk@bitbucket.org/christinewms/wehxxd0rc7spi2hqzjtt4ypgl37.git
https://stephenpowers:m2b6U8kfwRxtLmzQGwsT@bitbucket.org/stephenpowers/zc3blxjbwqkrpkghwjpsxikboz.git
https://hassanusmansd:xDaSqZucvj8gkhG7VxN9@bitbucket.org/hassanusmansd/aoub8bytvhag9jye0ckuhb4uxa.git`;



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
