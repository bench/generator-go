'use strict';

var yeoman = require('yeoman-generator');
//var terminalMenu = require('terminal-menu');

module.exports = yeoman.Base.extend({

  getAppName: function() {

    console.log('\n' +
      '+-----------------------------------------+\n' +
      '| G o | p r o j e c t | g e n e r a t o r |\n' +
      '+-----------------------------------------+\n' +
      '\n');


    var cb = this.async();

    var prompts = [{
      type: 'input',
      name: 'baseName',
      message: 'What is the name of your application?',
      default: 'myapp'
    }, ];

    this.prompt(prompts, function(props) {
      this.baseName = props.baseName;
      cb();
    }.bind(this));

  },

  getRepoName: function() {

    var cb = this.async();

    var prompts = [{
      type: 'input',
      name: 'repoUrl',
      message: 'What is the URL repository of your application?',
      default: 'github.com'
    }, ];

    this.prompt(prompts, function(props) {
      this.repoUrl = props.repoUrl;
      cb();
    }.bind(this));

  },

  buildTreeFoldersAndCopyStaticFiles: function() {
    console.log('Generating tree folders');
    var pkgDir = 'pkg/'
    var srcDir = 'src/'+ reverseUrl(this.repoUrl) + "/" + this.baseName
    var binDir = 'bin/'
    this.mkdir(pkgDir);
    this.mkdir(srcDir);
    this.mkdir(binDir);

    this.copy("_gitignore", ".gitignore");
    this.copy("main.go", srcDir + "/main.go")


  }
});

function reverseUrl(url) {

  return url.split(".").reverse().join(".");

}