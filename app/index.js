import Generator from 'yeoman-generator';
import { spawnSync } from 'node:child_process';
import process from 'node:process';

export default class extends Generator {
  initializing() {
    const child = spawnSync('go', ['version']);
    if (child.error) {
      console.log('Cannot run go command.\nIs the go binary available your path environment variable?');
      process.exit(1);
    }
  }

  async prompting() {
    console.log(
      '\n'
        + '+-----------------------------------+\n'
        + '| g o | c o d e | g e n e r a t o r |\n'
        + '+-----------------------------------+\n'
        + '\n',
    );

    const prompts = [
      {
        type: 'input',
        name: 'moduleName',
        message: 'What is your module name?',
        default: 'github.com/user/hello',
      },
    ];

    const props = await this.prompt(prompts);
    this.moduleName = props.moduleName;
  }

  writing() {
    console.log('\nGenerating tree folders');

    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore'),
    );
    this.fs.copy(
      this.templatePath('_hello.go'),
      this.destinationPath('hello/hello.go'),
    );
    this.fs.copy(
      this.templatePath('_hello_test.go'),
      this.destinationPath('hello/hello_test.go'),
    );

    const tmplContext = {
      moduleName: this.moduleName,
    };

    this.fs.copyTpl(
      this.templatePath('_main.go'),
      this.destinationPath('main.go'),
      tmplContext,
    );
    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'),
      tmplContext,
    );
    this.fs.copyTpl(
      this.templatePath('_Makefile'),
      this.destinationPath('Makefile'),
      tmplContext,
    );
  }

  install() {
    const child = spawnSync('go', ['mod', 'init', this.moduleName], {
      cwd: process.cwd(),
      env: process.env,
      stdio: [process.stdin, process.stdout, process.stderr],
      encoding: 'utf-8',
    });
    if (child.error) {
      console.log(`Cannot run go mod init command: ${child.stdout}`);
      process.exit(1);
    }
  }

  end() {
    console.log(
      `
To run your application:
    make run

To compile your sources and build binary
    make install

To run all tests
    make test`,
    );

    console.log(
      '\n'
        + '+-------------------------+\n'
        + '|  enjoy your go project  |\n'
        + '+-------------------------+\n'
        + '\n',
    );
  }
}
