'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

method1: function () {

console.log('\n' +
    '+-------------------------------------------------------+\n' +
    '| S i m p l e | g o | p r o j e c t | g e n e r a t o r |\n' +
    '+-------------------------------------------------------+\n' +
    '\n');

  var cb = this.async();


  var prompts = [{
    type: 'input',
    name: 'baseName',
    message: 'What is the name of your application?',
    default: 'myapp'
  }];

  this.prompt(prompts, function (props) {
    this.baseName = props.baseName;

    cb();
  }.bind(this));

},

	method2: function () {
	    console.log('Generating tree folders');
        var pkgDir = 'pkg/'
        var srcDir = 'src/'
        var binDir = 'bin/'
	    this.mkdir(pkgDir);
	    this.mkdir(srcDir);
	    this.mkdir(binDir);

        this.copy("_gitignore", ".gitignore");
        

	}
    });

