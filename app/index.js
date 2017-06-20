'use strict';

var yeoman = require('yeoman-generator');
//var terminalMenu = require('terminal-menu');

module.exports = yeoman.Base.extend({

  getmyappName: function() {

    console.log('\n' +
      '+-----------------------------------------+\n' +
      '| G o | p r o j e c t | g e n e r a t o r |\n' +
      '+-----------------------------------------+\n' +
      '\n');


    var cb = this.async();

    var prompts = [{
      type: 'input',
      name: 'myappName',
      message: 'What is the name of your application?',
      default: 'myapp'
    }, ];

    this.prompt(prompts, function(props) {
      this.myappName = props.myappName;
      cb();
    }.bind(this));

  },

  getRepoName: function() {

    var cb = this.async();

    var prompts = [{
      type: 'input',
      name: 'myrepoUrl',
      message: 'What is the URL repository of your application?',
      default: 'github.com'
    }, ];

    this.prompt(prompts, function(props) {
      this.myrepoUrl = props.myrepoUrl;
      cb();
    }.bind(this));

  },

  buildTreeFolderAndCopyFiles: function() {
    console.log('Generating tree folders');
    var pkgDir = 'pkg/'
    var srcDir = 'src/'+ this.myrepoUrl + "/" + this.myappName
    var binDir = 'bin/'

    this.mkdir(pkgDir);
    this.mkdir(srcDir);
    this.mkdir(binDir);

    this.copy("_gitignore", ".gitignore");
    this.copy("_hello.go", srcDir + "/hello/hello.go")
    this.copy("_hello_test.go", srcDir + "/hello/hello_test.go")

    var tmplContext = { 
        myappName : this.myappName,
        myrepoUrl: this.myrepoUrl
    };

    this.template("_main.go", srcDir + "/main.go", tmplContext)
    this.template("_README.md", "README.md");
    this.template("_Makefile", "Makefile", tmplContext)

  }
});

function reverseUrl(url) {
  return url.split(".").reverse().join(".");
}