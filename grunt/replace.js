module.exports = {
  dist: {
    options: {
      encoding:'utf-8',
      patterns: [
        {
          match: "version",
          replacement: '<%= package.version %>'
        },
        {
          match: "desc",
          replacement: '<%= package.description %>'
        },
        {
          match: "keywords",
          replacement: '<%= package.keywords %>'
        },
        {
          match: "title",
          replacement: '<%= package.title %>'
        }
      ]
    },
    files: [
      {expand: false, flatten: true, src: ['README.html'], dest: 'index.html'},
    ]
  }
};
