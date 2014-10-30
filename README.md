# The Go generator

A [Yeoman](http://yeoman.io) generator for [Go](http://golang.org/).

See the [Golang documentation](https://golang.org/doc/) for more information.

## Why Go generator ?

The Go programming language is an open source project to make programmers more productive.

Golang team defines [guidelines](https://github.com/yeoman/yo) to organize your code and structure your application.

The generator builds a standard directory hierarchy for your new golang project.

## Usage

Install it globally `npm install -g generator-go`.

Run `yo go`. 

![Alt text](/../pictures/pictures/go-generator.png?raw=true "yo go command")

It will generate a standard golang project plus a makefile and a .gitignore file.

![Alt text](/../pictures/pictures/go-generator1.png?raw=true "yo go tree result")

Build your project and run it with `make run`.

![Alt text](/../pictures/pictures/go-generator2.png?raw=true "yo go make run")

## Contributing

If you would like to submit pull requests, please feel free to apply.

## Dependencies

* Go ($GOROOT must be set)
* Make
* [Yo](https://github.com/yeoman/yo) (the scaffolding tool from Yeoman)
