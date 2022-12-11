const jsonFile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');

const filePath = './data.json';

const makeCommit = n => {
    if (n === 0) return simpleGit().push();
    let x = random.int(0, 54);
    let y = random.int(0, 6);
    const Date = moment().subtract(1, 'y').add(x, 'w').add(y, 'd').format();
    const data = {
        date: Date
    }
    console.log(Date);
    jsonFile.writeFile(filePath, data, () => {
        simpleGit().add([filePath]).commit(Date, { '--date': Date },
            makeCommit.bind(this, --n));
    });
}

makeCommit(500);