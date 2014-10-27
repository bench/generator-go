#!/usr/bin/env node
'use strict';

var archiveType = require('./');
var input = process.argv.slice(2);
var pkg = require('./package.json');
var readChunk = require('read-chunk');
var stdin = require('get-stdin');

/**
 * Help screen
 */

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    archive-type <file>',
		'    cat <file> | archive-type',
		'',
		'  Example',
		'    archive-type foo.tar.gz',
		'    cat foo.tar.gz | archive-type'
	].join('\n'));
}

/**
 * Show help
 */

if (input.indexOf('-h') !== -1 || input.indexOf('--help') !== -1) {
	help();
	return;
}

/**
 * Show package version
 */

if (input.indexOf('-v') !== -1 || input.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

/**
 * Run
 */

function run(data) {
	var type = archiveType(new Buffer(data));

	if (type) {
		console.log(type);
		return;
	}

	console.error('Not a recognized archive');
	process.exit(1);
}

/**
 * Get stdin
 */

if (process.stdin.isTTY) {
	if (!input) {
		help();
		return;
	}

	readChunk(input[0], 0, 262, function (err, buf) {
		if (err) {
			console.error(err);
			process.exit(1);
		}

		run(buf);
	});
} else {
	stdin.buffer(run);
}
