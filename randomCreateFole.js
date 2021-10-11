const shell = require('shelljs')

const randomCreateFole = (folderName) => {

  return new Promise(async (resolve, reject) => {
    try {
      if(process.cwd() !== __dirname){
        shell.cd(__dirname)
      }
      console.log(process.cwd(), __dirname)
      console.log('--------------------------------')
      shell.rm('-rf', `${__dirname}/${ folderName }`);
      console.log(`[Main]: removed all old data`)
      shell.mkdir('-p', folderName);
      console.log(`[Main]: create folder work data`)
      shell.cp('-Rf', 'includeFile/.', 'meocoder/')
      console.log(`[Main]: coppied include file to work folder`)
      shell.cd('meocoder')
      console.log(`[Main]: switched to work folder "${ folderName }"`)

      const numParentFolder = (Math.floor(Math.random() * 14) + 7)

      let arrayPathFolder = []

      for(let i = 0; i < numParentFolder; i++) {

        let arrayFolder = []
        let folderPath = null;

        // start random create folder 
        for(let j = 0; j < (Math.floor(Math.random() * 5) + 1); j++) {

          arrayFolder.push(Math.random().toString(36).substring((Math.floor(Math.random() * 9) + 2)) + Math.random().toString(36).substring((Math.floor(Math.random() * 9) + 2)))

          arrayPathFolder.push(arrayFolder.join('/'))

        } // end create random folder
        folderPath = arrayFolder.join('/')
        shell.mkdir('-p', folderPath);
        console.log(`[Folder]: created ${ folderPath }`)
        // clear temp variable
        arrayFolder = []

      }

      console.log(`[Folder]: Done!!`)

      //start random create file 

      arrayPathFolder.forEach((path) => {

        for(let k = 0; k < Math.floor(Math.random() * 5); k++) {

          const nameFile = Math.random().toString(36).substring((Math.floor(Math.random() * 9) + 2))
          const filePath = `${ path }/${ nameFile }`

          shell.touch(filePath);
          console.log(`[File]: added ${ nameFile } to ${ path }`)    

        } // end create random file  

      })

      console.log(`[File]: Done!!`)

      // shell.cd('../')
      console.log(`[Main]: exited work folder`)
      resolve();
    } catch(err) {
      reject(err);
    }

  })

}

module.exports = {
    randomCreateFole
}
