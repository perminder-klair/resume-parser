const parseIt = require('./utils/parseIt');

console.log("parseIt", process.cwd());

const fileDir = process.cwd() + '/files/';
parseIt.parseResume(fileDir+'resume.doc', fileDir+'compiled'); //input file, output dir
