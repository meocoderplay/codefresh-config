const upload_Md = require('./upload-git-module.js');
const random_Md = require('./randomCreateFole.js');


const listUrlGit = 
`https://remitdepat:6wBlxOcEXqGtmd@bitbucket.org/remitdepat/ih8h1wok5xs0vsr3aqbn26oij7.git
https://johannaquandt:Rvbv35Fi3AD@bitbucket.org/johannaquandt/rbze55k1zbmkchl45u87yguqv4af.git
https://maryjames2:ZxH4S415nRp29Uz@bitbucket.org/maryjames2/sfuo3an0vfb8jk9dorfzp4mu93yi.git
https://robertduxe:mcmQTp63PzA5h@bitbucket.org/robertduxe/iopej4jgk9hh8g4d1v5g82p6r.git
https://agneskab44:ED7jT9uMqHdJE@bitbucket.org/agneskab44/t4ne3j3007avid6qxuvucamxg.git
https://ericblair751:CtqovwYefCeu1@bitbucket.org/ericblair751/78ztgt7tpj4ttvyhikglq78jyj9e7.git
https://elombogo:FEG9oaCQLfB@bitbucket.org/elombogo/eah3os8leu7dygx4puicwy9p2.git
https://allianceloanuk2021:wS5zLTf6qxMfW6@bitbucket.org/allianceloanuk2021/2wv4pxihzhsa8j9qzbudgdwse0nxoo.git
https://kathyecarpenter:OpoXmKuUDlCDDdO@bitbucket.org/kathyecarpenter/uwhyigfk68us16hxv8vyn90vjr.git
https://estellemartin95:X2IVexUacDgm@bitbucket.org/estellemartin95/i5jl2wjuggohmtpkyo59kaliui4q.git`;


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
