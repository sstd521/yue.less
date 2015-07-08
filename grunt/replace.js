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
          match: "author",
          replacement: '<%= package.author.name %>'
        },
        {
          match: "main",
          replacement: '<%= package.main %>'
        },
        {
          match: "name",
          replacement: '<%= package.name %>'
        },
        {
          match: "title",
          replacement: '<%= package.title %>'
        }
      ]
    },
    files: [
      {expand: false, flatten: true, src: ['README.html'], dest: 'index.html'},
      {expand: false, flatten: true, src: ['bower.tpl'], dest: 'bower.json'}
    ]
  }
};
