# The Go generator

A [Yeoman](http://yeoman.io) generator for [Go](http://golang.org/).

See the [Golang documentation](https://golang.org/doc/) for more information.

## Why Go generator ?

The Go programming language is an open source project to make programmers more productive.

Golang team defines [guidelines](https://blog.golang.org/organizing-go-code) to organize your code and structure your application.

The generator builds a standard directory hierarchy for your new golang project.

## Usage

Install Yeoman:

    npm install -g yo


Install Go generator
    
    sudo git clone https://github.com/BenC-/generator-go.git /usr/local/generator-go
    cd /usr/local/generator-go
    sudo npm link

Run generator

    mkdir myproject
    cd myproject
    yo go 


This command will generate a minimalist directory hierarchy plus a makefile and a .gitignore file.

<pre>
├── .gitignore            # ignores bin, pkg and other useless files
├── README.md             # simple readme
├── Makefile              # list available targets with 'make'
├── bin                   # executable folder
├── pkg                   # package object folder
└── src
    └── github.com
        └── myapp
            ├── hello
            │   ├── hello.go       # simple test source
            │   └── hello_test.go  # simple command source
            └── main.go            # simple command source

</pre>

Build your project and make it run it with 

```
make run
```

Run unit tests with

```
make test
```

## Contributing

If you would like to submit pull requests, please feel free to apply.

## Dependencies

* Golang
* Make 
* [Yo](https://github.com/yeoman/yo) (the scaffolding tool from Yeoman)
