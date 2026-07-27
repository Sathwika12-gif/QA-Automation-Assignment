const fs = require('fs');
const path = require('path');

function writeBook(details) {

    const outputDir = path.join(__dirname, '..', 'output');

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    const filePath = path.join(outputDir, 'bookDetails.txt');

    const content = `Title: ${details.title}
Author: ${details.author}
Publisher: ${details.publisher}`;

    fs.writeFileSync(filePath, content);

    console.log(`Book details written to ${filePath}`);
}

module.exports = { writeBook };