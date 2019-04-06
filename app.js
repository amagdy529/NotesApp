const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')

yargs.version('1.1.0')



yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title,argv.body)
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})
    
yargs.parse()
// console.log(yargs.argv)