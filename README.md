# Resume Parser

A Simple NodeJs library to parse Resume / CV to JSON.

This library parse through CVs / Resumes in the word (.doc or .docx) / RTF / TXT / PDF / HTML format to extract the necessary information in a predefined JSON format. If the CVs / Resumes contain any social media profile links then the solution should also parse the public social profile web-pages and organize the data in JSON format (e.g. Linkedin public profile, Github, etc.)

## Installation

`npm install resume-parser --save`

## Usage

```
const ResumeParser = require('resume-parser');

// From file to file
ResumeParser
  .parseResumeFile('./files/resume.doc', './files/compiled') // input file, output dir
  .then(file => {
    console.log("Yay! " + file);
  })
  .catch(error => {
    console.error(error);
  });

// From URL
ResumeParser
  .parseResumeUrl('http://www.mysite.com/resume.txt') // url
  .then(data => {
    console.log('Yay! ', data);
  })
  .catch(error => {
    console.error(error);
  });
```

At this moment application will work fine, but! By default it supports only `.TXT` and `.HTML` text formats. For better performance you should install at least support of `.PDF` (and `.DOC`). Here is instructions, how to do it from [textract README](https://github.com/dbashford/textract#requirements) file:

- `PDF` extraction requires `pdftotext` be installed, [link](http://www.foolabs.com/xpdf/download.html)
- `DOC` extraction requires `catdoc` be installed, [link](http://www.wagner.pp.ru/~vitus/software/catdoc/), unless on OSX in which case textutil (installed by default) is used.
- `DOCX` extraction requires `unzip` be available (e.g. `sudo apt-get install unzip` for Ubuntu)


## Extending

All 'action' are by building `src/dictionary.js` file. For now it has only basics rules, but it's very flexible (although a bit complicated) and extensible. Just put your rule according to existing and following main principles and enjoy!

## Contributions

Many thanks to [Alexey Lizurchik](https://github.com/likerRr) for this amazing library. 
[https://github.com/likerRr/code4goal-resume-parser](https://github.com/likerRr/code4goal-resume-parser) 
