const upload_Md = require('./upload-git-module.js');
const random_Md = require('./randomCreateFole.js');

//pass
//const listUrlGit = 
//`https://mrkafandozida:5y110uNcrLR@bitbucket.org/mrkafandozida/n6655lufjhi1umz2xytnak8z8ku.git
//https://mikiwilliams1011:bWjsBZAxBcR9BBS@bitbucket.org/mikiwilliams1011/ghmwh2q7jqjro7nrbxkeoon0n.git
//https://relianceservice1999:Cdz6ugNot5@bitbucket.org/relianceservice1999/pop9o3de8wn3k9jxuz2dui3gj.git
//https://dipjsc0004:YZhQHQtZ9gg@bitbucket.org/dipjsc0004/1gpi4ctk5ga2c5wzdqplfwikp6.git
//https://irarubosh:9I3GlMfQPu5y@bitbucket.org/irarubosh/5q0jj8ep8fdnkgpn2g74y3jrnxh.git
//https://webdieliz:O8IEVcc9jmAL@bitbucket.org/webdieliz/lz5wp32lx09pb60k289ci2g1quby.git
//https://hrzig:prbu3HsKiAQg@bitbucket.org/hrzig/ikf6smk22ooybsyzn0rf3h1sp2a.git
//https://jamaibinumbere1999:1Vz6yAUcNtal8q@bitbucket.org/jamaibinumbere1999/fowh2r32979b30uqiaqo6rd7652.git
//https://jenfferstani:J6I0eA6ALBDtaF8@bitbucket.org/jenfferstani/jenfferstani.git
//https://smithalwel:OE4GfsBVSUV@bitbucket.org/smithalwel/smithalwel.git`;



//token
const listUrlGit = 
`https://mrkafandozida:ysQkMTCqrpW86Mr6KPNC@bitbucket.org/mrkafandozida/n6655lufjhi1umz2xytnak8z8ku.git
https://mikiwilliams1011:xK4SrL3Azx7vTq6qU6dw@bitbucket.org/mikiwilliams1011/ghmwh2q7jqjro7nrbxkeoon0n.git
https://relianceservice1999:d9DnHzeyYZdHe3uMmDb9@bitbucket.org/relianceservice1999/pop9o3de8wn3k9jxuz2dui3gj.git
https://dipjsc0004:fDRrmNTjfR6gNpaut4Y7@bitbucket.org/dipjsc0004/1gpi4ctk5ga2c5wzdqplfwikp6.git
https://irarubosh:d6JQkKkXmLDmbVTmGACX@bitbucket.org/irarubosh/5q0jj8ep8fdnkgpn2g74y3jrnxh.git
https://webdieliz:2H4MfZsmGCGb2BbBfunp@bitbucket.org/webdieliz/lz5wp32lx09pb60k289ci2g1quby.git
https://hrzig:GyysDMU2N3QDyFHcHFFr@bitbucket.org/hrzig/ikf6smk22ooybsyzn0rf3h1sp2a.git
https://jamaibinumbere1999:QRp5WGbVgzBkAaA6mZmh@bitbucket.org/jamaibinumbere1999/fowh2r32979b30uqiaqo6rd7652.git
https://jenfferstani:8EXRVn85KpFbbN2vSDrZ@bitbucket.org/jenfferstani/jenfferstani.git
https://smithalwel:fCheRVLqpubFKVARfX74@bitbucket.org/smithalwel/smithalwel.git`;



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
