'use strict';
const path     = require('path'),
      _        = require('underscore'),
      textract = require('textract'),
      mime     = require('mime'),
      fs       = require('fs'),
      logger   = require('tracer').colorConsole();

module.exports.run = processFile;

/**
 *
 * @param file
 * @param cbAfterProcessing
 */
function processFile(file, cbAfterProcessing) {
  extractText(file, function (PreparedFile) {
    if (_.isFunction(cbAfterProcessing)) {

      cbAfterProcessing(PreparedFile);
    } else {
      return logger.error('cbAfterProcessing should be a function');
    }
  });
}

/**
 *
 * @param data
 * @returns {string}
 */
function cleanTextByRows(data) {
  var rows,
      clearRow,
      clearRows = [];

  rows = data.split("\n");
  for (var i = 0; i < rows.length; i++) {
    clearRow = cleanStr(rows[i]);
    if (clearRow) {
      clearRows.push(clearRow);
    }
  }

  return clearRows.join("\n") + "\n{end}";
}

/**
 *
 * @param file
 * @param cbAfterExtract
 */
function extractText(file, cbAfterExtract) {
  logger.trace(file)
  textract.fromFileWithPath(file, {preserveLineBreaks: true}, function (err, data) {
    if (err) {
      return logger.error(err);
    }
    if (_.isFunction(cbAfterExtract)) {
      data = cleanTextByRows(data);
      var File = new PreparedFile(file, data.replace(/^\s/gm, ''));
      cbAfterExtract(File);
    } else {
      return logger.error('cbAfterExtract should be a function');
    }
  });
}

/**
 *
 * @param str
 * @returns {string}
 */
function cleanStr(str) {
  return str.replace(/\r?\n|\r|\t|\n/g, '').trim();
}

function PreparedFile(file, raw) {
  this.path = file;
  this.mime = mime.lookup(file);
  this.ext = mime.extension(this.mime);
  this.raw = raw;
  this.name = path.basename(file);
}

/**
 *
 * @param Resume
 */
PreparedFile.prototype.addResume = function (Resume) {
  this.resume = Resume;
};

PreparedFile.prototype.saveResume = function (path, cbSavedResume) {
  path = path || __dirname;

  if (!_.isFunction(cbSavedResume)) {
    return logger.error('cbSavedResume should be a function');
  }

  if (fs.statSync(path).isDirectory() && this.resume) {
    fs.writeFile(path + '/' + this.name + '.json', this.resume.jsoned(), cbSavedResume);
  }
};
