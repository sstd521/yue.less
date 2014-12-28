module.exports = {
  less: {
    files:["*.less"],
    tasks:["less"]
  },
  md:{
    files:["*.md"],
    tasks:["markdown","replace"]
  }
 };
