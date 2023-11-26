const repl = require('repl');
const locale = repl.start('$ ');
locale.on('exit', ()=>{
    console.log("Exiting REPL");
    process.exit(1);
})