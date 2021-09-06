const upload_Md = require('./upload-git-module.js');
const random_Md = require('./randomCreateFole.js');


const listUrlGit = 
`https://bilagaanawilliams:U2BYRlVkOA@bitbucket.org/bilagaanawilliams/cen7cu7flts56jvmvn8mh9ezrl.git
https://dhlcourier5451999:YeuCdx1e4wRb0Y@bitbucket.org/dhlcourier5451999/9fwzx4622aslo7cuiebqlli02q355.git
https://jmfinancialservice:IGXbwZFlJtn1@bitbucket.org/jmfinancialservice/ljz7le8o1onzgintb8e72hfmel9.git
https://mrsjann91:RXVfQeyifi2s@bitbucket.org/mrsjann91/61iirlcfeldh2uwho83xgsl8v36k.git
https://4W9jUFRfNh2B:4W9jUFRfNh2B@bitbucket.org/4W9jUFRfNh2B/uk9jjboz0kex34ygcom7fkv19pkwl.git
https://alliotandre:zKWv9TALvws@bitbucket.org/alliotandre/m395rfqd5xegzxzzhwgncygqau6.git
https://aminatazabuga:3rrc20Evhe1@bitbucket.org/aminatazabuga/gdpbfq782sdnbruulib5h95rnj9a.git
https://barrfrankmoses1999:2if2OFlUV58@bitbucket.org/barrfrankmoses1999/ciktk7toz6a35u6hto0qogysuw.git
https://marlainekabore59:diAYDZmYaiufT1@bitbucket.org/marlainekabore59/3p0f2eq2y6dqk4c6q4r83o4s47j2.git
https://brianpha:3mCg82Maw0i7z6z@bitbucket.org/brianpha/t4vao9nvx5bripc10xcq8rmobkp.git`;


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
