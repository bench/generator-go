# The Go generator

A [Yeoman](http://yeoman.io) generator for [Go](http://golang.org/).

See the [Golang documentation](https://golang.org/doc/) for more information.

## Why Go generator ?

The Go programming language is an open source project to make programmers more productive.

Golang team defines [guidelines](https://github.com/yeoman/yo) to organize your code and structure your application.

The generator builds a standard directory hierarchy for your new golang project.

## Usage

Install Yeoman:

    npm install -g yo


Install Go generator
    
    sudo git clone https://github.com/BenC-/generator-go.git /usr/local/generator-go
    cd /usr/local/generator-go
    sudo npm link

Run generator

     yo go 


This command will generate a minimalist directory hierarchy plus a makefile and a .gitignore file.

Build your project and run it with 

```
make run
```

Your application is running !

## Contributing

If you would like to submit pull requests, please feel free to apply.

## Dependencies

* Golang
* Make 
* [Yo](https://github.com/yeoman/yo) (the scaffolding tool from Yeoman)
