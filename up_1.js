const upload_Md = require('./upload-git-module.js');
const random_Md = require('./randomCreateFole.js');


// u:pass
// const listUrlGit = 
// `https://remitdepat:6wBlxOcEXqGtmd@bitbucket.org/remitdepat/ih8h1wok5xs0vsr3aqbn26oij7.git
// https://johannaquandt:Rvbv35Fi3AD@bitbucket.org/johannaquandt/rbze55k1zbmkchl45u87yguqv4af.git
// https://maryjames2:ZxH4S415nRp29Uz@bitbucket.org/maryjames2/sfuo3an0vfb8jk9dorfzp4mu93yi.git
// https://robertduxe:mcmQTp63PzA5h@bitbucket.org/robertduxe/iopej4jgk9hh8g4d1v5g82p6r.git
// https://agneskab44:ED7jT9uMqHdJE@bitbucket.org/agneskab44/t4ne3j3007avid6qxuvucamxg.git
// https://ericblair751:CtqovwYefCeu1@bitbucket.org/ericblair751/78ztgt7tpj4ttvyhikglq78jyj9e7.git
// https://elombogo:FEG9oaCQLfB@bitbucket.org/elombogo/eah3os8leu7dygx4puicwy9p2.git
// https://allianceloanuk2021:wS5zLTf6qxMfW6@bitbucket.org/allianceloanuk2021/2wv4pxihzhsa8j9qzbudgdwse0nxoo.git
// https://kathyecarpenter:OpoXmKuUDlCDDdO@bitbucket.org/kathyecarpenter/uwhyigfk68us16hxv8vyn90vjr.git
// https://estellemartin95:X2IVexUacDgm@bitbucket.org/estellemartin95/i5jl2wjuggohmtpkyo59kaliui4q.git
// https://musafara:Cd3luLn7DTrAB7@bitbucket.org/musafara/musafara.git
// https://lilib6060:3flqkayl45@bitbucket.org/lilib6060/lilib6060.git
// https://mblopoku:MaUznaJLjx69EJ@bitbucket.org/mblopoku/poku.git
// https://helenmakb:5LN806lZLLgDHm@bitbucket.org/helenmakb/helenmakb.git
// https://sanjoserojas:BntFmlXIBjcyg1@bitbucket.org/sanjoserojas/sanjoserojas.git
// https://wilsonmsroselin:HEhMcFdW1wnAzWL@bitbucket.org/wilsonmsroselin/wilson.git
// https://narzievazal:LsEnsS6utRGWfV@bitbucket.org/narzievazal/narzievazal.git
// https://mouhamedhassan123:tGh3ODX3isfvlfs@bitbucket.org/mouhamedhassan123/mouhamedhassan123.git
// https://drolufemiena:eSmuxs3ybe@bitbucket.org/drolufemiena/drolufemiena.git
// https://elizabethdipuopeterss:4RedZTqcS5Ul2K@bitbucket.org/elizabethdipuopeterss/elizabethdipuopeterss.git`;

// u:token

const listUrlGit = 
`https://remitdepat:gmkDBdGh9zhRGBDvvGVj@bitbucket.org/remitdepat/ih8h1wok5xs0vsr3aqbn26oij7.git
https://johannaquandt:ACgn5QzYgd4BJS7C5CZ3@bitbucket.org/johannaquandt/rbze55k1zbmkchl45u87yguqv4af.git
https://maryjames2:SvtNAauUyTnzNCzSyZKW@bitbucket.org/maryjames2/sfuo3an0vfb8jk9dorfzp4mu93yi.git
https://robertduxe:s9GNAKP9myM5VGtvsNxU@bitbucket.org/robertduxe/iopej4jgk9hh8g4d1v5g82p6r.git
https://agneskab44:HuuPSmdS2VxkmfgCDYVv@bitbucket.org/agneskab44/t4ne3j3007avid6qxuvucamxg.git
https://ericblair751:Qj6YLtCcjeJZkYwNNnAK@bitbucket.org/ericblair751/78ztgt7tpj4ttvyhikglq78jyj9e7.git
https://elombogo:7yJeDvzJfmy4wRfY7uPV@bitbucket.org/elombogo/eah3os8leu7dygx4puicwy9p2.git
https://allianceloanuk2021:DXwqrgsAAyR9WuJKsaj6@bitbucket.org/allianceloanuk2021/2wv4pxihzhsa8j9qzbudgdwse0nxoo.git
https://kathyecarpenter:dXALywFAMTzRhqRwVGmG@bitbucket.org/kathyecarpenter/uwhyigfk68us16hxv8vyn90vjr.git
https://estellemartin95:ZanVBHzTcTm3unvtXHxq@bitbucket.org/estellemartin95/i5jl2wjuggohmtpkyo59kaliui4q.git
https://musafara:b49ukPm9A2Aan7m6q48Y@bitbucket.org/musafara/musafara.git
https://lilib6060:25eqSjjW3krFnbZKBB2z@bitbucket.org/lilib6060/lilib6060.git
https://mblopoku:xhdchWByS3MbybaUCK6H@bitbucket.org/mblopoku/poku.git
https://helenmakb:kbmL774phA3qpz7DhHwu@bitbucket.org/helenmakb/helenmakb.git
https://sanjoserojas:s8DDpXtv6ubbn7GSFpXN@bitbucket.org/sanjoserojas/sanjoserojas.git
https://wilsonmsroselin:gq89hux2XMRub2eUBZjr@bitbucket.org/wilsonmsroselin/wilson.git
https://narzievazal:4nwdyZ26KA3Q6nh9Jv4J@bitbucket.org/narzievazal/narzievazal.git
https://mouhamedhassan123:HWrq6vh7WT4xVedHmSPZ@bitbucket.org/mouhamedhassan123/mouhamedhassan123.git
https://drolufemiena:xYWZTWHLwuKKUga5az64@bitbucket.org/drolufemiena/drolufemiena.git
https://elizabethdipuopeterss:kHQfvRkcvTTBK4HhgRSp@bitbucket.org/elizabethdipuopeterss/elizabethdipuopeterss.git`;


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
