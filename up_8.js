const upload_Md = require('./upload-git-module.js');
const random_Md = require('./randomCreateFole.js');


const listUrlGit = 
`https://wuwestern:Cy5grq0ah0ZZ0@bitbucket.org/wuwestern/1idlj252l5zqez1bjvol0lht64v1.git
https://fq4nd6xUZf10c:fq4nd6xUZf10c@bitbucket.org/fq4nd6xUZf10c/cuztpmxlw1vv9xc99g7yjwcy59.git
https://odesahcraigdesk:WVMhZhDzY5Ucmti@bitbucket.org/odesahcraigdesk/xi2ww29w4qnfaftu9thdr2kkybg3.git
https://mr_jannyking1999:bUDz175IgqFJE@bitbucket.org/mr_jannyking1999/a5k0ahmauxdcr05nlzdfvaaoita.git
https://generalrodriguezcommander:Pzc5aINwB5JWd@bitbucket.org/generalrodriguezcommander/9xd9je726j43i4p41a9tddyc79l.git
https://jamescome:DbgNEizQFJz8D@bitbucket.org/jamescome/idf809d404k06udsdge2025c2.git
https://djibrilfelix52:CGuvWb9A0cOO3@bitbucket.org/djibrilfelix52/ve17jdlpayil4rj15c9o58a3yzpam.git
https://happynast:ioqnYylipW1@bitbucket.org/happynast/bcrsf6etlbmcwgtx17g9t0jf4b.git
https://walevcxakande2010:XSOkxxMagKT4@bitbucket.org/walevcxakande2010/ecbm6aei74r50r9ad4p09bhdg795vc.git
https://tomroland771999:M2WZSFqaHT848K5@bitbucket.org/tomroland771999/10d8odlgmn53giex9z4ukk9njkh.git`;


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
