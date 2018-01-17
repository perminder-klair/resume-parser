const ResumeParser = require('./src');

const fileDir = process.cwd() + '/files/';
ResumeParser.parseResume(fileDir + 'resume.doc', fileDir + 'compiled'); //input file, output dir
