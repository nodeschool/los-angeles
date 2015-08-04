const Handlebars = require('handlebars')
const fs = require('fs')
const hbsFile = process.argv[2]
const data = require(process.argv[3])
const outputFile = process.argv[4]

fs.readFile(hbsFile, 'utf8', function(err, content) {
  if (err) {
    throw err
  }
  const template = Handlebars.compile(content)
  fs.writeFile(outputFile, template(data), function(err) {
    if (err) {
      throw err
    }
    console.log('done');
    process.exit(0);
  })
})
