const validator = require('validator')
const chalk = require('chalk')
// const getNotes = require('./utils.js')
const getNotes = require('./notes.js')

const msg = getNotes()


/** logs */
// console.log(msg)
console.log(validator.isEmail('test.com\n'))

// Nest styles of the same type even (color, underline, background)
console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));


// const fs = require('fs')
// const sum = add(2,3)
// const name = 'Ahmed'
// console.log("sum is :" + sum)
// fs.writeFileSync('notes.txt','this file was created by node.js , my name is hamada head')
// fs.appendFileSync('notes.txt','\nthis file was created by node.js , my name is hamada head')

