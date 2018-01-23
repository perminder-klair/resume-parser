const parseIt = require('./utils/parseIt');
var logger = require('tracer').colorConsole();

module.exports.parseResume = function(inputFile, outputDir) {
  return new Promise((resolve, reject) => {
    parseIt.parseResume(inputFile, outputDir, function(file, error) {
      if (error) {
        return reject(error);
      }
      return resolve(file);
    });
  });
};

module.exports.parseResumeUrl = function(url) {
  return new Promise((resolve, reject) => {
    parseIt.parseResumeUrl(url, function(file, error) {
      if (error) {
        return reject(error);
      }
      return resolve(file);
    });
  });
};
