// const greet = require('./greet');

// console.log(greet('Xola'))

// import chalk from 'chalk';
// //import the greet module that is in the current folder
// import greet from './greet.js';

// const styledMessage = chalk.bgBlue.black(greet('Xola'));
// console.log(styledMessage)


import figlet from 'figlet';

figlet('greet_xola.js', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});