const DEFAULT_TYPES = {
  js: {
    start: '/*!\n',
    lineWith: ' * ',
    end: '\n */\n'
  },
  css: {
    start: '/*!\n',
    lineWith: ' * ',
    end: '\n */\n'
  },
  html: {
    start: '<!--\n',
    lineWith: ' * ',
    end: '\n-->\n'
  },
  raw: {
    start: '',
    lineWith: ' ',
    end: ''
  }
};

const niceComments = function(inArray, inType) {
  var options = DEFAULT_TYPES[inType] || inType;
  var result = inArray.map(function(item) {
    return options.lineWith + item;
  });
  return options.start + result.join('\n') + options.end;
};

export default niceComments;
