var ParseBoy = require('./ParseBoy');
var processing = require('./libs/processing');
var _ = require('underscore');
var logger = require('tracer').colorConsole();

var parser = {
  parseResume: function (file,savePath) {
    var objParseBoy = new ParseBoy(), savedFiles = 0;


    var onFileReady = function (preppedFile) {
      objParseBoy.parseFile(preppedFile, function (Resume) {
        logger.trace('I got Resume for ' + preppedFile.name + ', now saving...');

        objParseBoy.storeResume(preppedFile, Resume, savePath, function (err) {
          if (err) {
            return logger.error('Resume ' + preppedFile.name + ' errored',err);
          }
          logger.trace('Resume ' + preppedFile.name + ' saved');

        })
      });
    }
    processing.run(file, onFileReady);
  }
}
module.exports = parser;
