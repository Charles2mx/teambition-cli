#!/usr/bin/env node
// node ./bin/command.js test my-project
// node ./bin/command.js init my-project

const program = require('commander')
program.version('0.0.1')
	.usage('<command> [project-name]')
	.command('test', 'this will run teambition-cli-test.js')
	.command('init', 'this will run teambition-cli-init.js')
	.parse(process.argv)