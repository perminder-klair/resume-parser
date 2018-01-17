'use strict';
const _          = require('underscore'),
      processing = require('./libs/processing'),
      parser     = require('./libs/parser'),
      logger     = require('tracer').colorConsole();

/**
 *
 * @constructor
 */
function ParseBoy() {

}


/**
 *
 * @param PreparedFile
 * @param cbGetResume
 */
ParseBoy.prototype.parseFile = function (PreparedFile, cbGetResume) {
  logger.trace('I\'m working with "' + PreparedFile.name + '" now')
  parser.parse(PreparedFile, cbGetResume);
};

/**
 *
 * @param PreparedFile
 * @param Resume
 * @param path
 * @param cbOnSaved
 */
ParseBoy.prototype.storeResume = function (PreparedFile, Resume, path, cbOnSaved) {
  PreparedFile.addResume(Resume);

  if (!_.isFunction(cbOnSaved)) {
    return console.error('cbOnSaved should be a function');
  }
  PreparedFile.saveResume(path, cbOnSaved);
};

/**
 *
 * @type {ParseBoy}
 */
module.exports = ParseBoy;
