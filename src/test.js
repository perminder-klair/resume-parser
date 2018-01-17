const ResumeParser = require('./index');

const fileDir = process.cwd() + '/files/';
ResumeParser.parseResume(fileDir+'resume.doc', fileDir+'compiled'); //input file, output dir
