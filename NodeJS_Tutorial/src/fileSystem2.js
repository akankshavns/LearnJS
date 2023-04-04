const fs = require('fs')


// Create and delete a folder

fs.mkdir('tutorial', (err) => {
    if (err) console.log(err)
    else {
        console.log('Folder successfully created.')
        fs.rmdir('tutorial', (err)=>{
            if (err) console.log(err)
            else console.log('Successfully deleted the folder')
        })
    }
})


// Create a folder and a file within it

fs.mkdir('tutorial', (err) => {
    if (err) console.log(err)
    else {
        console.log('Folder successfully created.')
        fs.writeFile('./tutorial/example.txt', '123', (err)=>{
            if (err) console.log(err)
            else console.log('Successfully created file')
        })
    }
})


// Deleting a folder with a file in it

fs.unlink('./tutorial/example.txt', (err)=>{
    if (err) console.log(err)
    else {
        fs.rmdir('tutorial', (err)=>{
            if (err) console.log(err)
            else console.log('Successfully deleted the folder')
        })
    }
})

// Reading directory

fs.readdir('./', (err, files) => {
    if (err) console.log(err)
    else {
        console.log(files) //List of the files and directory in the given folder
    }
})
