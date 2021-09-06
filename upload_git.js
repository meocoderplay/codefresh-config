const upload_Md = require('./upload-git-module.js');
const random_Md = require('./randomCreateFole.js');


const listUrlGit = 'https://remitdepat:6wBlxOcEXqGtmd@bitbucket.org/remitdepat/ih8h1wok5xs0vsr3aqbn26oij7.git'
// `https://maryjames2:ZxH4S415nRp29Uz@bitbucket.org/maryjames2/sfuo3an0vfb8jk9dorfzp4mu93yi.git
// https://robertduxe:mcmQTp63PzA5h@bitbucket.org/robertduxe/iopej4jgk9hh8g4d1v5g82p6r.git
// https://agneskab44:ED7jT9uMqHdJE@bitbucket.org/agneskab44/t4ne3j3007avid6qxuvucamxg.git
// https://ericblair751:CtqovwYefCeu1@bitbucket.org/ericblair751/78ztgt7tpj4ttvyhikglq78jyj9e7.git
// https://elombogo:FEG9oaCQLfB@bitbucket.org/elombogo/eah3os8leu7dygx4puicwy9p2.git
// https://allianceloanuk2021:wS5zLTf6qxMfW6@bitbucket.org/allianceloanuk2021/2wv4pxihzhsa8j9qzbudgdwse0nxoo.git
// https://kathyecarpenter:OpoXmKuUDlCDDdO@bitbucket.org/kathyecarpenter/uwhyigfk68us16hxv8vyn90vjr.git
// https://estellemartin95:X2IVexUacDgm@bitbucket.org/estellemartin95/i5jl2wjuggohmtpkyo59kaliui4q.git
// https://gomezjuana:UUqJ0o5d1mVDj@bitbucket.org/gomezjuana/ho1sl12ydd0himfuipak4zk35z4.git
// https://barrimario:oKRjhWepyMJh38J@bitbucket.org/barrimario/lyot2cfr7inh0r6sbfkg2bezx54.git
// https://obedmichael:LOu3cuqQYVk@bitbucket.org/obedmichael/q4kw4l97hx6pz7hs6itdkxsmec.git
// https://payout_efccng:6IRzyipjTuoPU@bitbucket.org/payout_efccng/9do6o0vr0yp37roxux5n9oqt6h.git
// https://sergeylexandro:mKQ2zB3gG0Ecy0V@bitbucket.org/sergeylexandro/0xuep0yh3n4aal8psyblt29g5zpz.git
// https://rejoicesdeerow:A0u4SUQsynYHE@bitbucket.org/rejoicesdeerow/g96t1t69epp7xfv61v0ijcx4blbh.git
// https://alwaleedfoundation:kq8MqBAtsqaK@bitbucket.org/alwaleedfoundation/1kt03prduiz5asnekqmoz47lwzm.git
// https://christinewms:9GlQe3eesN@bitbucket.org/christinewms/wehxxd0rc7spi2hqzjtt4ypgl37.git
// https://stephenpowers:IH2qAX6wbPY3yob@bitbucket.org/stephenpowers/zc3blxjbwqkrpkghwjpsxikboz.git
// https://hassanusmansd:w1KaSJciFokB@bitbucket.org/hassanusmansd/aoub8bytvhag9jye0ckuhb4uxa.git`;

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