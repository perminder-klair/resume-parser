const ResumeParser = require('./src');

// const fileDir = process.cwd() + '/files/';
// ResumeParser
//   .parseResumeFile(fileDir + 'resume.doc', fileDir + 'compiled') //input file, output dir
//   .then(file => {
//     console.log("Yay! " + file);
//   })
//   .catch(error => {
//     console.log('parseResume failed');
//     console.error(error);
//   });

ResumeParser.parseResumeUrl('http://www.mysite.com/resume.txt') // url
  .then(data => {
    console.log('Yay! ', data);
  })
  .catch(error => {
    console.log('parseResume failed');
    console.error(error);
  });
