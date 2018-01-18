const ResumeParser = require('./src');

const fileDir = process.cwd() + '/files/';
ResumeParser
  .parseResume(fileDir + 'resume.doc', fileDir + 'compiled') //input file, output dir
  .then(file => {
    console.log("Yay! " + file);
  })
  .catch(error => {
    console.log('parseResume failed');
    console.error(error);
  });
