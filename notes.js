const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'you notes is ...'
}

const addNote  = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })
    // debugger 
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        // console.log(notes)
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
    
}


const removeNote = (title) =>  {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })
    if (duplicateNotes.length > 0) {
        notes.pop({
            title: title
        })
        // console.log(notes)
        saveNotes(notes)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
    
}

/** Andrew Remove Note Func */
// const removeNote = (title) => {
//     const notes = loadNotes()
//     const notesToKeep = notes.filter((note) => note.title !== title)

//     if (notes.length > notesToKeep.length) {
//         console.log(chalk.green.inverse('Note removed!'))
//         saveNotes(notesToKeep)
//     } else {
//         console.log(chalk.red.inverse('No note found!'))
//     }    
// }

const listNotes = () => {
    console.log(chalk.blue.inverse('Your notes'))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json' , dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}