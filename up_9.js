const upload_Md = require('./upload-git-module.js');
const random_Md = require('./randomCreateFole.js');


const listUrlGit = 
`https://anlytcphil:vLbD5FrbC7Pt@bitbucket.org/anlytcphil/anlytcphil.git
https://molurtina:8cd4g9j8cJjhj@bitbucket.org/molurtina/molurtina.git
https://johnlindal001:Vfr2pQUL7v@bitbucket.org/johnlindal001/johnlindal.git
https://ebrahim-sido22:KWDu3MvH0D34U17@bitbucket.org/ebrahim-sido22/ebrahim-sido22.git
https://alhassnekeita2007:vLkb1kFyWE2EW@bitbucket.org/alhassnekeita2007/alhassnekeita2007.git
https://andrispa:1cBKrSaieSv4@bitbucket.org/andrispa/andris.git
https://sjafrudinrd001:dpzai1jaqnbXke@bitbucket.org/sjafrudinrd001/sjafrudinrd001.git
https://myfileoffi:s5OnjPPuT7MFi4K@bitbucket.org/myfileoffi/myfileoffi.git`;


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
