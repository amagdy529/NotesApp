const fs = require('fs')


// fs.writeFileSync('notes.txt','this file was created by node.js , my name is hamada head')

fs.appendFileSync('notes.txt','\nthis file was created by node.js , my name is hamada head')

