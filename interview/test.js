const fs = require('fs')

const contents = fs.readFileSync('./plain_text.txt', 'utf-8').split('\n')
const content = JSON.parse(contents)
console.log(content)
