# Agent Instructions for generator-go

This document contains instructions for AI agents working on this repository.

## Project Overview
This project is a Yeoman generator used to scaffold functional Golang applications. It is a Node.js project that generates Go code, Makefiles, and other project structure files.

## Tech Stack
- **Language**: JavaScript (Node.js)
- **Framework**: Yeoman Generator (`yeoman-generator`)
- **Linter**: ESLint (Airbnb Base config)
- **Generated Language**: Go (Golang)

## Build & Test Commands

### Installation
To install dependencies:
```bash
npm install
```

### Linting
This project uses ESLint with the Airbnb Base configuration.
```bash
npx eslint .
```

### Testing
**Current Status**: There are currently no automated tests in the repository.
- Manual testing is required.
- To test the generator locally:
  1. Link the package globally: `npm link`
  2. Create a temporary directory: `mkdir ../temp-test && cd ../temp-test`
  3. Run the generator: `yo go`
  4. Verify the generated files and run `make run` inside the generated project.

### Running
This is a CLI tool (generator), not a standalone server. It is executed via the `yo` command after being installed or linked.

## Code Style & Conventions

### Formatting (Airbnb Base)
- **Indentation**: 2 spaces
- **Quotes**: Single quotes (`'`) preferred
- **Semicolons**: Always use semicolons
- **Trailing Commas**: Use trailing commas where valid in ES5+ (multiline objects/arrays)
- **Max Length**: 100 characters per line (soft limit)

### JavaScript Conventions
- Use **CommonJS** modules (`require` / `module.exports`).
- Use `const` for variables that are not reassigned, `let` otherwise. Avoid `var`.
- Use `async/await` for asynchronous operations (especially in `prompting` phase).
- **Console Output**:
  - `console.log` is allowed for user feedback (ensure `/* eslint-disable no-console */` is present if needed, typically at file top).
  - Use template literals for multiline strings.

### Yeoman Specifics
- **Inheritance**: Main class extends `Generator` (`require('yeoman-generator')`).
- **Phases**: Logic is distributed into standard Yeoman loop methods:
  - `initializing()`: Check environment (e.g., `go version`).
  - `prompting()`: Ask user for input (e.g., module name).
  - `writing()`: Copy templates to destination.
  - `install()`: Run installation commands (e.g., `go mod init`).
  - `end()`: Print success/usage messages.
- **File System**:
  - Use `this.fs.copy` for static files.
  - Use `this.fs.copyTpl` for templates requiring variable substitution.
  - Templates reside in `app/templates/`. Files starting with `_` in templates are typically renamed (e.g., `_gitignore` -> `.gitignore`).

### Error Handling
- Use `try/catch` or check `child.error` when using `spawnSync`.
- Exit with `process.exit(1)` (or `exit(1)` from `process`) on critical failures (e.g., missing Go binary).

## Development Workflow
1. **Analyze**: Understand the requirement. If modifying templates, ensure the generated Go code is valid.
2. **Implement**: Modify `app/index.js` or files in `app/templates/`.
3. **Lint**: Run `npx eslint .` and fix any style violations.
4. **Verify**: Perform a manual test run (as described in Testing section) to ensure the generator works end-to-end.

## Directory Structure
- `app/index.js`: Main generator logic.
- `app/templates/`: Directory containing the boilerplate files to be generated.
  - `_gitignore`: Template for .gitignore
  - `_hello.go`: Sample Go code
  - `_main.go`: Main Go entry point template
  - `_Makefile`: Makefile template

## Imports
Group imports at the top of the file:
1. Core Node.js modules (e.g., `child_process`, `process`)
2. Third-party modules (e.g., `yeoman-generator`)
