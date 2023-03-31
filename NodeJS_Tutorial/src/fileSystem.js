const fs = require('fs')

// Create and read a file

fs.writeFile('example.txt', 'This is an example.', (err)=> {
    if (err) console.log(err);
    else {
        console.log('File successfully created.')
        fs.readFile('example.txt', 'utf8', (err, file) => {
            if (err) console.log(err);
            else console.log(file);
        })
    }
})


// Rename the file

fs.rename('example.txt', 'example2.txt', (err) => {
    if (err) console.log(err)
    else console.log('Successfully renamed the file.')
})


// Append data to the file

fs.appendFile('example2.txt', 'Some data being appended', (err)=>{
    if (err) console.log(err)
    else console.log('Successfully appended data to end the file')
})

// Delete a file

fs.unlink ('example2.txt', (err) => {
    if (err) console.log(err)
    else console.log('Successfully deleted the file')
})