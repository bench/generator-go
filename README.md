[![Code Climate](https://api.codeclimate.com/v1/badges/b73387d211ce4f09286e/maintainability)](https://codeclimate.com/github/bench/generator-go/maintainability)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)


# A golang code generator

A [Yeoman](http://yeoman.io) generator for the [golang](http://golang.org/) programming language.


See the [Golang documentation](https://golang.org/doc/)

### Why a golang generator ?

The Golang team defined [guidelines](https://blog.golang.org/organizing-go-code) to organize code and structure an application.

The generator builds a standard directory hierarchy complying with those guidelines.

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

This will generate a minimalist directory hierarchy, plus a `Makefile` and a `.gitignore` in your *$GOPATH* folder.

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

Once built, go into application folder. 

* Run your application with

```
$ make run
```

* Compile your sources and build a binary with

```
$ make install
```

* Run all unit tests with

```
$ make test
```

* Clean up object files and binary with

```
$ make clean
```


## How to contribute


1. Fork the project

2. Clone your forked project locally

```
$ sudo git clone https://github.com/your_repo/generator-go.git
$ cd generator-go
```

3. Modify sources

4. Symlink the package folder

```
$ sudo npm link
```

5. Test your generator

```
$ yo go
```

6. Submit a pull request

This project welcomes all contributors, feel free to apply !

## Dependencies

This project depends on

* [golang](http://golang.org/)
* [Yo](https://github.com/yeoman/yo) (the scaffolding tool from Yeoman)
* [GNU make](https://www.gnu.org/software/make/manual/make.html)



<p align="center" style="margin-bottom: 20px; width: 100px; margin: auto">
<img src="http://talks.golang.org/2014/go4gophers/gopherswim.jpg"/>
</p>