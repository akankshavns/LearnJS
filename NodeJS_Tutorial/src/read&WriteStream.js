/**
 * Read Stream object inherits Event emmitter class
 * And reads data in chunk (Not in a one go)
 * Advantage of reading a chunk is that we do not have to 
 * wait to get all the read in the system.
 * 2nd Advantage is that even with less memorey we can 
 * read large data files
 */

const fs = require('fs')
const zlib = require('zlib')

const readStream = fs.createReadStream('./fileSystem2.js', 'utf-8')
const writeStream = fs.createWriteStream('./writeStream.txt')
const writeStream2 = fs.createWriteStream('./writeStream2.txt.gz')

readStream.on('data', (chunk) => {
    console.log(chunk);
    writeStream.write(chunk)
})

// We can use pipe for the same purpose

readStream.pipe(writeStream)

// We can compress as well before writing

const gzip = zlib.createGzip();
readStream.pipe('gzip').pipe(writeStream2)