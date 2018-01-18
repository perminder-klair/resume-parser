const parseIt = require('./utils/parseIt');
var logger = require('tracer').colorConsole();

module.exports.parseResume = async (inputFile, outputDir) => {
  return new Promise((resolve, reject) => {
    parseIt.parseResume(inputFile, outputDir, function (file, error) {
      if (error) {
        return reject(error);
      }
      return resolve(file);
    });
  });
};
