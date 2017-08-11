<p align="center" style="margin-bottom: 20px">
<img src="https://golang.org/doc/gopher/frontpage.png"/>
</p>

# The golang generator

An simple [Yeoman](http://yeoman.io) generator for the [golang](http://golang.org/) programming language.

### But what is golang ?

See the [Golang documentation](https://golang.org/doc/) for more information.

### But why a golang generator ?

The golang team defines [guidelines](https://blog.golang.org/organizing-go-code) to organize your code and structure your application.

The generator builds a standard directory hierarchy complying with thoses guidelines.

## Usage


1. Install yeoman

```
$ npm install -g yo
```

2. Install the generator

```
$ npm install generator-go
```

3. Run the generator

```
$ yo go
```

**That's all folks !**


This will generate a minimalist directory hierarchy, a makefile and a .gitignore in your *$GOPATH* folder.

<pre>
$GOPATH folder
└── src
    └── github.com
        └── myapp
            ├── hello
            │   ├── hello.go       # source file
            │   └── hello_test.go  # test file
            ├── main.go            # app entrypoint
            ├── Makefile
            ├── README.md
            └── .gitignore
</pre>

Once built, you can start your application with

```
make run
```

and run unit tests suite with

```
make test
```


## How to contribute


1. Fork the projecton your *github* repository

2. Clone your project locally

    $ sudo git clone https://github.com/USERNAME/generator-go.git
    $ cd generator-go

3. Modify sources

4. Symlink the package folder

   $ sudo npm link

5. Test your generator

    $ yo go

6. Create a PR !

This project welcomes all contributors, feel free to apply !

## Dependencies

This fabulous project depends on

* [golang](http://golang.org/)
* [Yo](https://github.com/yeoman/yo) (the scaffolding tool from Yeoman)
* [GNU make](https://www.gnu.org/software/make/manual/make.html)
