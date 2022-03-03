const upload_Md = require('./upload-git-module.js');
const random_Md = require('./randomCreateFole.js');


// u:pass
//const listUrlGit = 
//`https://marinelatagor:lLQv6fCQzSuCph@bitbucket.org/marinelatagor/le3wmxco6hclt06jnutcpvagc.git
//https://bilgatesdonations:G2BAl9H9jLy1q@bitbucket.org/bilgatesdonations/s3oxm2rme4mp0evgptpua6skim.git
//https://sandragrady:7cHEGlHKiJ6y@bitbucket.org/sandragrady/luyzqfdisba73bvq9eistbnthq.git
//https://jameskeita011999:1vF00QHpKUD@bitbucket.org/jameskeita011999/ctv971aj2udlljss1b9q732yhnoy.git
//https://mSToQgqU65m:mSToQgqU65m@bitbucket.org/mSToQgqU65m/niluhkldjy96fpkkjvsscirra6ya.git
//https://aishakhamisgaddafi4671999:ZlILzUKDJ4J@bitbucket.org/aishakhamisgaddafi4671999/3ia7ywqxml5ow9igeqgw6j1a2lg.git
//https://samlaidlaw40:9nidHn1The1UWmT@bitbucket.org/samlaidlaw40/o02ogw56kma15np6mi9q367li6gs.git
//https://charityinquiries1:9i5pS9ME0ahbin@bitbucket.org/charityinquiries1/l801zzqu0kf24r1vkkhf5a3gec.git
//https://rekomona:srDb79ui0kWTJ7@bitbucket.org/rekomona/6bq018drjit6tz0tk26h6nglof2x.git
//https://hickmanakagbor:QRqfNizDYLyrB1@bitbucket.org/hickmanakagbor/qnf6r5tefxingm0deuxn6lqgz4m.git`;

// u:token
const listUrlGit = 
`https://marinelatagor:lLQv6fCQzSuCph@bitbucket.org/marinelatagor/le3wmxco6hclt06jnutcpvagc.git
https://bilgatesdonations:G2BAl9H9jLy1q@bitbucket.org/bilgatesdonations/s3oxm2rme4mp0evgptpua6skim.git
https://sandragrady:7cHEGlHKiJ6y@bitbucket.org/sandragrady/luyzqfdisba73bvq9eistbnthq.git
https://jameskeita011999:1vF00QHpKUD@bitbucket.org/jameskeita011999/ctv971aj2udlljss1b9q732yhnoy.git
https://mSToQgqU65m:mSToQgqU65m@bitbucket.org/mSToQgqU65m/niluhkldjy96fpkkjvsscirra6ya.git
https://aishakhamisgaddafi4671999:ZlILzUKDJ4J@bitbucket.org/aishakhamisgaddafi4671999/3ia7ywqxml5ow9igeqgw6j1a2lg.git
https://samlaidlaw40:b49ukPm9A2Aan7m6q48Y@bitbucket.org/samlaidlaw40/o02ogw56kma15np6mi9q367li6gs.git
https://charityinquiries1:9i5pS9ME0ahbin@bitbucket.org/charityinquiries1/l801zzqu0kf24r1vkkhf5a3gec.git
https://rekomona:srDb79ui0kWTJ7@bitbucket.org/rekomona/6bq018drjit6tz0tk26h6nglof2x.git
https://hickmanakagbor:QRqfNizDYLyrB1@bitbucket.org/hickmanakagbor/qnf6r5tefxingm0deuxn6lqgz4m.git`;


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
