const { exec } = require('child_process');


export function runBuilderIOCommand(command:any) {

    return new Promise((resolve, reject) => {
      exec(command,{stido:'inherit',shell:true}, (error:any, stdout:any, stderr:any) => {
        if (error) {
          console.error(`Error executing Builder.io command: ${error}`);
          console.log(error)
          reject(error);
        } else {
          resolve(stdout);
        }
      });
    });
  }