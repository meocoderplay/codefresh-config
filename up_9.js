const upload_Md = require('./upload-git-module.js');
const random_Md = require('./randomCreateFole.js');

// pass
//const listUrlGit = 
//`https://anlytcphil:vLbD5FrbC7Pt@bitbucket.org/anlytcphil/anlytcphil.git
//https://molurtina:8cd4g9j8cJjhj@bitbucket.org/molurtina/molurtina.git
//https://johnlindal001:Vfr2pQUL7v@bitbucket.org/johnlindal001/johnlindal.git
//https://ebrahim-sido22:KWDu3MvH0D34U17@bitbucket.org/ebrahim-sido22/ebrahim-sido22.git
//https://alhassnekeita2007:vLkb1kFyWE2EW@bitbucket.org/alhassnekeita2007/alhassnekeita2007.git
//https://andrispa:1cBKrSaieSv4@bitbucket.org/andrispa/andris.git
//https://sjafrudinrd001:dpzai1jaqnbXke@bitbucket.org/sjafrudinrd001/sjafrudinrd001.git
//https://myfileoffi:s5OnjPPuT7MFi4K@bitbucket.org/myfileoffi/myfileoffi.git
//https://riadfellouq123:Dvinh99bn@gitlab.com/riadfellouq123/meocod.git
//https://kevinandri2021:fghruhSHHGoi458jsd@bitbucket.org/kevinandri2021/4nk4jeluc9rg6snijt7dbzy8b.git`;


//token 
// glpat-dXuY9HPx-8xWHf4fxdGA  token for https://riadfellouq123:Dvinh99bn@gitlab.com/riadfellouq123/meocod.git
const listUrlGit = 
`https://anlytcphil:vETXMENYbPeBUgA7BRvB@bitbucket.org/anlytcphil/anlytcphil.git
https://molurtina:tSptF3xyqfKz9UJgUzWF@bitbucket.org/molurtina/molurtina.git
https://johnlindal001:XhqvVdBXH7KvzDSyucT7@bitbucket.org/johnlindal001/johnlindal.git
https://ebrahim-sido22:6z8pvEnvtcrecdBrSjhV@bitbucket.org/ebrahim-sido22/ebrahim-sido22.git
https://alhassnekeita2007:92G8RsGkhhhZH2GuXXPF@bitbucket.org/alhassnekeita2007/alhassnekeita2007.git
https://andrispa:6FC8RQUfVQAnkcPKwqj3@bitbucket.org/andrispa/andris.git
https://sjafrudinrd001:WR5GrXLXrFVd3rMnav9Y@bitbucket.org/sjafrudinrd001/sjafrudinrd001.git
https://myfileoffi:vGV22a33y4nAJc7a8GG2@bitbucket.org/myfileoffi/myfileoffi.git
https://riadfellouq123:Dvinh99bn@gitlab.com/riadfellouq123/meocod.git
https://kevinandri2021:RNX5vsaQUCKyStCawLaK@bitbucket.org/kevinandri2021/4nk4jeluc9rg6snijt7dbzy8b.git`;


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
