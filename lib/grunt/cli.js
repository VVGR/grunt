var path = require('path');
var nopt = require('nopt');

// Default options.
var options = exports.optlist = {
  help: {
    short: 'h',
    info: 'Display this help text.',
    type: Boolean
  },
  config: {
    short: 'c',
    info: 'Specify an alternate "grunt.js" config file.',
    type: path
  },
  debug: {
    short: 'd',
    info: 'Enable debugging mode for tasks that support it.',
    type: Boolean
  },
  force: {
    short: 'f',
    info: 'A way to force your way past warnings. Want a suggestion? Don\'t use this option, fix your code.',
    type: Boolean
  },
  write: {
    info: 'Write files. For a dry run, use --no-write.',
    type: Boolean
  },
  verbose: {
    short: 'v',
    info: 'Verbose output. Lots more stuff in the console.',
    type: Boolean
  }
};

// Parse `options` into a form that nopt can handle.
var aliases = {};
var known = {};

Object.keys(options).forEach(function(key) {
  var option = options[key];
  var short = option.short;
  if (short) {
    aliases[short] = '--' + key; 
  }
  known[key] = option.type;
});

var parsed = nopt(known, aliases, process.argv, 2);
exports.tasks = parsed.argv.remain;
exports.options = parsed;
delete parsed.argv;