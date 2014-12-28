module.exports = {
    all: {
      files: [
        {
          expand: true,
          src: '*.md',
          dest: '',
          ext: '.html'
        }
      ],
      options: {
        template: 'index.jst',
        preCompile: function(src, context) {},
        postCompile: function(src, context) {},
        templateContext: {},
        markdownOptions: {
          gfm: true,
          highlight: 'manual',
          codeLines: {
            before: '<span>',
            after: '</span>'
          }
        }
      }
    }

}
