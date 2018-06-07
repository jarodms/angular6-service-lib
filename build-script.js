// Set your lib name here
const libName = 'ng6-lib';

const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {
    try {
        // TODO: Dynamically do this without version number
        await fs.copy('dist/' + libName + '/' + libName + '-0.0.1.tgz', '../dist/' + libName + '-0.0.1.tgz')        
      } catch (err) {
        console.error(err)
      }
    console.info(libName + ' copied to lib folder')

})()
