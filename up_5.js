const upload_Md = require('./upload-git-module.js');
const random_Md = require('./randomCreateFole.js');

//pass
// const listUrlGit = 
// `https://coreoilandgas15:2SP3EcuULmVWf@bitbucket.org/coreoilandgas15/8xv0w47575dxgs4x44wct4nxof.git
// https://jntc_cl:ezWjzvsLu26@bitbucket.org/jntc_cl/t79t2dwn2okl8qqffu8taybz2xi.git
// https://customercare7700:2kcEscmIt1aKq@bitbucket.org/customercare7700/pbdu0triyoi9f6g3ohuk6idlv.git
// https://saad_mounia:CSfftuG83S@bitbucket.org/saad_mounia/i423ut8mujfbg98kewazv5jcfok2.git
// https://harriethdin:uT0LeEkR0YtLxAe@bitbucket.org/harriethdin/jqww3rqmpb78z4v5l8z25mompl.git
// https://neilwaudby84:4tSojLqla6@bitbucket.org/neilwaudby84/8h1jkkf7q57wsixg2a8ve6t2d5u.git
// https://jlf55662:ZwGuhBvJlL5@bitbucket.org/jlf55662/y0la41t5tvimbifik16i5dg4gbb.git
// https://americaseafood:HkG6m46W0y2M3Bc@bitbucket.org/americaseafood/0vv15ooy7rmmcyhbmgvvcr2bsmms68.git
// https://gisette007:diBA6D6S713o@bitbucket.org/gisette007/yuvk42tr3rs360z87d1dxn9vhb.git
// https://westernunuion:W9PP2d3jRb@bitbucket.org/westernunuion/7zyleqb7ozkqoa1l6ce9bh36wv8q.git`;



//token
const listUrlGit = 
`https://coreoilandgas15:SEFfv2E5REq6umZHmnkd@bitbucket.org/coreoilandgas15/8xv0w47575dxgs4x44wct4nxof.git
https://jntc_cl:faVHj7k3y5xjbxKZ7745@bitbucket.org/jntc_cl/t79t2dwn2okl8qqffu8taybz2xi.git
https://customercare7700:nY6a2LqewwARxkpH9zBq@bitbucket.org/customercare7700/pbdu0triyoi9f6g3ohuk6idlv.git
https://saad_mounia:mYpZwL4gBkbbKXcEXQqS@bitbucket.org/saad_mounia/i423ut8mujfbg98kewazv5jcfok2.git
https://harriethdin:sNCKZmk23rPHZKk2bL4U@bitbucket.org/harriethdin/jqww3rqmpb78z4v5l8z25mompl.git
https://neilwaudby84:bjsX2Tz9zuseaDWE9kr8@bitbucket.org/neilwaudby84/8h1jkkf7q57wsixg2a8ve6t2d5u.git
https://jlf55662:Jg7hcKzT97vrxqPWs2BD@bitbucket.org/jlf55662/y0la41t5tvimbifik16i5dg4gbb.git
https://americaseafood:psE9vvA2J8cwSvEWKaZw@bitbucket.org/americaseafood/0vv15ooy7rmmcyhbmgvvcr2bsmms68.git
https://gisette007:EzQ26gz3PtHBGCUkYgDs@bitbucket.org/gisette007/yuvk42tr3rs360z87d1dxn9vhb.git
https://westernunuion:HmJFh3UqXEPTgRTYG9fn@bitbucket.org/westernunuion/7zyleqb7ozkqoa1l6ce9bh36wv8q.git`;
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
