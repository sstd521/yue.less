module.exports = {
  development: {
    files: {
      "yue.css": "yue.less"
    }
  },
  production: {
    options: {
      cleancss: true
    },
    files: {
      "yue.min.css": "yue.less"
    }
  }
};
