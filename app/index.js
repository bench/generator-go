'use strict';

const path = require('path');
const Generator = require('yeoman-generator');
const mkdir = require('mkdirp');

module.exports = class extends Generator {

    paths() {
        this.destinationRoot(process.env.GOPATH || './');
    }

    prompting() {

        console.log('\n' +
            '+-----------------------------------+\n' +
            '| G o | c o d e | g e n e r a t o r |\n' +
            '+-----------------------------------+\n' +
            '\n');

        let cb = this.async();

        let prompts = [{
            type: 'input',
            name: 'appName',
            message: 'What is the name of your application?',
            default: 'myapp'
        }, {
            type: 'input',
            name: 'repoUrl',
            message: 'What is your URL repository ?',
            default: 'github.com/me'
        }];

        return this.prompt(prompts).then(props => {
            this.appName = props.appName.replace(/\s+/g, '-').toLowerCase();
            if (props.repoUrl.substr(-1) != '/') props.repoUrl += '/';
            this.repoUrl = props.repoUrl + this.appName;
            cb()
        });

    }

    writing() {
        console.log('Generating tree folders');
        let pkgDir = this.destinationPath('pkg');
        let srcDir = this.destinationPath(path.join('src/', this.repoUrl));
        let binDir = this.destinationPath('bin');

        mkdir.sync(pkgDir);
        mkdir.sync(srcDir);
        mkdir.sync(binDir);

        this.fs.copy(
            this.templatePath('_gitignore'),
            path.join(srcDir, '.gitignore')
        );
        this.fs.copy(
            this.templatePath('_hello.go'),
            path.join(srcDir, '/hello/hello.go')
        );
        this.fs.copy(
            this.templatePath('_hello_test.go'),
            path.join(srcDir, '/hello/hello_test.go')
        );

        let tmplContext = {
            appName: this.appName,
            repoUrl: this.repoUrl
        };

        this.fs.copyTpl(
            this.templatePath('_main.go'),
            path.join(srcDir, 'main.go'),
            tmplContext
        );
        this.fs.copyTpl(
            this.templatePath('_README.md'),
            path.join(srcDir, 'README.md'),
            tmplContext
        );
        this.fs.copyTpl(
            this.templatePath('_Makefile'),
            path.join(srcDir, 'Makefile'),
            tmplContext
        );

    }
};
